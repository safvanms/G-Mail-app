import React from "react";
import "./inboxHeader.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosRefresh } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";



export default function InboxHeader() {
  return (
    <div className="inbox_header">
      <div className="left_inb_header">
        <div className="first_sec">
          <input type="checkbox" />
          <div className="first_sec_icon">
            <IoMdArrowDropdown size={16} />
          </div>
        </div>
        <div className="last_sec">
          <div className="last_sec_icon">
          <IoIosRefresh size={16}/>
          </div>
          <div className="last_sec_icon">
            <SlOptionsVertical size={16} />
          </div>
        </div>
      </div>
      <div className="rightt_inb_header">
        <p>1-50 of 21,262</p>
        <div className="last_sec_icon">
          <MdArrowBackIos size={18}/>
        </div>
        <div className="last_sec_icon">
        <MdArrowForwardIos size={18}/>
        </div>
      </div>
    </div>
  );
}
