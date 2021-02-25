import React from 'react'
import './sidebar.css';
import SidebarChat from './SidebarChat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SmsIcon from '@material-ui/icons/Sms';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__chats">
                <div className='sidebar__header'>
                    <Avatar src='https://azimansari.info/static/media/profile.37e59c79.webp' />
                    <div className='sidebar__headerRight'>
                        <IconButton>
                            <DonutLargeIcon />
                        </IconButton>
                        <IconButton>
                            <SmsIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className='sidebar__search'>
                    <div className='sidebar__searchContainer'>
                        <SearchOutlined />
                        <input placeholder='search or start chat here' type='text'></input>
                    </div>
                </div>
                <div className='sidebar__chat'>
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
