import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './news.module.scss'
import { Skeleton } from '@mui/material'
import Image from 'next/image'

export default function News() {
  // 新聞API
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

  // console.log(newsResourse)
  return (
    <div className={style.newsContext}>
      <p>今日新聞</p>
      {newsResourse.map((item, index) => (
        <a key={index} href={item.url}>
          <div className={`row ${style.newsArea}`}>
            <div className={`${style.newsImage} col-4`}>
              {item.urlToImage === null ? (
                <Image
                  src="/image/no-image-icon.png"
                  width={210}
                  height={118}
                  alt="no image"
                />
              ) : (
                <img src={item.urlToImage} alt="news" />
              )}
            </div>
            <div className="col-8">
              {item.title ? <h4>{item.title}</h4> : <Skeleton variant="text" />}
              {item.author === null ? <h6>匿名</h6> : <h6>{item.author}</h6>}
              {item.publishedAt ? (
                <h6>{item.publishedAt}</h6>
              ) : (
                <>
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
