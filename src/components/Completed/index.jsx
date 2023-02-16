import { useEffect, useState } from "react"
import { useList } from "../../hooks/ListContext"
import Task from "../Task"

const Completed = () => {

  const { list, completedTask } = useList()
  const [listActive, setListActive] = useState([])

  useEffect(() => {
    const newList = list.filter(item => item.completed === true)
  setListActive(newList)
  },[list])

  return (
    <>
      <Task list={listActive} completedTask={completedTask} message={"No task complete!"}/>
    </>
  )
}

export default Completed