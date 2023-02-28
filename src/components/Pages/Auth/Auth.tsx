import { Button, TextField } from "@mui/material"
import {FC} from "react"
import { useForm, Controller } from "react-hook-form"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useAuth } from "../../Providers/AuthProvider/Auth"

type FormValuesType = {
  login: string
  password: string
}

const Auth: FC = () => {
  const {
    control,
    handleSubmit,
    reset
  } = useForm<FormValuesType>({
    defaultValues: {
      login: "",
      password: ""
    }
  })

  const {ga} = useAuth()

  const onSubmit = async (values: FormValuesType) => {
    try {
      await signInWithEmailAndPassword(ga, values.login, values.password)
    } catch (e: any) {
      console.log(e.message);
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
      <h2 style={{fontSize: "40px", margin: 0}}>Login</h2>
      <Controller 
        name="login"
        control={control}
        render={({field: {onChange, value}}) => {
          return <TextField onChange={onChange} value={value} />
        }}
      />
      <Controller 
        name="password"
        control={control}
        render={({field: {onChange, value}}) => {
          return <TextField type={"password"} onChange={onChange} value={value} />
        }}
      />
      <Button type="submit" variant="contained">Login</Button>
    </form>
  )
}

export default Auth