import React from 'react';
import './canceled.css';

const Canceled = ({doctor, specality, appDate, canAppList, clearApp}) =>{
    return(
        <div className="canceled">
        { canAppList[0].doctor === "" ||  canAppList[0].doctor === undefined || canAppList.length === 0?
              <div className="canceledContainer">
            <div className="canceledHeader">
                <h3>Canceled visits</h3>
                <span className="dots">...</span>
            </div>
            <p>You have no canceled visits</p>
           <p></p>
        </div>:

         <div className="canceledContainer">
            <div className="canceledHeader">
                <h3>Canceled visits</h3>
                <span onClick={clearApp} className="dots">...</span>
            </div>
            <p>{`You have  ${canAppList.length} canceled visit(s):`}</p>
            {
                 canAppList.map((val, index)=>{
                     {
                         return (
                    <div className="canceledDetails" key={index}>
                   <p>{`${canAppList[index].doctor}`}</p>
                   <div className="canceledDate">
                    <p>{canAppList[index].appDate}</p>
                </div>
            </div>
                         );
                     }
               })
            }
           
           

        </div>
        }
        </div>
    );
}

export default Canceled;