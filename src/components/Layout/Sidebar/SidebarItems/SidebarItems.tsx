import { FC } from "react";
import { Box, Card, Divider } from "@mui/material";
import { IUser } from "../../../../types/types";
import MessageIcon from '@mui/icons-material/Message';
import Item from "./Item";
import { Link } from "react-router-dom";

type PropsType = {
  users: IUser[];
};

const SidebarItems: FC<PropsType> = ({ users }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        border: "none",
        backgroundColor: "#F1F7FA",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px"
      }}
    >
      {users.map((user, idx) => {
        return <Item user={user} key={idx} />;
      })}
      <Divider />
      <Box>
        <Link to={"/messages"} style={{
          textDecoration: "none",
          color: "inherit",
          display: "flex",
          alignItems: "start",
        }}>
          
          <MessageIcon sx={{
            marginRight: "10px"
          }} />         

          <span
            style={{
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Сообщения
          </span>
        </Link>
      </Box>
    </Card>
  );
};

export default SidebarItems;
