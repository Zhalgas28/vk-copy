import { Box } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";

type PropsType = {
  avatar: React.ReactNode;
  name: string;
  path: string
};

const Item: FC<PropsType> = ({avatar, name, path}) => {
  return (
    <Box>
      <Link
        to={path}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "flex",
          alignItems: "start",
        }}
      >
        <Box sx={{
          marginRight: "10px"
        }}>
          {avatar}
        </Box>

        <span
          style={{
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          {name}
        </span>
      </Link>
    </Box>
  );
};

export default Item;
