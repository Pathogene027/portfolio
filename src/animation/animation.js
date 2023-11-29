import React from 'react'

import polygon1 from './asset/polygon1.svg'
import polygon2 from './asset/Polygon 2.svg'
import polygon3 from './asset/Polygon 3.svg'
import polygon4 from './asset/Polygon 4.svg'
import polygon5 from './asset/Polygon 5.svg'
import polygon6 from './asset/Polygon 6.svg'
import polygon7 from './asset/Polygon 7.svg'
import polygon8 from './asset/Polygon 8.svg'
import polygon9 from './asset/Polygon 9.svg'

const list=[polygon2, polygon3, polygon4, polygon5, polygon6, polygon7, polygon8, polygon9, polygon1]
let counter=0;
const animation =()=>{
    return(
        <div className="animation">
            {list.map((item,index)=>{
              return(
                <img key={`polygon${index+1}`} id= {`polygon${index+1}`} src={item} alt={`polygon${index+1}`}/>    
              )  
            })}
        </div>
    )
}

export default animation