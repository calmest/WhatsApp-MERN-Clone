import React from "react";
import { Avatar } from "@material-ui/core";
import "./styles/sidebarChat.css";

export default function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  );
}
