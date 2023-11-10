import React from 'react'
import style from './navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className={`p-2 ${style.basic}`}>
        <div>
          <Link href="/">
            <h1 className="text-info">Next小站</h1>
          </Link>
        </div>
        <div className={style.navbtn}>
          <ul>
            <li>
              <Link href="/">About Me</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link href="/project">Project</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
