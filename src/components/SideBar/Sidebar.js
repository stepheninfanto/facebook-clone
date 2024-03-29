import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import {useStateValue} from "../../StateProvider"


function Sidebar() {
    const [ { user }, dispatch] = useStateValue();

    return (
        <div className="Sidebar">
            <SidebarRow src={user.photoURL}  
             title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends "/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="MarketPlace "/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="MarketPlace"/>
            
                        
        </div>
    );
}

export default Sidebar
