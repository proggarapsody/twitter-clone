import { Tweet, TweetsState } from './state';

export enum TweetsATypes {
  ADD_TWEET = 'ADD_TWEET',
  FETCH_TWEETS = 'FETCH_TWEETS',
  SET_TWEETS = 'SET_TWEETS',
}

//Action creators
export const actions = {
  addTweet: (tweet: Tweet) => ({
    type: TweetsATypes.ADD_TWEET,
    payload: tweet,
  }),
  setTweets: (payload: TweetsState['tweets']) => ({
    type: TweetsATypes.SET_TWEETS,
    payload,
  }),
  fetchTweets: (payload: TweetsState['tweets']) => ({
    type: TweetsATypes.FETCH_TWEETS,
    payload,
  }),
};
