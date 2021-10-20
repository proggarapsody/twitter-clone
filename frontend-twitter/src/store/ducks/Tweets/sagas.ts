import { takeEvery } from '@redux-saga/core/effects';
import { TweetsATypes } from './actionCreators';

export function* fetchTweetsSagaWorker() {
  console.log('fetcha');
}

export function* fetchTweetsSagaWatcher() {
  yield takeEvery(TweetsATypes.FETCH_TWEETS, fetchTweetsSagaWorker);
}
