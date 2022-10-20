import React from "react";
import RNCSS from "./index.module.scss";
import { AiOutlineFire } from "react-icons/ai";

export default function Right_Navigation() {
  return (
    <div className={RNCSS._rn_container}>
      <div className={RNCSS._t_p_c_container}>
        <div className={RNCSS._wrap_tpc}>
          <div className={RNCSS._tp_count}>1K</div>
          <div className={RNCSS._tpc_title}>Task</div>
        </div>
        <div className={RNCSS._wrap_tpc}>
          <div className={RNCSS._tp_count}>14</div>
          <div className={RNCSS._tpc_title}>Project</div>
        </div>
        <div className={RNCSS._wrap_tpc}>
          <div className={RNCSS._tp_count}>168</div>
          <div className={RNCSS._tpc_title}>Completed Task</div>
        </div>
      </div>
      <div className={RNCSS._comments_container}>
        <div className={RNCSS._comments_container_title}>
          <AiOutlineFire size={16} /> New comments
        </div>
        <div className={RNCSS._wrap_comment}>
          <div className={RNCSS._comment_title}>
            <div className={RNCSS._title_tag}>Unread</div>
            <span className={RNCSS._title_desc}>
              Discord Bot Commands Discord Bot Commands Discord Bot Commands
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
