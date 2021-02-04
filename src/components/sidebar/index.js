import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import { SidebarChat } from "..";
import "./styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar
          src="https://avatars.githubusercontent.com/u/22734604?s=460&u=d0f998a43369e9af1bd0244048490277213f619b&v=4"
          alt="Profile Picture"
        />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}
