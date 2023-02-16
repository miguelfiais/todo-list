import { createContext, useContext, useEffect, useState } from 'react'

const ListContext = createContext({})

export const ListProvider = ({ children }) => {
  
  const [list, setList] = useState([])

  function completedTask (id) {
    const newList = list.map(item => (
      id === item.id ? {...item, completed: !item.completed} : item
    ))
    setList(newList)
  }

  function deleteTask (id) {
    const newList = list.filter(item => id !== item.id)
    setList(newList)
  }

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
