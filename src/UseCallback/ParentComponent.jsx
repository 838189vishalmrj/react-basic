import { useState,useMemo } from "react"
import ChildComponent from "./ChildComponent"
const ParentComponent = () => {

  const [increase, setIncrease] = useState(0)
  const [multiply,setMultiply] = useState(1)

  const handleClick = ()=>{
    return setIncrease((pre)=>pre+1)
  }
  console.log('Parent Component Render');

  const childComponentRender = useMemo(()=>{
    return <ChildComponent multiply = {multiply}/>
  },[multiply])

  const childHandler = ()=>{
    return setMultiply((pre)=>pre*2)
  }

  return (
    <>
      <h1>Parent Component Render : {increase}</h1>
      <button onClick={handleClick}>Click</button>
      <hr />
      {childComponentRender}
      <button onClick={childHandler}>Clice to increase by 2</button>
    </>
  )
}

export default ParentComponent