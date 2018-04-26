import { queryNews } from '../services/api';

export default {

    namespace: 'news',

    state: {
        newsArr: []
    },

    reducers: {
        getNews(state, action) {
            return {...state, newsArr: action.payload };
        },
    },

    effects: {
        // 第一个参数是 action，第二个参数是 sagaAPI
        * fetchNews({ payload }, { call, put }) { // eslint-disable-line 
            let result = yield call(queryNews)
            if (result.data) {
                yield put({
                    type: 'getNews',
                    payload: result.data
                });
            }
        },
    },

    subscriptions: {
        setup({ dispatch, history }) { // eslint-disable-line
            window.onLoad = () => {
                dispatch({
                    type: 'fetchNews'
                })
            }
        }
    }

};