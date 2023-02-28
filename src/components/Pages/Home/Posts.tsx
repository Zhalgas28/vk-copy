import { PieChartSharp } from "@mui/icons-material";
import { Avatar, Box, ImageList, ImageListItem, Stack } from "@mui/material";
import { FC } from "react";
import { IPost } from "../../../types/types";

type PropsType = {
  posts: IPost[];
};

const Posts: FC<PropsType> = ({ posts }) => {
  return (
    <Stack
      spacing={2}
      sx={{
        marginTop: 3,
        marginBottom: 3
      }}
    >
      {posts.map((post, idx) => {
        return (
          <Box sx={{
            border: "1px solid #e2e2e2",
            borderRadius: "10px",
            padding: 2,
          }} key={idx}>
            <Box display={"flex"} mb={2} alignItems={"center"}>
              <Avatar src={post.author.avatar} alt={post.author.username} sx={{
                marginRight: 1,
                width: "48px",
                height: "48px"
              }} />
              <Box display={"flex"} flexDirection={"column"}>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {post.author.username}
                </span>
                <span style={{
                  opacity: "0.6",
                  fontSize: "14px"
                }}>
                  {post.createdAt}
                </span>
              </Box>
            </Box>
            <Box>
              <span>
                {post.text}
              </span>
            </Box>
            {post.photos && <ImageList variant="masonry">
              {post.photos.map((photo, idx) => {
                return <ImageListItem key={`photo-${idx}`}>
                  <img src={photo} alt="image" loading="lazy" />
                </ImageListItem>
              })}
            </ImageList>}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Posts;
