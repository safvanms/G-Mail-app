import React from 'react'
import './Header.css'
import LOGO from '../../Assets/Images/logo_gmail.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdSearch } from 'react-icons/io'
import { VscSettings } from 'react-icons/vsc'
import { FaRegQuestionCircle } from 'react-icons/fa'
import { IoSettingsOutline } from "react-icons/io5";
import { TbGridDots } from 'react-icons/tb'

// dummy avatar url
const Avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QyIh6leps6UibGEqD8O-Up3SkNf4JGz17g&usqp=CAU"

export default function Header({ onToggleSidebar }) {
  return (
    <div className="header">
      <div className="logo_sec">
        <div className="hamburger" onClick={onToggleSidebar}>
          <RxHamburgerMenu size={20} />
        </div>
        <div className="logo">
          <img src={LOGO} alt="logo" />
        </div>
      </div>

      <div className="right_sec">
        <div className="search_sec">
          <div className="search_container">
            <div className="icon">
              <IoMdSearch size={25} />
            </div>
            <input type="text" placeholder="Search mail" />
            <div className="icon rotated_icon">
              <VscSettings size={22} />
            </div>
          </div>
        </div>

        <div className="sm_account_img">
            <img src={Avatar} alt="avatar" />
          </div>

        <div className="account_sec">
          <FaRegQuestionCircle size={22} />
          <IoSettingsOutline size={22} />
          <TbGridDots size={22} />
          <div className="account_img">
            <img src={Avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}
