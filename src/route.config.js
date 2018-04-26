import IndexPage from './routes/IndexPage';
import Home from './routes/Home/index'
import Discover from './routes/Discover/index'
import Shopcart from './routes/Shopcart/index'
import Mine from './routes/Mine/index'

export default {
    route_view: [{
        path: '/',
        component: IndexPage,
        children: {
            route_link: [{
                to: '/home'
            }, {
                to: '/discover'
            }, {
                to: '/shopcart'
            }, {
                to: '/mine'
            }],
            route_view: [{
                path: '/home',
                component: Home
            }, {
                path: '/discover',
                component: Discover
            }, {
                path: '/shopcart',
                component: Shopcart
            }, {
                path: '/mine',
                component: Mine
            }]
        }
    }]


}