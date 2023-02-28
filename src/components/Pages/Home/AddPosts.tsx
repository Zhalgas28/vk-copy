import { Box, TextField } from "@mui/material";
import { FC, KeyboardEvent, useState } from "react";
import { IPost, SetStateType } from "../../../types/types";
import { users } from "../../Layout/Sidebar/usersData";

type PropsType = {
  setPosts: SetStateType<IPost[]>
}

const AddPost: FC<PropsType> = ({ setPosts }) => {
  const [content, setContent] = useState<string>("")

  const addPostHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      setPosts(prev => [
        {
          author: users[0],
          text: content,
          createdAt: "5 минут назад",
        },
        ...prev
      ])
      setContent("")
    }
  }

  return (
    <Box
      sx={{
        border: "1px solid #e2e2e2",
        padding: 2,
        borderRadius: "10px",
      }}
    >
      <TextField
        label="Напишите, что y вас нового?"
        variant="outlined"
        InputProps={{
          sx: {
            border: "none",
            borderRadius: "15px",
            backgroundColor: "#F9F9F9",
          },
        }}
        sx={{
          width: "100%",
        }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyPress={addPostHandler}
      />
    </Box>
  );
};

export default AddPost;
