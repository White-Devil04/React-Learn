function Assign1() {
    return(

    <>
        <h2>Assignment 1</h2>
        <img src='https://plus.unsplash.com/premium_photo-1709311451518-f1b9cb3dab5b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        onMouseOver={(e)=> e.target.style.transform='scale(1.2)'}
        onMouseOut={(e)=> e.target.style.transform='scale(1)'}
        />
        <button
        onDoubleClick={()=>alert('Double Tap')}
        onClick={()=>console.log('Just one click')}>Click me</button>
        <input type="text"
        onFocus={()=>console.log("focused on the textbox")}
        onBlur={()=>console.log("out of textbox")} />
        <p onCopy={()=>alert("Text copied")}
        onCut={()=>alert("Text cut")}
        onPaste={()=>alert("Test Pasted")}>Hello Dev Patel.</p>
    </>
    )
}

export default Assign1;