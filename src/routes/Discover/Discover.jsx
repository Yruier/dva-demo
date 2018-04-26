import React from 'react';
import { connect } from 'dva';
import styles from './Discover.css';

function Discover() {
  return (
    <div className={styles.Discover}>
      Discover
    </div>
  );
}

Discover.propTypes = {
};

export default connect()(Discover);
