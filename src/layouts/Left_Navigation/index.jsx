import React, { useEffect, useLayoutEffect, useState } from "react";
import LNCSS from "./index.module.scss";
import {
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
  BsSun,
  BsMoonStars,
  AiOutlineProject,
  BsListTask,
  MdTimer,
  HiOutlineUsers,
  AiOutlineSchedule,
  IoIosAnalytics,
} from "react-icons/all";

export default function Left_Navigtaion() {
  const [isToggle, setToggle] = useState(true);

  const mediaQuery = gsap.matchMedia();

  useLayoutEffect(() => {
    const SIDEBAR = localStorage.getItem("SIDEBAR");

    if (SIDEBAR === "close") setToggle(false);

    (async () => {
      await mediaQuery.add(
        {
          isDesktop: "(max-width: 990px)",
        },
        () => {
          localStorage.setItem("SIDEBAR", "close");
          setToggle(false);
        }
      );
    })();
  }, [mediaQuery]);

  const HandleToggle = () => {
    if (isToggle) {
      localStorage.setItem("SIDEBAR", "close");
      setToggle(!isToggle);
    } else {
      localStorage.removeItem("SIDEBAR");
      setToggle(!isToggle);
    }
  };

  return (
    <div className={LNCSS._wrap_left_navigations}>
      {isToggle ? (
        <div className={LNCSS._ln_container}>
          <div className={LNCSS._wrap_ln}>
            <div className={LNCSS._ln_titles}>
              <div className={LNCSS._toggle_wrap}>
                <div className={LNCSS._sub_title}>workspace</div>
                <div
                  className={LNCSS._toggle_icon}
                  onClick={() => HandleToggle()}
                >
                  <AiOutlineMinusSquare size={20} color="#363636" />
                </div>
              </div>
              <div className={LNCSS._workspace_title}>
                Discord Scheduling Bot
              </div>
            </div>
            <div className={LNCSS._wrap_btn}>
              <div className={LNCSS._btn}>
                <AiOutlineProject size={20} />
                Project
              </div>
              <div className={LNCSS._btn}>
                <BsListTask size={20} />
                Task
              </div>
              <div className={LNCSS._btn}>
                <MdTimer size={20} />
                Time Tracking
              </div>
              <div className={LNCSS._btn}>
                <HiOutlineUsers size={20} />
                Member
              </div>
              <div className={LNCSS._btn}>
                <AiOutlineSchedule size={20} />
                Schedule
              </div>
              <div className={LNCSS._btn}>
                <IoIosAnalytics size={20} />
                Analytics
              </div>
            </div>
          </div>
          <div className={LNCSS._mode_style}>
            <div className={LNCSS._wrap_mode_style}>
              <div className={`${LNCSS._mode} ${LNCSS._mode_border_left}`}>
                <BsSun size={16} />
              </div>
              <div className={`${LNCSS._mode} ${LNCSS._mode_border_right} `}>
                <BsMoonStars size={14} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={LNCSS._small_ln_container}>
          <div
            className={`${LNCSS._toggle_icon_minimize}  ${LNCSS._hide_toggle_icon}`}
            onClick={() => HandleToggle()}
          >
            <AiOutlinePlusSquare size={20} />
          </div>
          <div className={LNCSS._wrap_m_btn}>
            <div className={LNCSS._m_btn}>
              <AiOutlineProject size={20} />
            </div>
            <div className={LNCSS._m_btn}>
              <BsListTask size={20} />
            </div>
            <div className={LNCSS._m_btn}>
              <MdTimer size={20} />
            </div>
            <div className={LNCSS._m_btn}>
              <HiOutlineUsers size={20} />
            </div>
            <div className={LNCSS._m_btn}>
              <AiOutlineSchedule size={20} />
            </div>
            <div className={LNCSS._m_btn}>
              <IoIosAnalytics size={20} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
