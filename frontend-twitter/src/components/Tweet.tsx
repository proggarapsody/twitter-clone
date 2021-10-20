import { Avatar, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import MessageIcon from '@material-ui/icons/ChatBubbleOutline';
import RetweetIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Reply';
import { grey } from '@material-ui/core/colors';

const useTweetStyles = makeStyles((theme) => ({
  userNameLink: {
    color: grey[500],
    marginLeft: 5,
  },

  tweet: {
    padding: '12px 16px 12px 16px',
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)',
    },
  },
  avatar: {
    height: 48,
    width: 48,
  },
  tweetButtonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 450,
    marginLeft: -13,
  },
  tweetButtonIcon: {
    fontSize: 16,
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  tweetBodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
  },
}));

interface TweetProps {
  fullName: string;
  userName: string;
  avatarUrl: string;
  tweetText: string;
}

export const Tweet: React.FC<TweetProps> = ({ fullName, userName, avatarUrl, tweetText }) => {
  const classes = useTweetStyles();
  return (
    <Paper variant="outlined" className={classes.tweet}>
      <div className={classes.avatarContainer}>
        <Avatar alt="User avatar" src={avatarUrl} className={classes.avatar} />
      </div>
      <div className={classes.tweetBodyContainer}>
        <Typography component="span">
          <b>{fullName}</b>
          <span className={classes.userNameLink}>@{userName}</span>
        </Typography>
        <Typography variant="body1">{tweetText}</Typography>
        <div className={classes.tweetButtonsContainer}>
          <IconButton>
            <MessageIcon className={classes.tweetButtonIcon} />
          </IconButton>
          <IconButton>
            <RetweetIcon className={classes.tweetButtonIcon} />
          </IconButton>
          <IconButton>
            <LikeIcon className={classes.tweetButtonIcon} />
          </IconButton>
          <IconButton>
            <ShareIcon className={classes.tweetButtonIcon} />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
};
