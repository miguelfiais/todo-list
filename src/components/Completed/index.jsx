import { useEffect, useState } from "react"
import { useList } from "../../hooks/ListContext"
import { RxTrash } from "react-icons/rx";
import Task from "../Task"
import { Button, Container } from "./styles";

const Completed = () => {

  const { list, completedTask } = useList()
  const [listActive, setListActive] = useState([])

  useEffect(() => {
    const newList = list.filter(item => item.completed === true)
  setListActive(newList)
  },[list])


  return (
    <Container>
      <Task list={listActive} completedTask={completedTask} message={"No task complete!"}/>
      <Button> <RxTrash/> delete all</Button>
    </Container>
  )
}

export default Completed