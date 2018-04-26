import React,{Component} from 'react';
import { NavLink,Route ,Switch, Redirect} from "dva/router";
import { connect } from 'dva';
import styles from './IndexPage.css';
import Home from './Home/index'
import Discover from './Discover/index'
import Shopcart from './Shopcart/index'
import Mine from './Mine/index'

class IndexPage extends Component {
  render(){
    return (
      <div className={styles.indexPage}>
        <div className={styles.main}>
          <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/discover' component={Discover}></Route>
            <Route path='/shopcart' component={Shopcart}></Route>
            <Route path='/mine' component={Mine}></Route>
            <Redirect from='/' to='/home'></Redirect>
          </Switch>
        </div>
        <div className={styles.foot}>
          <NavLink className={styles.footItem} activeClassName={styles.active} to='/home'>首页</NavLink>
          <NavLink className={styles.footItem} activeClassName={styles.active}  to='/discover'>发现</NavLink>
          <NavLink className={styles.footItem} activeClassName={styles.active}  to='/shopcart'>购物车</NavLink>
          <NavLink className={styles.footItem} activeClassName={styles.active}  to='/mine'>我的</NavLink>
        </div>
      </div>
    );
  }
  componentDidMount(){
    // console.log(this.props.loading)
  }
  
}

IndexPage.propTypes = {
};

export default connect(({loading})=>{return {loading}})(IndexPage);
