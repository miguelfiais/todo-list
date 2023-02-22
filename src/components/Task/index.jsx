import { Container, ItemList } from "./styles"
import { BsCheckLg } from "react-icons/bs";
import { RxTrash } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import { useList } from "../../hooks/ListContext";
import BasicModal from "../BasicModal";

  const Task = ({list, completedTask, message}) => {

  const { pathname } = useLocation()
  const { deleteTask } = useList()

  return (    
    <Container>
      {
        list && list.length > 0 ? (
          <ul>
            {
              list.map(item => (
                <ItemList key={item.id} isCompleted={item.completed} isVisibleDelete={pathname === '/completed'}>
                  <button className="to-complete" onClick={() => completedTask(item.id)}><BsCheckLg /></button>
                  <span>{item.task}</span>
                  <button className="delete" onClick={() => deleteTask(item.id)}><RxTrash /></button>
                  <BasicModal item={item}/>
                </ItemList>
              ))
            }
          </ul>
        ):(
          <h2>{message}</h2>
        )
      }
    </Container>
  )
}

export default Task