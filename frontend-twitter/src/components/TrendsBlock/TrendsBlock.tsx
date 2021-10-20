import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { TrendsItem } from './TrendsItem';

const useTrendsBlockStyles = makeStyles((theme) => ({
  trendsBox: {
    height: 512,
    width: 350,
    backgroundColor: '#F7F9F9',
    borderRadius: 16,
    marginTop: 16,
  },
  trendsBoxHeader: {
    padding: '12px 16px 12px 16px',
  },
}));

export const TrendsBlock = () => {
  const classes = useTrendsBlockStyles();
  return (
    <div className={classes.trendsBox}>
      <div className={classes.trendsBoxHeader}>
        <Typography style={{ fontWeight: 800, fontSize: 20 }}>Trends for you</Typography>
      </div>
      <TrendsItem />
      <TrendsItem />
      <TrendsItem />
      <TrendsItem />
      <TrendsItem />
    </div>
  );
};
