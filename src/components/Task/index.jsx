import { Container, ItemList } from "./styles"
import { BsCheckLg } from "react-icons/bs";

const Task = ({list, completedTask}) => {

  return (
    <Container>
      {
        list && list.length > 0 ? (
          <ul>
            {
              list.map(item => (
                <ItemList key={item.id} isCompleted={item.completed}>
                  <button onClick={() => completedTask(item.id)}><BsCheckLg /></button>
                  <span>{item.task}</span>
                </ItemList>
              ))
            }
          </ul>
        ):(
          <h2>No Tasks</h2>
        )
      }
    </Container>
  )
}

export default Task