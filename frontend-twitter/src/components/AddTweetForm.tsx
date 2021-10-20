import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  makeStyles,
  TextareaAutosize,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import SchedulersIcon from '@material-ui/icons/EventOutlined';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import { TweetButton } from './TweetButton';
const useAddTweetStyles = makeStyles((theme: Theme) => ({
  addTweetWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
  },
  userAvatarBlock: {
    paddingTop: 4,
    marginRight: 12,
    display: 'flex',
  },
  userAvatarContainer: {
    height: 48,
    width: 48,
  },
  userAvatar: {
    height: '100%',
    width: '100%',
  },
  addTweetFormBody: { display: 'flex', width: '100%', flexDirection: 'column' },
  addTweetInputContainer: {
    display: 'flex',
    paddingTop: 12,
  },
  addTweetInput: {
    width: '100%',
    border: 0,
    resize: 'none',
    outline: 'none',
    fontSize: 18,
    fontFamily: 'inherit',
    paddingTop: 12,
    paddingBottom: 12,
  },
  publicButtonContainer: {
    display: 'flex',
    paddingBottom: 15,
    borderBottom: '1px solid #EFF3F4',
  },
  publicChangeButton: {
    fontSize: 14,
    height: 23,
    paddingLeft: 5,
    paddingRight: 5,
  },
  addTweetFormBottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  bottomButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
  bottomRightSideContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  bottomIconButton: {
    padding: '5px 5px 5px 5px',
    marginRight: 2,
  },
  bottomIcon: {
    height: 22,
    width: 22,
  },
  circularProgressContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '5px 15px 5px 5px',
  },
  addButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px 5px 5px 10px',
    borderLeft: '1.5px solid #B9CAD3',
  },
  addIcon: {
    height: 26,
    width: 26,
  },
  addIconButton: {
    padding: '0px 0px 0px 0px',
  },
  tweetButtonContainer: {
    height: 36,
  },
}));

interface addTweetFormProps {
  avatarUrl: string;
}

export const AddTweetForm: React.FC<addTweetFormProps> = ({ avatarUrl }) => {
  const MAX_LENGTH = 280;

  const classes = useAddTweetStyles();

  const [text, setText] = useState<string>('');
  const [isPublicButtVisible, setPublicButtVisible] = useState<boolean>(false);
  const textLimitPercent = (text.length / MAX_LENGTH) * 100;
  const textCount = MAX_LENGTH - text.length;

  const onInputChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };
  const onInputFocus = () => {
    setPublicButtVisible(true);
  };
  return (
    <div className={classes.addTweetWrapper}>
      <div className={classes.userAvatarBlock}>
        <div className={classes.userAvatarContainer}>
          <Avatar
            src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80atar/1.jpg"
            className={classes.userAvatar}
          />
        </div>
      </div>
      <div className={classes.addTweetFormBody}>
        <div className={classes.addTweetInputContainer}>
          <TextareaAutosize
            className={classes.addTweetInput}
            placeholder="What's Happening?"
            onChange={onInputChange}
            onFocus={onInputFocus}
            value={text}
          />
        </div>
        {isPublicButtVisible && (
          <div className={classes.publicButtonContainer}>
            <Button variant="text" color="primary" className={classes.publicChangeButton}>
              <PublicIcon color="primary" style={{ height: 15, width: 15 }} />
              &nbsp;
              <span>
                <b> Everyone can reply</b>
              </span>
            </Button>
          </div>
        )}

        <div className={classes.addTweetFormBottom}>
          <div className={classes.bottomButtonsContainer}>
            <IconButton className={classes.bottomIconButton} color="primary">
              <WallpaperIcon className={classes.bottomIcon} />
            </IconButton>
            <IconButton className={classes.bottomIconButton} color="primary">
              <GifIcon className={classes.bottomIcon} />
            </IconButton>
            <IconButton className={classes.bottomIconButton} color="primary">
              <PollIcon className={classes.bottomIcon} />
            </IconButton>
            <IconButton className={classes.bottomIconButton} color="primary">
              <EmojiIcon className={classes.bottomIcon} />
            </IconButton>
            <IconButton className={classes.bottomIconButton} color="primary">
              <SchedulersIcon className={classes.bottomIcon} />
            </IconButton>
          </div>
          <div className={classes.bottomRightSideContainer}>
            {text && (
              <>
                {textCount < 0 ? (
                  <span
                    className={classes.circularProgressContainer}
                    style={{ position: 'relative', fontSize: 13, color: 'red' }}
                  >
                    {textCount}
                  </span>
                ) : (
                  <div className={classes.circularProgressContainer}>
                    <CircularProgress
                      variant="static"
                      style={{ color: '#EFF3F4', position: 'absolute' }}
                      size={20}
                      thickness={5}
                      value={100}
                    />
                    <CircularProgress
                      variant="static"
                      size={20}
                      thickness={5}
                      value={textLimitPercent}
                      style={textLimitPercent === 100 ? { color: 'red' } : undefined}
                    />
                  </div>
                )}
                <div className={classes.addButtonContainer}>
                  <IconButton className={classes.addIconButton} color="primary">
                    <AddIcon className={classes.addIcon} color="primary" />
                  </IconButton>
                </div>
              </>
            )}

            <div className={classes.tweetButtonContainer}>
              <Button
                disabled={text.length <= 0 || textCount < 0}
                variant="contained"
                color="primary"
              >
                <Typography style={{ fontSize: 15 }}>
                  <b>Tweet</b>
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
