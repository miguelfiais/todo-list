import React, { useState } from 'react'
import { Container } from './styles'

const Form = () => {

    const [task, setTask] = useState("")
    
    function getTask (e) {
        e.preventDefault()
        console.log(task)
        setTask("")
    }

  return (
    <Container onSubmit={getTask}>
        <input type="text" placeholder='add details' onChange={(e) => setTask(e.target.value)} value={task}/>
        <button type='submit'>Add</button>
    </Container>
  )
}

export default Form