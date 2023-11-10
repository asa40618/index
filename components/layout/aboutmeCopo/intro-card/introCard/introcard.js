import React from 'react'
import Image from 'next/image'
import style from './introCard.module.scss'
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'

export default function Introcard() {
  return (
    <>
      <div className={`shadow ${style.cardBody}`}>
        <div className={style.photo}>
          <Image src="/R.jpg" height={250} width={250}></Image>
        </div>
        <div className="m-2 border-bottom">
          <p className="h1 text-center">陳炫志</p>
        </div>
        <div className="text-center">前端工程師</div>
        <div className={style.icon}>
          <ul>
            <li>
              <AiFillFacebook />
            </li>
            <li>
              <AiFillGithub />
            </li>
            <li>
              <BiLogoGmail />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
