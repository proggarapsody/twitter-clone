import React from 'react';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useSearchBoxStyles = makeStyles(() => ({
  searchBoxWrapper: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 30,
    width: '100%',
    height: 44,
    backgroundColor: '#EFF3F4',
    alignItems: 'center',
  },
  searchInputContainer: {
    height: '100%',
    flexGrow: 1,
    flexShrink: 1,
    padding: '0px 10px',
    display: 'flex',
  },
  searchInput: {
    border: 'none',
    backgroundColor: 'transparent',
    '&:focused': {
      border: 0,
      outline: 0,
    },
  },
}));

export const SearchBox = () => {
  const classes = useSearchBoxStyles();
  return (
    <div className={classes.searchBoxWrapper}>
      <div>
        <SearchIcon />
      </div>
      <div>
        <input type="text" placeholder="Search Twitter" className={classes.searchInput} />
      </div>
    </div>
  );
};
