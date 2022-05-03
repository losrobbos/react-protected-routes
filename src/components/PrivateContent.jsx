import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { DataContext } from "../contexts/DataContext"


export const PrivateContent = ({ element }) => {

  const { loggedIn } = useContext(DataContext)

  // redirect to home
  if(!loggedIn) {
    return <Navigate to="/" replace />
  }

  // render protected component
  return element
}
