import React, { useState } from "react";
import "./ComposeDialog.css";
import { FaMinus, FaPenClip } from "react-icons/fa6";
import { GrExpand } from "react-icons/gr";
import {
  MdOutlineCloseFullscreen,
  MdOutlineInsertPhoto,
  MdOutlineLink,
} from "react-icons/md";
import { AiOutlineClose, AiOutlineFontColors } from "react-icons/ai";
import { FaRegSquareFull } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdAttach } from "react-icons/io";
import { FaRegSmileBeam } from "react-icons/fa";
import { RiDeleteBin6Line, RiDriveLine } from "react-icons/ri";
import { FiLock } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";

const ComposeDialog = ({ isOpen, onClose }) => {
  const [expanded, setExpanded] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleMinimize = () => {
    setMinimized(!minimized);
  };

  return (
    <div>
      {isOpen && (
        <div className="compose-dialog-overlay">
          <div
            className={expanded ? "expanded_dialog" : "compose-dialog-content"}
            style={{ height: minimized ? "50px" : "" }}
          >
            <div className="compose-dialog-header">
              <span>New Message</span>
              <div className="compose-dialog-option">
                <span onClick={handleMinimize}>
                  {minimized ? (
                    <FaRegSquareFull size={12} />
                  ) : (
                    <FaMinus size={14} />
                  )}
                </span>
                <span onClick={handleExpand} className="expand_btn">
                  {expanded ? (
                    <MdOutlineCloseFullscreen size={14} />
                  ) : (
                    <GrExpand size={12} />
                  )}
                </span>
                <AiOutlineClose size={14} onClick={onClose} />
              </div>
            </div>
            <div className="compose_body_container">
              <div className="compose-dialog-body">
                <input placeholder="Recipients" />
                <input placeholder="Subject" />
                <input />
              </div>
              <div className="compose_options">
                <div className="main_options">
                  <div className="send_btn">
                    <div className="btn_left">Send</div>
                    <div className="btn_right">
                      <IoMdArrowDropdown size={16} />
                    </div>
                  </div>
                  <div className="opt_btn">
                    <AiOutlineFontColors size={20} />
                  </div>
                  <div className="opt_btn">
                    <IoMdAttach size={18} />
                  </div>
                  <div className="opt_btn">
                    <MdOutlineLink size={18} />
                  </div>
                  <div className="opt_btn">
                    <FaRegSmileBeam size={18} />
                  </div>
                  <div className="opt_btn">
                    <RiDriveLine size={18} />
                  </div>
                  <div className="opt_btn">
                    <MdOutlineInsertPhoto size={18} />
                  </div>
                  <div className="opt_btn">
                    <FiLock size={18} />
                  </div>
                  <div className="opt_btn">
                    <FaPenClip size={18} />
                  </div>
                  <div className="opt_btn">
                    <SlOptionsVertical size={16} />
                  </div>
                </div>
                <div className="delete">
                  <div className="opt_btn">
                    <RiDeleteBin6Line size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComposeDialog;
