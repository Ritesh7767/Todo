import React from 'react'

const Table = ({data, setData, sampleData}) => {

    const handleDelete = (id) => {
        setData(data.filter(ele => ele.id != id))
        sampleData.current = data
    }

    const handleComplete = id => {

        setData(data.filter(ele => {
            if(ele.id == id){
                ele.isActive = !ele.isActive
            }
            return ele
        }))
    }

    const handleAllBtn = () => {
        console.log(sampleData.current)
        setData(sampleData.current)
    }

    const handleActiveBtn = () => {
        setData(sampleData.current.filter(ele => {
            return ele.isActive
        }))
    }

    const handleCompleteBtn = () => {
        setData(sampleData.current.filter(ele => {
            return !ele.isActive
        }))
    }
    return (
    <>
    <div className='filter'>
        <button onClick={handleAllBtn}>All</button>
        <button onClick={handleActiveBtn}>Active</button>
        <button onClick={handleCompleteBtn}>Completed</button>
    </div>
    <table>
        <thead>
            <tr>
                <th>Sr No.</th>
                <th>Task's Name</th>
                <th>isActive</th>
                <th>isCompleted</th>
                <th>Delete Task</th>
                <th>Mark task as Completed</th>
            </tr>
        </thead>
        <tbody>
            {data.map((ele, i) => {
                return (
                    <tr key={Math.random()}>
                        <td style={{textDecoration : ele.isActive ? "none" : "line-through"}}>{i}</td>
                        <td style={{textDecoration : ele.isActive ? "none" : "line-through"}}>{ele.name}</td>
                        <td style={{textDecoration : ele.isActive ? "none" : "line-through"}}>{ele.isActive ? "Yes" : "No"}</td>
                        <td style={{textDecoration : ele.isActive ? "none" : "line-through"}}>{ele.isActive ? "No" : "Yes"}</td>
                        <td><button style={{backgroundColor : "#D20103", color: "white", border : "none"}} onClick={() => handleDelete(ele.id)} >Delete</button></td>
                        <td><button style={{backgroundColor : "#7DDA58", color : "white", border : "none"}} onClick={() => handleComplete(ele.id)}>{ele.isActive ? "Mark As Completed" : "Mark As Incomplete"}</button></td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    </>
  )
}

export default Table