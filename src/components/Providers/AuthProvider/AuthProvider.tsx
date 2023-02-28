import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useState, FC, ReactNode, useEffect } from "react";
import { IUser, SetStateType } from "../../../types/types";
import { users } from "../../Layout/Sidebar/usersData";
import { useNavigate } from "react-router-dom"


interface IAuthContext {
  user: IUser | null
  setUser: SetStateType<IUser | null>
  ga: Auth
}

export const authContext = createContext({} as IAuthContext)

type PropsType = {
  children: ReactNode
}

export const AuthProvider: FC<PropsType> = ({children}) => {
  const [user, setUser] = useState<null | IUser>(null)
  const ga = getAuth()
  onAuthStateChanged(ga, (user) => {
    if (user) {
      setUser({
        id: user.uid,
        email: user.email || "",
        username: user.displayName || "Doesn't have username",
        avatar: users[1].avatar   
      })
    } else {
      setUser(null)
    }
  })

const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user])

  return <authContext.Provider value={{user, setUser, ga}}>
    {children}
  </authContext.Provider>
}