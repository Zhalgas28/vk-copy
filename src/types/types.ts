import { Dispatch, SetStateAction } from "react"

export type SetStateType<T> = Dispatch<SetStateAction<T>>

export interface IUser {
  id: number | string
  username: string
  email: string
  isOnline?: boolean
  avatar?: string
}

export interface IPost {
  author: IUser
  text: string
  createdAt: string
  photos?: string[] 
}
