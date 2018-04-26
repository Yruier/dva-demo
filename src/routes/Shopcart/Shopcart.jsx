import React from 'react';
import { connect } from 'dva';
import styles from './Shopcart.css';

function Shopcart() {
  return (
    <div className={styles.Shopcart}>
      Shopcart
    </div>
  );
}

Shopcart.propTypes = {
};

export default connect()(Shopcart);
