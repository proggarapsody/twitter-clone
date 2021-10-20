import { Button, Grid, Hidden, IconButton, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import MessagesIcon from '@material-ui/icons/MailOutline';
import BookmarksIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/List';
import UserIcon from '@material-ui/icons/PersonOutline';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import { grey } from '@material-ui/core/colors';
import { TweetButton } from './TweetButton';
import { ModalBlock } from './Modal';
import { AddTweetForm } from './AddTweetForm';

const useSideBarStyles = makeStyles((theme) => ({
  sideBarWrapper: {
    margin: 0,
    padding: 0,

    position: 'fixed',
  },
  leftSideMainIcon: {
    fontSize: 38,
  },
  leftSideLogo: {
    margin: '10px 0',
    marginTop: 0,
  },
  leftSideListItem: {
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  },
  leftSideList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  leftSideListIcon: {
    fontSize: 28,
  },
  leftSideListLabel: {
    marginLeft: 15,
  },
  tweetButtonContainer: {
    marginTop: 15,
    width: '100%',
    height: 52,
  },
  tweetButton: {
    height: '100%',
    width: '100%',
  },

  sideBarListButton: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    paddingLeft: 10,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
    marginLeft: 5,
    '&:hover': {
      backgroundColor: '#E7E7E8',

      '& h6': {
        color: theme.palette.primary,
      },
    },
  },
}));

export const SideBar = () => {
  const classes = useSideBarStyles();

  const [isVisible, setVisible] = useState<boolean>(false);

  const onTweetButtonClick = () => {
    setVisible(true);
  };

  const onTweetModalClose = () => {
    setVisible(false);
  };

  return (
    <div className={classes.sideBarWrapper}>
      <IconButton className={classes.leftSideLogo}>
        <TwitterIcon className={classes.leftSideMainIcon} color="primary" />
      </IconButton>
      <ul className={classes.leftSideList}>
        <li>
          <div className={classes.sideBarListButton}>
            <HomeIcon className={classes.leftSideListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.leftSideListLabel}>
                Home
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.leftSideListItem}>
          <div className={classes.sideBarListButton}>
            <SearchIcon className={classes.leftSideListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.leftSideListLabel}>
                Search
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.leftSideListItem}>
          <div className={classes.sideBarListButton}>
            <NotificationsIcon className={classes.leftSideListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.leftSideListLabel}>
                Notifications
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.leftSideListItem}>
          <div className={classes.sideBarListButton}>
            <MessagesIcon className={classes.leftSideListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.leftSideListLabel}>
                Messages
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.leftSideListItem}>
          <div className={classes.sideBarListButton}>
            <BookmarksIcon className={classes.leftSideListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.leftSideListLabel}>
                Bookmarks
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.leftSideListItem}>
          <div className={classes.sideBarListButton}>
            <ListIcon className={classes.leftSideListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.leftSideListLabel}>
                List
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.leftSideListItem}>
          <div className={classes.sideBarListButton}>
            <UserIcon className={classes.leftSideListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.leftSideListLabel}>
                Friends
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.leftSideListItem}>
          <div className={classes.sideBarListButton}>
            <MoreIcon className={classes.leftSideListIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.leftSideListLabel}>
                More
              </Typography>
            </Hidden>
          </div>
        </li>
      </ul>
      <div className={classes.tweetButtonContainer}>
        <Button
          onClick={onTweetButtonClick}
          variant="contained"
          color="primary"
          className={classes.tweetButton}
        >
          <Typography>
            <b>Tweet</b>
          </Typography>
        </Button>
      </div>
      <ModalBlock title="" isVisible={isVisible} onClose={onTweetModalClose}>
        <div style={{ margin: 0, padding: 0 }}>
          <AddTweetForm avatarUrl="s" />
        </div>
      </ModalBlock>
    </div>
  );
};
