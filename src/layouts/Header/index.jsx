import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  AiOutlineMessage,
  AiOutlineNotification,
  IoIosArrowDown,
} from "react-icons/all";
import HeaderCSS from "./index.module.scss";
import Profile from "../../assets/image/profile.jpg";

const useClickOutside = (handler) => {
  const menuRef = useRef();

  useEffect(() => {
    const maybeHandler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, []);

  return menuRef;
};

export default function Header() {
  const location = useLocation();
  const [isToggle, setToggle] = useState(false);

  const Untoggle = useClickOutside(() => {
    setToggle(false);
  });

  return (
    <div className={HeaderCSS._container}>
      <div className={HeaderCSS._wrap_a}>
        <div className={HeaderCSS._logo}>TAIMA</div>
        <div className={HeaderCSS._wrap_btn}>
          <div
            className={`${HeaderCSS._btn} ${
              location.pathname === "/" && HeaderCSS.btn_border
            }`}
          >
            Project
          </div>
          <div className={HeaderCSS._btn}>Task</div>
          <div className={HeaderCSS._btn}>Time Tracking</div>
          <div className={HeaderCSS._btn}>Member</div>
        </div>
      </div>
      <div className={HeaderCSS._wrap_b}>
        <div className={HeaderCSS._wrap_notification}>
          <div className={HeaderCSS._wrap_notif}>
            <AiOutlineMessage size={24} />
          </div>
          <div className={HeaderCSS._wrap_notif}>
            <AiOutlineNotification size={24} />
          </div>
        </div>
        <div className={HeaderCSS._profile} ref={Untoggle}>
          <div
            className={HeaderCSS._wrap_profile}
            onClick={() => setToggle(!isToggle)}
          >
            <img src={Profile} alt="Profile" />
            <div className={HeaderCSS._arrow}>
              <IoIosArrowDown />
            </div>
          </div>
          <div
            className={`${HeaderCSS._drop_menu} ${
              isToggle && HeaderCSS._active_menu
            }`}
          >
            <div className={HeaderCSS._wrap_inside_profile}>
              <img src={Profile} alt="profile" />
              <div className={HeaderCSS._email}>salud.lanceivan@gmail.com</div>
            </div>
            <div className={HeaderCSS._line} />
            <div className={HeaderCSS._wrap_mobile_menu}>
              <div className={HeaderCSS._btn}>Project</div>
              <div className={HeaderCSS._btn}>Task</div>
              <div className={HeaderCSS._btn}>Member</div>
              <div className={HeaderCSS._btn}>Time Tracking</div>
              <div className={HeaderCSS._line} />
            </div>
            <div className={HeaderCSS._btn}>Settings</div>
            <div className={HeaderCSS._btn}>Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
}
