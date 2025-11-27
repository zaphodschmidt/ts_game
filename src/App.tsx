import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const array:number[] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  const [rowState, setRowState] = useState<number>(0)

  function Stuff() {
    return (
      <>
        {rowState > 0 && <div style={{ background: "red", width: 20, height: 20 }}> </div>}
        {rowState > 1 && <div style={{ background: "blue", width: 20, height: 20 }}> </div>}
        {rowState > 2 && <div style={{ background: "green", width: 20, height: 20 }}> </div>}
        {rowState > 3 && <div style={{ background: "purple", width: 20, height: 20 }}> </div>}
        {rowState > 4 && <div style={{ background: "pink", width: 20, height: 20 }}> </div>}
        {rowState > 5 && <div style={{ background: "orange", width: 20, height: 20 }}> </div>}
      </>
    )
  }
  function Row(){
    return(
      <div style={{ display: "flex" }}>
        {array.map(()=>{
          return <Stuff />
        })}
      </div>
    )
  }
  return (
    <div>
      {array.map(()=>{
          return <Row />
        })}
    </div>
  )
}

export default App
