import React, { useState } from "react";
import "./inbox.css";
import InboxHeader from "../../Components/InboxHeader/InboxHeader";
import InboxSection from "../../Components/InboxSection/InboxSection";
import allMails from "../../allMails.json";
import { IoArchiveOutline, IoStarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscMail } from "react-icons/vsc";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import ComposeDialog from "../../Components/ComposeDialog/ComposeDialog";

export default function Inbox() {
  const [hovered, setHovered] = useState(null);
  const [isComposeDialogOpen, setComposeDialogOpen] = useState(false); // New state

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const navigate = useNavigate();

  const handleShowMail = (ID) => {
    navigate(`/mail/${ID}`);
  };

  const handleOpenComposeDialog = () => {
    setComposeDialogOpen(true);
  };

  const handleCloseComposeDialog = () => {
    setComposeDialogOpen(false);
  };

  return (
    <div>
      <InboxHeader />
      <InboxSection />
      <div>
        {allMails.all_mails.map(({ id, name, subject, mail, time }) => (
          <div
            key={id}
            className="inbox_row"
            onClick={() => handleShowMail(id)}
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="inbox_icons">
              <input type="checkbox" />
              <IoStarOutline size={16} />
            </div>
            <div className="inbox_name">{name}</div>
            <div className="inb_sub">
              {subject} {"-"}
            </div>
            <div className="inb_mail">{mail}</div>
            {hovered === id ? (
              <div className="hovered_row">
                <div className="basic">
                  <IoArchiveOutline size={18} />
                </div>
                <div className="basic">
                  <RiDeleteBin6Line size={18} />
                </div>
                <div className="basic">
                  <VscMail size={18} />
                </div>
                <div className="basic">
                  <BiTimeFive size={18} />
                </div>
              </div>
            ) : (
              <div className="inb_time">{time}</div>
            )}
          </div>
        ))}
      </div>
      <div className="sm_compose_button" onClick={handleOpenComposeDialog}>
        <MdOutlineEdit size={25} />
        <div>Compose</div>
      </div>
      <ComposeDialog
        isOpen={isComposeDialogOpen}
        onClose={handleCloseComposeDialog}
      />
    </div>
  );
}
