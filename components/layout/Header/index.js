import React, { useState } from 'react'
import style from './header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  return (
    <>
      <div className={` ${style.basic}`}>
        <div>
          <Link href="/">
            <h1 className="text-info">Next小站</h1>
          </Link>
        </div>
        <div className={style.navbtn}>
          <ul>
            <li active>
              <Link href="/">About Me</Link>
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
