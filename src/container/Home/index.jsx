import { Outlet } from "react-router-dom"
import Form from "../../components/Form"
import Header from "../../components/Header"
import { Container } from "./styles"

const Home = () => {
  return (
    <Container>
      <Header />
      <Form />
      <Outlet />
    </Container>
  )
}

export default Home