import { useEffect, useState } from "react"
import { useList } from "../../hooks/ListContext"
import { RxTrash } from "react-icons/rx";
import Task from "../Task"
import { Button, Container } from "./styles";

const Completed = () => {

  const { list, completedTask, setList } = useList()
  const [listCompleted, setListCompleted] = useState([])

  useEffect(() => {
    const newList = list.filter(item => item.completed === true)
    setListCompleted(newList)
  },[list])

  async function deleteAllTask () {
    const newList = list.filter(item => item.completed === false)
    setList(newList)
    await localStorage.setItem("todo-list", JSON.stringify(newList))
  }


  return (
    <Container>
      <Task list={listCompleted} completedTask={completedTask} message={"No task complete!"}/>
      <Button onClick={deleteAllTask}> <RxTrash/> delete all</Button>
    </Container>
  )
}

export default Completed