import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
} from "@mui/material";



const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4} total={24}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100}>
          <ImageListItem>
            <img
              src={`https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format`}
              alt="{item.title}"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format`}
              alt="{item.title}"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format`}
              alt="{item.title}"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format`}
              alt="{item.title}"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format`}
              alt="{item.title}"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format`}
              alt="{item.title}"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format`}
              alt="{item.title}"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format`}
              alt="{item.title}"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format`}
              alt="{item.title}"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
