import React from 'react';
import PlainRedux from './PlainRedux';
import ThunkRedux  from './ThunkRedux';
import ReduxSaga  from './ReduxSaga';

import styles from './index.css';

export default function App() {
  return (
    <div className={styles.container}>
      <PlainRedux />
      <ThunkRedux />
      <ReduxSaga />
    </div>
  );
}
