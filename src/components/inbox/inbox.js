import React from 'react';
import InBoxMessages from './inboxMessages/inboxMessages';
import './inbox.css';

class Inbox extends React.Component{
    render(){
        return(
            <div className="inbox">
                <div className="inbox-left">
                <InBoxMessages name={"Sarah Kelly"} date={"6/22/2018"} message={"Please reply asap"}/>
                <InBoxMessages name={"Sarah Kelly"} date={"6/22/2018"} message={"Please reply asap"}/>
                <InBoxMessages name={"Sarah Kelly"} date={"6/22/2018"} message={"Please reply asap"}/>
                <InBoxMessages name={"Sarah Kelly"} date={"6/22/2018"} message={"Please reply asap"}/>
                <InBoxMessages name={"Sarah Kelly"} date={"6/22/2018"} message={"Please reply asap"}/>
                <InBoxMessages name={"Sarah Kelly"} date={"6/22/2018"} message={"Please reply asap"}/>
            </div>
            <div className="inbox-right">
            
            <input type="text" placeholder="Type your message"/>
            </div>

        </div>
    );
    }
}

export default Inbox;