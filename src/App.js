import { useState } from 'react'

import './App.css'

const App = () => {
  const [list, setList] = useState([])
  const [listRedo, setListRedo] = useState([])

  const Dot = event => {
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY
    }
    setList(prev => [...prev, newDot])

    console.log(list)
  }

  const HandleUndo = event => {
    event.stopPropagation()

    if (list.length === 0) {
      return
    }

    const LastDot = list[list.length - 1]
    setListRedo(prev => [...prev, LastDot])

    setList(prev => [...prev].slice(0, -1))
  }

  const HandleRedo = event => {
    event.stopPropagation()

    if (listRedo.length === 0) {
      return
    }

    const LastDotRedo = listRedo[listRedo.length - 1]
    setList(prev => [...prev, LastDotRedo])

    setListRedo(prev => [...prev].slice(0, -1))
  }

  return (
    <div className="app" onClick={Dot}>
      <button className="button" onClick={HandleUndo}>
        Remove Dot
      </button>
      <button className="button" onClick={HandleRedo}>
        Return Dot
      </button>
      {list.map((item, index) => (
        <div
          key={index}
          className="dot"
          style={{ top: item.clientY - 5, left: item.clientX - 5 }}
        ></div>
      ))}
    </div>
  )
}

export default App
