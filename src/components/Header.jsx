import React,{useState} from 'react'

function Header({getData}) {
  const [name,setName] = useState("Mahi")
  //props,jsx,props drilling
  const sendData = () =>{
    getData(name)
  }
  const handleOnchange = (e) =>{
    setName(e.target.value)
  }
  return (
    <>
    <div></div>
    <div>
    <input placeholder="Enter name" value={name} onChange={handleOnchange}/><button onClick={sendData }>Send Name</button>
 </div>   </>
  )
}

export default Header