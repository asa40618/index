import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './news.module.scss'
import { Skeleton } from '@mui/material'

export default function News() {
  const [newsResourse, setNewsResourse] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=064b36352c4b422ca315ef166723400f'
        )
        const articles = response.data.articles
        const randomThreeNews = []
        const selectedIndexes = new Set()

        while (randomThreeNews.length < 3) {
          const randomIndex = Math.floor(Math.random() * articles.length)
          if (!selectedIndexes.has(randomIndex)) {
            randomThreeNews.push(articles[randomIndex])
            selectedIndexes.add(randomIndex)
          }
        }
        setNewsResourse(randomThreeNews)
      } catch (error) {
        console.error('新聞異常連線', error)
      }
    }
    fetchNews()
  }, [])

  return (
    <div className={style.newsContext}>
      {newsResourse.map((item, index) => (
        <a key={index} href={item.url}>
          <div className={`row ${style.newsBlock}`}>
            <div className={`${style.newsImage} col-4`}>
              {item.urlToImage ? (
                <img src={item.urlToImage} alt="news" />
              ) : (
                <Skeleton variant="rectangular" width={210} height={118} />
              )}
            </div>
            <div className="col-8">
              {item.title ? <p>{item.title}</p> : <Skeleton variant="text" />}
              {item.author ? (
                <h6>
                  {item.author}
                  <br />
                  {item.publishedAt}
                </h6>
              ) : (
                <>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                </>
              )}
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
