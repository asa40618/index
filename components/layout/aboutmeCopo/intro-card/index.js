import React from 'react'
import style from './aboutme.module.scss'
import Introcard from './introCard/introcard'

export default function AboutmeIndex() {
  return (
    <>
      <div className="d-flex">
        <div className="col-6 bg-primary">
          <div className={`${style.background} shadow`}>
            <Introcard />
            <div className="m-3">
              <h1>您好！</h1>
              <h2>我是陳炫志</h2>
              <p>
                原本就讀於護理系，因對前端工作有興趣在畢業後開始學習相關知識，於2023於資展國際前端工程師班結業。
              </p>
              使用工具:
            </div>
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </>
  )
}
