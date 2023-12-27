import { FaInbox } from "react-icons/fa6";
import { MdOutlineStarOutline } from "react-icons/md";
import { LuClock } from "react-icons/lu";
import { AiOutlineSend } from "react-icons/ai";
import { FaRegFile } from "react-icons/fa";
import { PiArrowFatRightThin } from "react-icons/pi";
import { MdOutlineChat } from "react-icons/md";
import { MdOutlineScheduleSend } from "react-icons/md";
import { LuMails } from "react-icons/lu";
import { RiSpam2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { LiaComments } from "react-icons/lia";
import { GoTag } from "react-icons/go";
import { MdOutlineSettings } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";





const initialOptions = [
     {
          id: 1,
          name: 'Inbox',
          icon: <FaInbox size={16} />,
          path:"/"
     },
     {
          id: 2,
          name: 'Starred',
          icon: <MdOutlineStarOutline size={20} />,
          path:"starred"
     },
     {
          id: 3,
          name: 'Snoozed',
          icon: <LuClock size={18} />,
          path:"snoozed"
     },
     {
          id: 4,
          name: 'Sent',
          icon: <AiOutlineSend size={18} />,
          path:"sent"
     },
     {
          id: 5,
          name: 'Drafts',
          icon: <FaRegFile size={16} />,
          path:"drafts"
     },

]



const additionalOptions = [

     {
          id: 6,
          name: 'Important',
          icon: <PiArrowFatRightThin size={18} />
     },
     {
          id: 7,
          name: 'Chats',
          icon: <MdOutlineChat size={18} />
     },
     {
          id: 8,
          name: 'Scheduled',
          icon: <MdOutlineScheduleSend size={18} />
     },
     {
          id: 9,
          name: 'All mail',
          icon: <LuMails size={18} />
     },
     {
          id: 10,
          name: 'Spam',
          icon: <RiSpam2Line size={18} />
     },
     {
          id: 11,
          name: 'Bin',
          icon: <RiDeleteBin6Line size={18} />
     },
     {
          id: 15,
          name: 'Categories',
          icon: <PiArrowFatRightThin size={18} />,
          subOptions: [
               {
                    id: 16,
                    name: 'Social',
                    icon: <FiUsers size={18} />,
                    count:"940"
               },
               {
                    id: 17,
                    name: 'Updates',
                    icon: <FiInfo size={18} />,
                    count:"20,255"
               },
               {
                    id: 18,
                    name: 'Forums',
                    icon: <LiaComments size={18} />,
                    count:""
               },
               {
                    id: 19,
                    name: 'Promotions',
                    icon: <GoTag size={18} />,
                    count:"3775"
               },
          ],
     },

];


const bottomOptions = [
     {
          id: 13,
          name: 'Manage Label',
          icon: <MdOutlineSettings size={18} />
     },
     {
          id: 14,
          name: 'Create new label',
          icon: <IoMdAdd size={18} />
     },
]

export { initialOptions, additionalOptions, bottomOptions }