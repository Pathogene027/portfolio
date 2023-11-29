import React, {useState} from "react";
const Welcome = () => {
  const [clicked, setClicked] = useState()
  const [classNaming, setClassNaming] = useState()
  const [idNaming, setIdNaming] = useState()

 
  
  const handleSizeChanges=(e)=>{
    console.log(e.target.parentNode)
    if(e.target.parentNode.className!=='clicked'){
      setClicked('clicked')
      e.target.parentNode.childNodes.forEach((item,index)=>{
        setClassNaming(`line${index}`)
        setIdNaming(`item${index}`)
      })
    }
    e.target.parentNode.childNodes.forEach((item,index)=>{
      console.log(item.className)
    })
  }
  const list = [1,1,1]
  return (
    <div className="welcome-text">
      <ul className={clicked}>
        {
          list.map((item,index)=>{
            return(<li key={index} id={idNaming? idNaming:`line${index+1}` } className={classNaming || `hoverline${index+1}`} onClick={handleSizeChanges}></li>)
          })
        }
       
      </ul>
    </div>
  );
};
export default Welcome;
