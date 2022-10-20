import React, { useEffect, useLayoutEffect, useState } from "react";
import LNCSS from "./index.module.scss";
import {
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
  BsSun,
  BsMoonStars,
} from "react-icons/all";

export default function Left_Navigtaion() {
  const [isToggle, setToggle] = useState(true);

  const mediaQuery = gsap.matchMedia();

  useLayoutEffect(() => {
    (async () => {
      await mediaQuery.add(
        {
          isDesktop: "(max-width: 990px)",
        },
        () => {
          setToggle(false);
        }
      );
    })();
  }, [mediaQuery]);

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
                  onClick={() => setToggle(!isToggle)}
                >
                  <AiOutlineMinusSquare size={20} color="#363636" />
                </div>
              </div>
              <div className={LNCSS._workspace_title}>
                Discord Scheduling Bot
              </div>
            </div>
            <div className={LNCSS._wrap_btn}>
              <div className={LNCSS._btn}>Project</div>
              <div className={LNCSS._btn}>Task</div>
              <div className={LNCSS._btn}>Time Tracking</div>
              <div className={LNCSS._btn}>Member</div>
              <div className={LNCSS._btn}>Schedule</div>
              <div className={LNCSS._btn}>Analytics</div>
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
            onClick={() => setToggle(!isToggle)}
          >
            <AiOutlinePlusSquare size={20} />
          </div>
        </div>
      )}
    </div>
  );
}
