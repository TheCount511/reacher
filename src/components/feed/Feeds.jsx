import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Box,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
} from "@mui/material";
import Post from "./post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
    <Post/>
    </Box>
  );
};

export default Feed;
