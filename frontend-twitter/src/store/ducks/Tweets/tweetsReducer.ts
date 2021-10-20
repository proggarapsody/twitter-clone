import { loadingStates, TweetsState } from './state';
import produce, { Draft } from 'immer';
import { TweetsATypes } from './actionCreators';
const initialState: TweetsState = {
  tweets: [],
  loadingState: loadingStates.NEVER,
};
export const tweetsReducer = produce((draft: Draft<TweetsState>, action) => {
  switch (action.type) { 
    case TweetsATypes.SET_TWEETS: {
      draft.tweets.push(action.payload);
      break;
    }
    case TweetsATypes.FETCH_TWEETS: {
    }
  }
}, initialState);
