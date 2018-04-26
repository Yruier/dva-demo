import React from 'react';
import styles from './News.css';
import {connect} from 'dva'

class News extends React.Component {
  render(){
    let { news } = this.props;
    // console.log(this.props,'======news=====')
    return (
      <div className={styles.News}>
        <div>
          {news && news.map((item,index)=>{
            return <div key={index}>
              <h3>{item.title}</h3>
              {item.list.map((val,idx)=>{
                return <div key={idx} className={styles.newsItem}>
                  <p>{val.tit}</p>
                  <p>
                    <span>{val.origin}</span>
                    <span>{val.country}</span>
                    <span>{val.timesDate}</span>
                  </p>
                </div>
              })}
            </div>
          })}
        </div>
      </div>
    );
  }
   componentDidMount(){
    this.props.dispatch({
      type:'news/fetchNews'
    })
  }
  
}

News.propTypes = {
};

const mapStateToProps=(state)=>{
  console.log(state,'====state')
  return {
    news:state.news.newsArr
  }
}


export default connect(mapStateToProps)(News);
