import React from 'react'
import style from './resume.module.scss'

export default function ResumeComponent() {
  const resume = [
    {
      date: '2019年10月',
      content: '於中山醫學大學護理系畢業',
    },
    {
      date: '2023年10月',
      content: '資展國際(原資策會)前端工程師訓練班結訓',
    },
  ]

  return (
    <>
      <div>
        <div className={`container ${style.background}`}>
          <h2 className="text-center">經歷</h2>
          {resume.map((item, index) => {
            return (
              <div key={index}>
                <div className={style.resumeCard}>
                  <h3>{item.date}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
