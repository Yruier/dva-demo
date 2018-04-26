import { queryList } from '../services/api';

export default {

    namespace: 'home',

    state: {
        list: []
    },

    reducers: {
        getList(state, action) {
            return {...state, list: action.payload };
        },
    },

    effects: {
        // 第一个参数是 action，第二个参数是 sagaAPI
        * fetchList({ payload }, { call, put }) { // eslint-disable-line 
            let result = yield call(queryList)
            if (result.data) {
                yield put({
                    type: 'getList',
                    payload: result.data
                });
            }

        },
    },

    subscriptions: {
        setup({ dispatch, history }) { // eslint-disable-line
            window.onLoad = () => {
                dispatch({
                    type: 'fetchList'
                })
            }
        }
    }

};