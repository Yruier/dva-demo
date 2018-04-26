import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import Head from '../../components/Head/index';
import Nav from '../../components/Nav/index';
import News from '../../components/News/index'

class Home extends React.Component {
  render(){
    // console.log(this.props,'this.props')
    return (
      <div className={styles.Home}>
        <Head/>
        <Nav/>
        <News/>
      </div>
    );
  }
  componentDidMount(){
    this.props.dispatch({
      type:'home/fetchList'
    })
  }
  
}

Home.propTypes = {
};


const mapStateToProps=({home,loading})=>{
  return {
    loading,
    list:home.list
  }
}

export default connect(mapStateToProps)(Home);
