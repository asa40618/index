import React, { useState } from 'react'
import style from './header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '@mui/material'
import HeaderPhoneNav from './headerPhoneNav'

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
          <h4 className="d-none d-sm-block">初次建立的小站</h4>
        </div>
        <div className={style.navbtn}>
          <ul>
            <li>
              <Button>
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link href="/aboutme">About Me</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link href="/resume">Resume</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link href="/project">Project</Link>
              </Button>
            </li>
          </ul>
        </div>
        <HeaderPhoneNav />
      </div>
    </>
  )
}
