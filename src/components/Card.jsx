import { useState } from "react";

function Card({id,image,info,price,name,removeTour}){
    const [readmeore,setReadmore]=useState(false);
    const description = readmeore ? info : `${info.substring(0,100)}....`;
    function readmorehandler(){
        setReadmore(!readmeore);
    }
    
    return (<div className="card">
    <img src ={image} className="image"></img>
    <div className="tour-info">
        <div className="tour-details">
            <h4 className="tour-price">₹ {price}</h4>
            <h4 className="tour-name">{name}</h4>
        </div>

            <div className="description"> 
            {description}
            <span className="read-more" onClick={readmorehandler}>
                {readmeore ? '  Show Less': 'Read More'}
            </span>
    </div>
    </div>
   
    <button className="but-red" onClick={() => removeTour(id)}>Not Intersted</button>

    </div>);
}
export default Card;