import React, { useState } from "react";
import "./sidebar.css";
import {
  additionalOptions,
  bottomOptions,
  initialOptions,
} from "../../options";
import {
  MdOutlineEdit,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { IoMdAdd, IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import LOGO from "../../Assets/Images/logo_gmail.png";
import { NavLink } from "react-router-dom";
import ComposeDialog from "../ComposeDialog/ComposeDialog";

export default function Sidebar({ expanded, onToggleCategories }) {
  const [expandedOption, setExpandedOption] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [isComposeDialogOpen, setComposeDialogOpen] = useState(false); // New state

  const handleMouseEnter = (id) => {
    setHoveredElement(id);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  const handleExpandOption = () => {
    setExpandedOption((prevExpanded) => {
      if (prevExpanded) {
        setShowCategories(false);
      }
      return !prevExpanded;
    });
  };

  const handleShowCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleOpenComposeDialog = () => {
    setComposeDialogOpen(true);
  };

  const handleCloseComposeDialog = () => {
    setComposeDialogOpen(false);
  };

  return (
    <div>
      <div className="compose_button" onClick={handleOpenComposeDialog}>
        <MdOutlineEdit size={25} />
        <div>Compose</div>
      </div>
      <div className="sm_logo">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="all_options">
        {initialOptions.map(({ id, name, icon, path }) => (
          <NavLink
            to={path}
            key={id}
            activeClassName="active"
            style={{ textDecoration: "none" }}
          >
            <div className="side_option">
              <div>{icon}</div>
              <div>{name}</div>
            </div>
          </NavLink>
        ))}
        <div className="side_option" onClick={handleExpandOption}>
          {expandedOption ? (
            <>
              <MdKeyboardArrowUp size={18} />
              <div>Less</div>
            </>
          ) : (
            <>
              <MdKeyboardArrowDown size={18} />
              <div>More</div>
            </>
          )}
        </div>

        {expandedOption &&
          additionalOptions.map(({ id, icon, name }) => (
            <div
              key={id}
              className="side_option"
              onClick={name === "Categories" ? handleShowCategories : null}
            >
              <div>
                {name === "Categories" && (
                  <span className="categories_arrow">
                    {showCategories ? (
                      <IoMdArrowDropdown size={18} />
                    ) : (
                      <IoMdArrowDropright size={18} />
                    )}
                  </span>
                )}
                {icon}
              </div>
              <div>{name}</div>
            </div>
          ))}

        {showCategories &&
          additionalOptions
            ?.find((Categories) => Categories.name === "Categories")
            ?.subOptions?.map(({ id, icon, name, count }) => (
              <div
                key={id}
                className="expanded"
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="expanded_left_side">
                  <div>{icon}</div>
                  <div>{name}</div>
                </div>
                <div>
                  {hoveredElement === id ? (
                    <div className="cat_option">
                      <SlOptionsVertical size={15} />
                    </div>
                  ) : (
                    count
                  )}
                </div>
              </div>
            ))}

        {expandedOption &&
          bottomOptions.map(({ id, icon, name }) => (
            <div key={id} className="side_option">
              <div>{icon}</div>
              <div>{name}</div>
            </div>
          ))}

        <div className="labels">
          <h2>Labels</h2>
          <div className="label_logo">
            <IoMdAdd size={18} />
          </div>
        </div>
      </div>
      <ComposeDialog
        isOpen={isComposeDialogOpen}
        onClose={handleCloseComposeDialog}
      />
    </div>
  );
}
