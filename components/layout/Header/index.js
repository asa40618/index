import React, { useState } from 'react'
import style from './header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  return (
    <>
      <div className={` ${style.headerBlock}`}>
        <div>
          <div>
            <Link href="/">
              <h1 className="text-info">Next小站</h1>
            </Link>
          </div>
          <h4>初次建立的小站</h4>
        </div>
        <div className={style.navbtn}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutme">About Me</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link href="/project">Project</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
