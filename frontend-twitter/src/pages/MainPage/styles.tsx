import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const mainPageUseStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100vh',
    padding: 0,
    margin: 0,
  },

  tweetsWrapper: {
    height: '100vh',
    borderTop: 0,
    borderBottom: 0,
    borderRadius: 0,
  },
  tweetsHeader: {
    maxWidth: 'fullWidth',
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: 10,
    '& h6': {
      fontWeight: 800,
    },
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  userNameLink: {
    color: grey[500],
    marginLeft: 5,
  },
  tweet: {
    padding: 10,
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)',
    },
  },
  avatar: {
    height: 40,
    width: 40,
  },
  tweetButtonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 450,
  },
  tweetButtonIcon: {
    fontSize: 16,
  },
  globalSearchBox: {
    width: 350,
    backgroundColor: '#fff',
    padding: '5px 0px 4px 0px',
    zIndex: 1,
    position: 'sticky',
    top: 0,
  },
  rightSideWrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 0,
    paddingLeft: 30,
  },
  addTweetFormContainer: {},
}));
