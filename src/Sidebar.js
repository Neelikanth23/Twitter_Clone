import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import {
  Home,
  Search,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption active text="Home" Icon={Home} />
      <SidebarOption text="Explore" Icon={Search} />
      <SidebarOption text="Notifications" Icon={NotificationsNone} />
      <SidebarOption text="MailOutline" Icon={MailOutline} />
      <SidebarOption text="BookmarkBorder" Icon={BookmarkBorder} />
      <SidebarOption text="ListAlt" Icon={ListAlt} />
      <SidebarOption text="Profile" Icon={PermIdentity} />
      <SidebarOption text="More" Icon={MoreHoriz} />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
