import { useLocation, useNavigate } from "react-router-dom"
import { Button, Container } from "./styles"

const Header = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (
    <Container>
      <h1>#todo</h1>
      <nav>
        <ul>
          <li><Button onClick={() => navigate('/')} isActive={pathname === '/'}>All</Button></li>
          <li><Button onClick={() => navigate('/active')} isActive={pathname === '/active'}>Active</Button></li>
          <li><Button onClick={() => navigate('/completed')} isActive={pathname === '/completed'}>Completed</Button></li>
        </ul>
      </nav>
    </Container>
  )
}

export default Header