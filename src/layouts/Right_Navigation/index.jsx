import React, { useState } from "react";
import RNCSS from "./index.module.scss";
import { AiOutlineFire, BsCalendar2Event } from "react-icons/all";

export default function Right_Navigation() {
  const [isComment, setComment] = useState([{ test: "" }]);
  const [isMeeting, setMeeting] = useState([]);

  return (
    <div className={RNCSS._rn_container}>
      <div className={RNCSS._comments_container}>
        <div className={RNCSS._comments_container_title}>
          <AiOutlineFire size={16} /> New comments
        </div>
        {isComment.length !== 0 ? (
          <div className={RNCSS._wrap_comment}>
            <div className={RNCSS._comment_title}>
              <div className={RNCSS._title_tag}>Unread</div>
              <div className={RNCSS._title_desc}>
                Discord Bot Commands Discord Bot Commands Discord Bot Commands
              </div>
            </div>
          </div>
        ) : (
          <div className={RNCSS._empty_coms}>Empty comments</div>
        )}
      </div>
      <div className={RNCSS._schdules_container}>
        <div className={RNCSS._sched_title}>
          <BsCalendar2Event size={14} />
          Meeting Schedule
        </div>
        <div className={RNCSS._sched_container}>
          <div className={RNCSS._wrap_sched_events}>
            <div className={RNCSS._event_title_date}>
              <div className={RNCSS._event_title_day}>21</div>
              <div className={RNCSS._event_title_month}>Oct</div>
            </div>
            <div className={RNCSS._wrap_event_title}>
              <div className={RNCSS._event_title}>
                Discussion of Discord Bot Commands Discussion of Discord Bot
                CommandsDiscussion of Discord Bot Commands Discussion of Discord
                Bot CommandsDiscussion of Discord Bot Commands Discussion of
                Discord Bot CommandsDiscussion of Discord Bot Commands
                Discussion of Discord Bot CommandsDiscussion of Discord Bot
                Commands Discussion of Discord Bot CommandsDiscussion of Discord
                Bot Commands Discussion of Discord Bot CommandsDiscussion of
                Discord Bot Commands Discussion of Discord Bot
                CommandsDiscussion of Discord Bot Commands Discussion of Discord
                Bot Commands
              </div>
              <div className={RNCSS._full_date}>Monday, October 24th</div>
            </div>
          </div>
          <div className={RNCSS._wrap_sched_events}>
            <div className={RNCSS._event_title_date}>
              <div className={RNCSS._event_title_day}>21</div>
              <div className={RNCSS._event_title_month}>Oct</div>
            </div>
            <div className={RNCSS._wrap_event_title}>
              <div className={RNCSS._event_title}>
                Discussion of Discord Bot Commands Discussion of Discord Bot
                CommandsDiscussion of Discord Bot Commands Discussion of Discord
                Bot CommandsDiscussion of Discord Bot Commands Discussion of
                Discord Bot CommandsDiscussion of Discord Bot Commands
                Discussion of Discord Bot CommandsDiscussion of Discord Bot
                Commands Discussion of Discord Bot CommandsDiscussion of Discord
                Bot Commands Discussion of Discord Bot CommandsDiscussion of
                Discord Bot Commands Discussion of Discord Bot
                CommandsDiscussion of Discord Bot Commands Discussion of Discord
                Bot Commands
              </div>
              <div className={RNCSS._full_date}>Monday, October 24th</div>
            </div>
          </div>
          <div className={RNCSS._wrap_sched_events}>
            <div className={RNCSS._event_title_date}>
              <div className={RNCSS._event_title_day}>21</div>
              <div className={RNCSS._event_title_month}>Oct</div>
            </div>
            <div className={RNCSS._wrap_event_title}>
              <div className={RNCSS._event_title}>
                Discussion of Discord Bot Commands Discussion of Discord Bot
                CommandsDiscussion of Discord Bot Commands Discussion of Discord
                Bot CommandsDiscussion of Discord Bot Commands Discussion of
                Discord Bot CommandsDiscussion of Discord Bot Commands
                Discussion of Discord Bot CommandsDiscussion of Discord Bot
                Commands Discussion of Discord Bot CommandsDiscussion of Discord
                Bot Commands Discussion of Discord Bot CommandsDiscussion of
                Discord Bot Commands Discussion of Discord Bot
                CommandsDiscussion of Discord Bot Commands Discussion of Discord
                Bot Commands
              </div>
              <div className={RNCSS._full_date}>Monday, October 24th</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
