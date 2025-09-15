import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
 let MyObj = {
  username:"Akshay",
  Age:21
 };
 let MyArr = [1,2,3];
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1> 
    <Card username="Avika" role="Software Engineer" location="Pune"/>
    <Card username="Rubina" role="Web Developer" location="Mumbai"/>
    </>
  )
}

export default App
