import React from "react";
import {Link} from 'react-router-dom'
const Welcome = ({clicked,setClicked}) => {
  const handleSizeChanges=(e)=>{
    const clickable = e.currentTarget
    if(e.target.parentNode.className!=='clicked'){
      setClicked('clicked')
      clickable.classList.add('focused')
      clickable.parentNode.childNodes.forEach((item,index)=>{
        if(clickable.parentNode.childNodes[index]!==clickable){
          item.classList.remove('focused')
        }
      })
    }
  }
  
  const list = [1,1,1]
  console.log(clicked,20)
  return (
    <div className="welcome-text">
      <ul className={clicked==='clicked'? clicked : 'unclicked'}>
        {
          list.map((_item,index)=>{
            return(<li key={index} onClick={handleSizeChanges}>
              <Link to='/About'><p className={ `line${index+1}`}></p></Link>
              </li>)
          })
        }
       
      </ul>
    </div>
  );
};
export default Welcome;
