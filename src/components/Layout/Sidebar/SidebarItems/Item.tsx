import { FC } from "react";
import { Box, Avatar, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { IUser } from "../../../../types/types";

type PropsType = {
  user: IUser;
};

const Item: FC<PropsType> = ({ user }) => {
  return (
    <Box>
      <Link
        to={`/profile/${user.id}`}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box position={"relative"}>
          <Avatar
            src={user.avatar}
            alt={user.username}
            sx={{
              marginRight: "10px",
            }}
          />
          {user.isOnline && (
            <Box
              sx={{
                position: "absolute",
                backgroundColor: "green",
                bottom: "2px",
                right: "11px",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                border: "1px solid white",
              }}
            />
          )}
        </Box>

        <span
          style={{
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          {user.username}
        </span>
      </Link>
    </Box>
  );
};

export default Item;
