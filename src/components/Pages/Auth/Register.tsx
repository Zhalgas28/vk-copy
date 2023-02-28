import { Button, TextField } from "@mui/material"
import {FC} from "react"
import { useForm, Controller } from "react-hook-form"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useAuth } from "../../Providers/AuthProvider/Auth"

type FormValuesType = {
  username: string
  login: string
  password: string
}

const Register: FC = () => {
  const {
    control,
    handleSubmit,
    reset
  } = useForm<FormValuesType>({
    defaultValues: {
      username: "",
      login: "",
      password: ""
    }
  })

  const {ga} = useAuth()

  const onSubmit = async (values: FormValuesType) => {
    try {
      const res = await createUserWithEmailAndPassword(ga, values.login, values.password)
      await updateProfile(res.user, {
        displayName: values.username
      })
    } catch(error: any) {
      console.log(error.message)
    }
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignItems: "flex-start"
    }} autoComplete="false">
      <h2 style={{fontSize: "40px", margin: 0}}>Register</h2>
      <Controller 
        name="username"
        control={control}
        render={({field: {onChange, value}}) => {
          return <TextField onChange={onChange} value={value} label={"username"} required />
        }}
      />
      <Controller 
        name="login"
        control={control}
        render={({field: {onChange, value}}) => {
          return <TextField onChange={onChange} value={value} label={"email"} required />
        }}
      />
      <Controller 
        name="password"
        control={control}
        render={({field: {onChange, value}}) => {
          return <TextField type={"password"} onChange={onChange} value={value} label={"password"} required />
        }}
      />
      <Button type="submit" variant="contained">Login</Button>
    </form>
  )
}

export default Register