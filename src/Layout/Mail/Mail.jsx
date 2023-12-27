import React from "react";
import "./mail.css";
import { useParams } from "react-router-dom";
import allMails from "../../allMails.json";
import MailPageHeader from "../../Components/MailPageHeader/MailPageHeader";
import { GrPrint } from "react-icons/gr";
import { GrNewWindow } from "react-icons/gr";
import { IoIosStarOutline } from "react-icons/io";
import { FaRegSmile } from "react-icons/fa";
import { LuReply } from "react-icons/lu";
import { SlOptionsVertical } from "react-icons/sl";


export default function Mail() {
  const url = "https://picsum.photos/200/200";

  const { id } = useParams();

  const selectedMail = allMails.all_mails.find(
    (mail) => mail.id === parseInt(id, 10)
  );

  return (
    <div>
      <MailPageHeader />
      {selectedMail && (
        <>
          <div className="mail_subject">
            <p>{selectedMail.subject}</p>
            <div className="mail_sub_icon">
              <div className="basic">
                <GrPrint size={18} />
              </div>
              <div className="basic">
                <GrNewWindow size={18} />
              </div>
            </div>
          </div>

          {/* Mail sender Info */}

          <div className="mail_sender_info">
            <div className="sender_info">
              <img src={url} alt="avatar" />
              <div className="details">
                <p>{selectedMail.name}</p>
                <p>to me -</p>
              </div>
            </div>
            <div className="reactions_sec">
              <p>
                {selectedMail.date}
                {selectedMail.date}
              </p>
              <div className="basic">
                <IoIosStarOutline size={18} />
              </div>
              <div className="basic">
                <FaRegSmile size={18} />
              </div>
              <div className="basic">
                <LuReply size={18} />
              </div>
              <div className="basic">
                <SlOptionsVertical size={14} />
              </div>
            </div>
          </div>

          {/* Mail content */}

          <div className="mail_con">
            <p>{selectedMail.mail}</p>
          </div>
        </>
      )}
    </div>
  );
}
