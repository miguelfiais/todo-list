import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useList } from '../../hooks/ListContext'
import { Container } from './styles'

const Form = () => {
  const { pathname } = useLocation()

  const {list, setList, updateLocalStorage} = useList()
  const [task, setTask] = useState("")
  
  let newList = []
  async function getTask (e) {
      e.preventDefault()
      if(task){
        newList = [...list, {id: uuidv4(), task, completed: false}]
        setList(newList)
        await updateLocalStorage(newList)
        setTask("")
      } else{
        alert("add task is required")
      }
  }

  return (
    <Container onSubmit={getTask} isVisible={pathname === '/completed'}>
        <input type="text" placeholder='add details' onChange={(e) => setTask(e.target.value)} value={task}/>
        <button type='submit'>Add</button>
    </Container>
  )
}

export default Form