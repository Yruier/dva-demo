import React,{Component} from 'react';
import styles from './Nav.css'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css';


class Nav extends Component{
    state={
        navList: ['全部', '时政', '社会', '经济', '体育', '娱乐', '民生', '艺术', '生活', '健康']
    }
    render(){
        return (
            <div className={styles.nav} id='nav'>
                <div className={`${styles.wrapper} swiper-wrapper`}>
                    {this.state.navList.map((item,index)=>{
                        return <div className={`${styles.slide} swiper-slide`}  key={index}>{item}</div>
                    })}
                </div>
            </div>
        )
    }
    componentDidMount(){
        new Swiper('#nav',{
            slidesPerView : 4.5,
            on:{
                slideChange: function(){
                    // alert('改变了');
                }
            }
        })
    }
}

export default Nav;