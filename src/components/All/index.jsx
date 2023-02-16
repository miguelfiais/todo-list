import { useList } from "../../hooks/ListContext"
import Task from "../Task";

const All = () => {

  const { list, completedTask } = useList()

  return (
    <>
      <Task list={list} completedTask={completedTask} message={"No tasks!"}/>
    </>
  )
}

export default All