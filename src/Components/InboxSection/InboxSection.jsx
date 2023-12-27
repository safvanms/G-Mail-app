import React, { useState } from "react";
import "./inboxSection.css";
import { FaInbox } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { GoTag } from "react-icons/go";

const section = [
  {
    id: 1,
    name: "Primary",
    icon: <FaInbox size={16} />,
  },
  {
    id: 2,
    name: "Promotions",
    icon: <GoTag size={16} />,
  },
  {
    id: 3,
    name: "Social",
    icon: <FiUsers size={16} />,
  },
];

export default function InboxSection() {
  const [selected, setSelected] = useState(1);

  const handleSelect = (ID) => {
    setSelected(ID);
  };

  return (
    <div className="inboxSection">
      {section?.map(({ id, name, icon }) => (
        <div
          className={selected === id ? "selected_section" : "section"}
          key={id}
          onClick={() => handleSelect(id)}
        >
          <div className="sec_icon">{icon}</div>
          <div className="inner_sec">{name}</div>
        </div>
      ))}
    </div>
  );
}
