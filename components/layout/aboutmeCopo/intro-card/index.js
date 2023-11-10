import React from 'react'
import style from './aboutme.module.scss'
import Introcard from './introCard/introcard'
import Image from 'next/image'

export default function AboutmeIndex() {
  const toolbar = [
    'front3.webp',
    'Reacticon.svg',
    'Bootstrap_logo.svg',
    'sass.png',
    'axios.jpg',
    'Node.js_logo.svg',
    'ExpressJS-logo.png',
    'Figma-logo.svg',
  ]
  return (
    <>
      <div className="d-flex">
        <div className="col-10 bg-primary">
          <div className={`${style.background} shadow`}>
            <Introcard />
            <div className={`${style.innerText} `}>
              <h1>您好！</h1>
              <h2>我是陳炫志</h2>
              <p>
                原本就讀於護理系，因對前端工作有興趣在畢業後開始學習相關知識，於2023於資展國際前端工程師班結業。
              </p>
              <br />
              <h4>擅長工具:</h4>
              <ul>
                {toolbar.map((tool, index) => {
                  return (
                    <li key={index}>
                      <Image src={`/${tool}`} width={110} height={80} />
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </>
  )
}
