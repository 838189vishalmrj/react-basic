
const ChildComponent = ({multiply}) => {
    console.log('Child Render');
  return (
    <>
        <h2>Child Component Render: {multiply}</h2>
        
    </>
  )
}

export default ChildComponent