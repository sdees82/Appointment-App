import React from 'react';
import './inboxMessages.css';


const InboxMessages = ({name, date, message}) =>{
    return(
        <div className="inboxMessages">
            <img src="" alt="profile pic"/>

            <div className="inboxMessagesDetails">
                <div className="inboxMessagesDetailsTop">
                <span>{name}</span>
                <span>{date}</span>
                </div>
                <div className="inboxMessagesDetailsBottom">
                <p>{message}</p>
                </div>
            </div>
        </div>
    );
}

export default InboxMessages;