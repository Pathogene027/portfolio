import React, {useState, useEffect} from 'react'
import polygon2 from '../asset/Polygon 2.svg'
import polygon3 from '../asset/Polygon 3.svg'
import polygon4 from '../asset/Polygon 4.svg'
import polygon5 from '../asset/Polygon 5.svg'
import polygon6 from '../asset/Polygon 6.svg'
import polygon7 from '../asset/Polygon 7.svg'
import polygon8 from '../asset/Polygon 8.svg'
import polygon9 from '../asset/Polygon 9.svg'

const list=[polygon2, polygon3, polygon4, polygon5, polygon6, polygon7, polygon8, polygon9]

const Animation =({clicked})=>{
  const [classNaming, setClassNaming] = useState()
  console.log(clicked)
  useEffect(()=>{
    if(clicked==='clicked'){
      setClassNaming('miniPolygon')
    }
    else{
      setClassNaming('polygon')
    }
  },[clicked])

    return(
        <div className={classNaming}>
            {list.map((item,index)=>{
              return(
                <object key={`polygon${index+2}`} className= {`${classNaming}${index+2}`} aria-label='svg' type='image/svg+xml' data={item} alt={`polygon${index+2}`}/>    
              )  
            })}
        </div>
    )
}

export default Animation