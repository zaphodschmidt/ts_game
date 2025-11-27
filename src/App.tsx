import './App.css'
import { useEffect, useState } from 'react';
import React, {type ReactElement } from 'react';

function App() {
  const [rowState, setRowState] = useState<number>(0)
  const [angle, setAngle] = useState<number>(0)
  type WeirdThingProp = {
    rowState:number
  }

  function WeirdThing({rowState}:WeirdThingProp):ReactElement{
    type StuffProp = {
      rowState:number
    }
    function Stuff({rowState}:StuffProp):ReactElement {
      return (
        <>
          {rowState > 0 && <div style={{ background: "red", width: 20, height: 20 }}> </div>}
          {rowState > 1 && <div style={{ background: "blue", width: 20, height: 20 }}> </div>}
          {rowState > 2 && <div style={{ background: "green", width: 20, height: 20 }}> </div>}
          {rowState > 3 && <div style={{ background: "purple", width: 20, height: 20 }}> </div>}
          {rowState > 4 && <div style={{ background: "pink", width: 20, height: 20 }}> </div>}
          {rowState > 5 && <div style={{ background: "orange", width: 20, height: 20 }}> </div>}
          {rowState > 6 && <div style={{ background: "yellow", width: 20, height: 20 }}> </div>}
          {rowState > 7 && <div style={{ background: "black", width: 20, height: 20 }}> </div>}
          {rowState > 8 && <div style={{ background: "white", width: 20, height: 20 }}> </div>}
          {rowState > 9 && <div style={{ background: "cyan", width: 20, height: 20 }}> </div>}
          {rowState > 10 && <div style={{ background: "gray", width: 20, height: 20 }}> </div>}
        </>
      )
    }

    function Row():ReactElement{
      const reactElement:ReactElement[]= []
      for(let i = 0; i < 100; i++){
        reactElement.push(<Stuff rowState={rowState}/>)
      }
      return(
        <div style={{ display: "flex" }}>
          {reactElement}
        </div>
      )
    }
    const finalElement:ReactElement[] = []
    for(let i = 0; i<10; i++){
      finalElement.push(<Row/>)
    }
    return (
      <div>
        {finalElement}
      </div>
    )
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      setRowState(prevRowState=>{
        if (prevRowState===10){
          return 0
        }else{
          return prevRowState + 1
        }
      })
      setAngle(prevAngle=>{
        if(prevAngle === 360){
          return 0
        }
        else{
          return prevAngle + 9
        }
      })
    }, 100)
    return () => clearInterval(interval)
  },[])

  return(
    <div>
      <h1>HELLO</h1>
      
      <div style={{display:"flex", alignItems: "flex-start"}}>
        <WeirdThing rowState={rowState}/>
      </div>
      <div style={{transform: `rotate(${49+angle}deg)`}}>
        <WeirdThing rowState={rowState}/>
      </div>
      <div>
        <WeirdThing rowState={rowState}/>
      </div>
      <div style={{display:"flex"}}>
        <WeirdThing rowState={rowState}/>
      </div>
      <div style={{display:"flex", alignItems: "flex-start", transform: `rotate(${90+angle}deg)`}}>
        <WeirdThing rowState={rowState}/>
      </div>
      <div>
        <WeirdThing rowState={rowState}/>
      </div>
      <h1>WELCOME</h1>
      <div style={{ display: "flex", transform: `rotate(${200+angle}deg)`}}> 
        <WeirdThing rowState={rowState}/>
      </div>
      <div style={{display:"flex"}}>
        <WeirdThing rowState={rowState}/>
      </div>
      <div style={{display:"flex", alignItems: "flex-end", transform: `rotate(${174+angle}deg)`}}>
        <WeirdThing rowState={rowState}/>
      </div>
    </div>
  )
}

export default App
