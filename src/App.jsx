import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
function App() {
  const [count, setCount] = useState(0);
//   Your practical task
// 1. Create an input field in Header.jsx.
// 2. Enter your name in the input.
// 3. Add a button called Send Name.
// 4. When you click it, the parent component should display your entered name.
  const [name, setName] = useState("");
 const getData = (data) => {
    setName(data);
  }
  return (
    <>
        <Header getData={getData} />
        <h2>Parent Component: {name}</h2>
    </>
  )
}

export default App
