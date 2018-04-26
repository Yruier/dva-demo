import React,{ Component } from "react";
import styles from './Head.css'

class Head extends Component{
    render(){
        return (
            <div className={styles.head}>
                <span>=</span>
                <span>译见 | 新闻媒体</span>
                <span>@</span>
            </div>
        )
    }
}

export default Head;