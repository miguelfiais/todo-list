import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useList } from '../../hooks/ListContext'
import { Container } from './styles'

const Form = () => {

  const {list, setList} = useList()
  const [task, setTask] = useState("")
  
  function getTask (e) {
      e.preventDefault()
      setList([...list, {id: uuidv4(), task, completed: false}])
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