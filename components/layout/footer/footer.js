import React from 'react'
import style from './footer.module.scss'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <div className={style.footerBody}>
        <div className={style.profile}>
          <div>
            <p>power by</p>
            <Image
              src="/image/next.svg"
              width={100}
              height={50}
              alt="next.svg"
            />
          </div>
          <div className={style.information}>
            <p>連絡電話:0922267629</p>
            <p>連絡信箱:doublebrown850621@gmail.com</p>
            <p>網站作者:陳炫志</p>
          </div>
        </div>
      </div>
    </>
  )
}
