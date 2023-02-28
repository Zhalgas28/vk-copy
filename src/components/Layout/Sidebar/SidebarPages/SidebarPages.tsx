import { FC } from "react";
import Item from "./Item";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FeedIcon from "@mui/icons-material/Feed";
import { Card } from "@mui/material";

const sidebarPages = [
  {
    avatar: <HomeIcon />,
    name: "Моя страница",
    path: "/profile",
  },
  {
    avatar: <PeopleAltIcon />,
    name: "Друзья",
    path: "/friends",
  },
  {
    avatar: <FeedIcon />,
    name: "Новости",
    path: "/news",
  },
];

const SidebarPages: FC = () => {
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
      }}
    >
      {sidebarPages.map((page, idx) => {
        return <Item {...page} key={idx} />;
      })}
    </Card>
  );
};

export default SidebarPages;
