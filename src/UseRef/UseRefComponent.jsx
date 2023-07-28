import React,{useRef} from 'react'

const UseRefComponent = () => {

const useRefInput = useRef("")
const useRefArticle = useRef("")

    const handleSubmit = ()=>{

        console.log(useRefInput.current.value);
        useRefInput.current.focus()
        useRefArticle.current.style.backgroundColor = "yellow"
        useRefArticle.current.style.fontSize = "1.5rem"
        useRefArticle.current.style.border = ".3rem solid black "
        useRefArticle.current.style.padding = "1rem "

    }
        

  return (
    <div>

        <article ref={useRefArticle}>
            <h1 style={{textAlign:'center'}}>useRef</h1>
            <p>The useRef Hook allows you to persist values between renders,It can be used to store a mutable value That dose not cause re-render when updated
            </p>
            <p>useRed returns a mutable ref object whose .current property is initialized to the passed argument (initialValues). The return object will persist for the full lifetime of the component</p>
        </article>
        <hr />
        <input type="text" name='name' ref={useRefInput} />
        <button onClick={handleSubmit}>Submit</button>
        
    </div>
  )
}

export default UseRefComponent