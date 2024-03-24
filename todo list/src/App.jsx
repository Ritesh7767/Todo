import { useState, useRef } from 'react'
import Table from './Table'


function App() {

  let [arr , setArr] = useState([])
  let [data, setData] = useState("")
  let sampleData = useRef([])

  const handleSubmit = (event) => {

    event.preventDefault()
    let id = Math.random()
    sampleData.current = [...arr, {id, name : data, isActive : true}]
    setArr([...arr, {id,  name : data, isActive : true}])

  }
  
  const handleChange = event => {
    setData(event.target.value)
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <h2>Enter your task name</h2>
        <input className='inputTask' type="text" placeholder='Enter your task here' onChange={e => handleChange(e)}/><br />
        <input className='submitBtn' type="submit" />
      </form>
      <Table data={arr} setData={setArr} sampleData={sampleData}/>
    </>
  )
}

export default App
