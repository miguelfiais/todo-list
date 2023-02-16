import { useEffect, useState } from "react"
import { useList } from "../../hooks/ListContext"
import Task from "../Task"

const Active = () => {

  const { list, completedTask } = useList()
  const [listActive, setListActive] = useState([])

  useEffect(() => {
    const newList = list.filter(item => item.completed === false)
  setListActive(newList)
  },[list])



  return (
    <>
      <Task list={listActive} completedTask={completedTask}/>
    </>
  )
}

export default Active