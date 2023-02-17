import { createContext, useContext, useEffect, useState } from 'react'

const ListContext = createContext({})

export const ListProvider = ({ children }) => {
  
  const [list, setList] = useState([])

  async function completedTask (id) {
    const newList = list.map(item => (
      id === item.id ? {...item, completed: !item.completed} : item
    ))
    setList(newList)
    await localStorage.setItem("todo-list", JSON.stringify(newList))
  }

  let newListDelete = []
  async function deleteTask (id) {
    newListDelete = list.filter(item => id !== item.id)
    setList(newListDelete)
    await localStorage.setItem("todo-list", JSON.stringify(newListDelete))
  }

  useEffect(() => {
    async function getLocalStorage(){
      const listLocalStorage = await localStorage.getItem("todo-list");
      if(listLocalStorage){
        setList(JSON.parse(listLocalStorage))
      }
    }
    getLocalStorage()
  }, [])

  return (
    <ListContext.Provider value={{ list, setList, completedTask, deleteTask }}>
        {children}
    </ListContext.Provider>
  )
}

export const useList = () => {
  const context = useContext(ListContext)

  if (!context) {
    throw new Error('useList must be used with Listcontext')
  }
  return context
}
