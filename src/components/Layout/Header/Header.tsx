import {FC} from "react"
import styles from "./Header.module.css"
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import { useAuth } from "../../Providers/AuthProvider/Auth";
import { signOut } from "firebase/auth"
import { Button } from "@mui/material";


const Header: FC = () => {
    const {user, ga} = useAuth()
    return (
        <header className={styles.header}>
            <div className={styles.imageWrapper}>
                <LogoDevIcon sx={{color: "white"}} fontSize="large" /> 
            </div>
            {!user ? <div style={{
                display: "flex",
                gap: "10px"
            }}>
                <Link to={"/auth"} className={styles.login}>
                    <span>
                        Login    
                    </span>
                </Link>
                <Link to={"/register"} className={styles.login}>
                    <span>
                        Register    
                    </span>
                </Link>
            </div> : <div style={{
                display: "flex",
                gap: "10px"
            }}>
                <span>{user.username}</span>
                <Button onClick={() => signOut(ga)} variant={"text"}>Sign Out</Button>
            </div>}
        </header>
    )
}

export default Header