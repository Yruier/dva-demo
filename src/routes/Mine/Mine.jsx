import React from 'react';
import { connect } from 'dva';
import styles from './Mine.css';

function Mine() {
  return (
    <div className={styles.Mine}>
      Mine
    </div>
  );
}

Mine.propTypes = {
};

export default connect()(Mine);
