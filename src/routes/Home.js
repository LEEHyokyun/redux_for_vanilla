import React, {useState} from 'react'

function Home() {
    const [text, setText] = useState("")
    function onChange(e) {
        setText(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()
        console.log(text)
    }

    return(
    <div>
        <h1>TO DO LIST</h1>
        <form onSubmit={onSubmit}>
        <input type="text" value = {text} onChange={onChange}/>
        <button>LIST ADD</button>
        </form>
    </div>
    )
}

export default Home