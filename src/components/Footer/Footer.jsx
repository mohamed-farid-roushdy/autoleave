import React from 'react'
import styleFooter from "./footer.module.css"
import Image from 'next/image'
// import { socialIcon } from './data'

const Footer = () => {
  return (
    <div className={styleFooter.container} >
      <br/>
      <div>Ⓒ2023 autoleave. All right reserved.</div>
      <div className={styleFooter.social}>



      </div>
    </div>
  )
}

export default Footer