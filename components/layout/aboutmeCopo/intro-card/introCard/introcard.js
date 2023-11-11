import React from 'react'
import Image from 'next/image'
import style from './introCard.module.scss'
import { AiFillFacebook, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'

export default function Introcard() {
  return (
    <>
      <div className={`shadow ${style.cardBody}`}>
        <div className={style.photo}>
          <Image src="/profilePhoto.jpg" height={225} width={200}></Image>
        </div>
        <div className="m-2 border-bottom">
          <p className="h2 text-center">陳炫志</p>
        </div>
        <div className={style.icon}>
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100004031783892">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="https://github.com/asa40618?tab=repositories">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/JXf13ZEz4WMgn9P">
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
