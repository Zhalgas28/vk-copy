import { useContext } from "react"
import { authContext } from "./AuthProvider"

export const useAuth = () => {
  const value = useContext(authContext)
  return value
}