import React from 'react';
import { Button, makeStyles, Theme, Typography } from '@material-ui/core';

const useTweetButtonStyles = makeStyles((theme: Theme) => ({
  tweetButton: {
    height: '100%',
    width: '100%',
  },
}));

interface tweetButtonProps {
  fontSize: string;
}

export const TweetButton: React.FC<tweetButtonProps> = ({ fontSize }) => {
  const classes = useTweetButtonStyles();
  return (
    <Button variant="contained" color="primary" className={classes.tweetButton}>
      <Typography style={{ fontSize: fontSize }}>
        <b>Tweet</b>
      </Typography>
    </Button>
  );
};
