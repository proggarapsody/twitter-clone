import { fetchTweetsSagaWatcher } from './ducks/Tweets/sagas';

import { all } from 'redux-saga/effects';
export function* rootSaga() {
  yield all([fetchTweetsSagaWatcher]);
}
