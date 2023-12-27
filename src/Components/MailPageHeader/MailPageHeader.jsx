import React from "react";
import "./MailPageHeader.css";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoArchiveOutline } from "react-icons/io5";
import { RiSpam2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import { MdDriveFileMoveOutline } from "react-icons/md";
import { MdLabelOutline } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function MailPageHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="mail_page_header">
      <div className="left_mail_page_header">
        <div className="return_icon basic" onClick={goBack}>
          <IoMdArrowBack size={18} />
        </div>
        <div className="first_icon_set">
          <div className="basic">
            <IoArchiveOutline size={18} />
          </div>
          <div className="basic">
            <RiSpam2Line size={18} />
          </div>
          <div className="basic">
            <RiDeleteBin6Line size={18} />
          </div>
        </div>
        <div className="second_icon_set">
          <div className="basic">
            <IoMailUnreadOutline size={18} />
          </div>
          <div className="basic">
            <MdAccessTime size={18} />
          </div>
          <div className="basic">
            <MdAddTask size={18} />
          </div>
        </div>
        <div className="third_icon_set">
          <div className="basic">
            <MdDriveFileMoveOutline size={18} />
          </div>
          <div className="basic">
            <MdLabelOutline size={18} />
          </div>
          <div className="basic">
            <SlOptionsVertical size={18} />
          </div>
        </div>
      </div>
      <div className="right_mail_page_header">
        <p>1-50 of 21,262</p>
        <div className="basic">
          <IoIosArrowBack size={18} />
        </div>
        <div className="basic">
          <IoIosArrowForward size={16} />
        </div>
      </div>
    </div>
  );
}
