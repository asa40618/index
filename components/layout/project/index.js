import React from 'react'
import style from './project.module.scss'
import Image from 'next/image'
import { AiOutlineLink } from 'react-icons/ai'

export default function ProjectComponents() {
  const project = [
    {
      data: 'oasis.png',
      date: '2023年10月',
      content: '資展國際專題製作-Oasis',
      href: 'https://side-project-frontend-iota.vercel.app/',
    },
  ]
  return (
    <>
      <div>
        <div className={`container ${style.background}`}>
          <h2 className="text-center">作品集</h2>
          {project.map((item, index) => {
            return (
              <div key={index} className={style.outerbox}>
                <div className={style.projectCard}>
                  <div>
                    <Image
                      src={`/image/${item.data}`}
                      height={200}
                      width={400}
                      alt="item.data"
                    />
                  </div>
                  <div className={style.innerText}>
                    <h3>{item.content}</h3>
                    <p>{item.date}</p>
                    <a href={item.href}>
                      <AiOutlineLink />
                      &nbsp; 連結點我
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
