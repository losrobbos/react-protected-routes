import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";

export const Nav = () => {

  const { loggedIn, setLoggedIn } = useContext(DataContext)

  return (
    <nav style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <Link to="/">Home</Link>
      { loggedIn && <Link to="/todos">Todos</Link> }
      <a onClick={() => setLoggedIn(!loggedIn)}>{ loggedIn ? "Logout" : "Login" }</a>
    </nav>
  )
}
