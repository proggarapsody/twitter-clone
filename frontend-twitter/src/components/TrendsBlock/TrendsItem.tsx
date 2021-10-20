import React from 'react';
import { makeStyles, Typography, IconButton } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHoriz';

const useTrendsItemStyles = makeStyles((theme) => ({
  trendsItem: {
    position: 'relative',
    backgroundColor: '#F7F9F9',

    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: '12px 16px 12px 16px',

    '&:hover': {
      backgroundColor: '#EFF1F1',
    },
  },
  trendsItemBoldText: {
    fontSize: 15,
    fontWeight: 700,
  },
  trendsItemGreyText: {
    fontSize: 13,
    color: '#536471',
  },
  trendsItemHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  trendsItemMoreButton: {
    position: 'absolute',
    right: 0,
    top: 1,
    marginRight: 6,
    marginTop: 6,
  },
}));

export const TrendsItem: React.FC = () => {
  const classes = useTrendsItemStyles();

  return (
    <div className={classes.trendsItem}>
      <div className={classes.trendsItemHeader}>
        <div className={classes.trendsItemGreyText}>Technology · Trending</div>
      </div>

      <div>
        <Typography className={classes.trendsItemBoldText}>#facebookdown</Typography>
        <Typography className={classes.trendsItemGreyText}>791K Tweets</Typography>
      </div>
      <div className={classes.trendsItemMoreButton}>
        <IconButton
          style={{
            height: 40,
            width: 40,
          }}
        >
          <MoreIcon />
        </IconButton>
      </div>
    </div>
  );
};
