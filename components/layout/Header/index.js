import React from 'react'
import style from './header.module.scss'
import Link from 'next/link'
import { Button } from '@mui/material'
import HeaderPhoneNav from './headerPhoneNav'

export default function Header() {
  const linkString = ['about', 'resume', 'project']
  return (
    <>
      <div className={` ${style.headerBlock}`}>
        <div>
          <div>
            <Link href="/">
              <h1 className="text-info">Next小站</h1>
            </Link>
          </div>
        </div>
        <div className={style.navbtn}>
          <ul>
            <li>
              <Link href="/">
                <Button>Home</Button>
              </Link>
            </li>
            {linkString.map((text, index) => (
              <li key={index}>
                <Link href={`/${text}`}>
                  <Button>{text}</Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* 手機板header，scss module 有設定手機板才出現 */}
        <HeaderPhoneNav />
      </div>
    </>
  )
}
