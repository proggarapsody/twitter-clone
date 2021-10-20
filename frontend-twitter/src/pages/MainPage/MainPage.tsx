import {
  Avatar,
  Container,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Paper,
  TextareaAutosize,
  TextField,
  Typography,
  InputProps,
  InputAdornment,
  withStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';

import { grey } from '@material-ui/core/colors';

import { Tweet } from '../../components/Tweet';
import { SideBar } from '../../components/SideBar';
import { TrendsBlock } from '../../components/TrendsBlock/TrendsBlock';

import SearchIcon from '@material-ui/icons/Search';
import { SearchBox } from '../../components/SearchBox';
import { AddTweetForm } from './../../components/AddTweetForm';
import { mainPageUseStyles } from './styles';

export const MainPage = () => {
  const classes = mainPageUseStyles();
  return (
    <Container maxWidth="lg">
      <Grid container className={classes.wrapper}>
        <Grid item xs={3}>
          <SideBar />
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Home</Typography>
            </Paper>
            <div className={classes.addTweetFormContainer}>
              <AddTweetForm avatarUrl="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80atar/1.jpg" />
            </div>

            <Tweet
              fullName="Aleksey"
              userName="mikstura_glaza"
              avatarUrl="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80atar/1.jpg"
              tweetText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum veniam similique voluptatibus alias labore voluptatum impedit, velit eos officia sit! Quam fugit alias minima ducimus rerum neque inventore nulla, atque sunt illum corporis dolorem obcaecati libero a tempore, repudiandae animi? Fugiat omnis accusamus consequatur! Cupiditate ratione sunt voluptate exercitationem eum numquam consequuntur dolores facilis laudantium perspiciatis, et dolorem velit neque rerum maiores atque possimus sapiente doloribus corporis nihil voluptatem facere? Animi sequi fugiat dolores, distinctio ducimus qui itaque esse iste quo corrupti necessitatibus numquam cupiditate unde nam eligendi dicta aspernatur nulla culpa deserunt? Voluptatibus adipisci earum omnis quae corrupti similique est quaerat, ratione magnam veniam repudiandae itaque nisi sapiente facere perspiciatis excepturi, porro perferendis nostrum ex impedit iusto, maiores quia blanditiis quos? Soluta optio nulla itaque esse possimus placeat voluptate quia perferendis tenetur magnam. Ea quaerat laborum, molestias ipsum vel, voluptatem quisquam, natus laboriosam non illum labore. Commodi, vero atque."
            />
            <Tweet
              fullName="Aleksey"
              userName="mikstura_glaza"
              avatarUrl="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=758&q=80atar/1.jpg"
              tweetText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum veniam similique voluptatibus alias labore voluptatum impedit, velit eos officia sit! Quam fugit alias minima ducimus rerum neque inventore nulla, atque sunt illum corporis dolorem obcaecati libero a tempore, repudiandae animi? Fugiat omnis accusamus consequatur! Cupiditate ratione sunt voluptate exercitationem eum numquam consequuntur dolores facilis laudantium perspiciatis, et dolorem velit neque rerum maiores atque possimus sapiente doloribus corporis nihil voluptatem facere? Animi sequi fugiat dolores, distinctio ducimus qui itaque esse iste quo corrupti necessitatibus numquam cupiditate unde nam eligendi dicta aspernatur nulla culpa deserunt? Voluptatibus adipisci earum omnis quae corrupti similique est quaerat, ratione magnam veniam repudiandae itaque nisi sapiente facere perspiciatis excepturi, porro perferendis nostrum ex impedit iusto, maiores quia blanditiis quos? Soluta optio nulla itaque esse possimus placeat voluptate quia perferendis tenetur magnam. Ea quaerat laborum, molestias ipsum vel, voluptatem quisquam, natus laboriosam non illum labore. Commodi, vero atque."
            />
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid item xs={3}>
            <div className={classes.rightSideWrapper}>
              <div className={classes.globalSearchBox}>
                <SearchBox />
              </div>
              <TrendsBlock />
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
};
