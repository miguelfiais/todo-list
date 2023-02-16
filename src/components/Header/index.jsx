import { Container } from "./styles"

const Header = () => {
  return (
    <Container>
      <h1>#todo</h1>
      <nav>
        <ul>
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </nav>
    </Container>
  )
}

export default Header