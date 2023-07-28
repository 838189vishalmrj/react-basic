import { memo } from "react";

const Child = ({handleChildTodo,todo}) => {

    console.log('Child component render');
  return (
    <div>
        <h1>Child Component Render</h1>
        <button onClick={()=>handleChildTodo("new Todo Add")}>Click for add add todo</button>
        {
            todo && todo.length > 0 ?todo.map((todo,index)=>{
                return <p key={todo+index}>{index+1}__{todo}</p>
            }):""
        }
    </div>
  )
}

export default memo(Child)