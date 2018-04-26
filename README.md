## dva-demo

1、 npm install -g dva-cli   全局下载 dva-vli

2、 dva new demo  新建一个 dva 项目，命名为 demo

3、 cd myApp  进入项目

4、 npm start  运行项目


## dva 主要文件模块介绍

### 1、index.js

```js

    // 1. 初始化一个 app 实例
    const app = dva();

    // 2. 使用插件
    app.use({});

    // 3. 挂载 model
    app.model(require('./models/homeModel').default);
    app.model(require('./models/newsModel').default);

    // 4. Router  引入路由
    app.router(require('./router').default);

    // 5. Start
    app.start('#root');

```

### 2、model

```js

export default {
    namespace: 'home',  // model 的命名空间
    state: {     // 相当于 redux 中 store 的 state
        list: []
    },
    // 纯函数，用来更新数据
    reducers: {  
        getList(state, action) {
            return {...state, list: action.payload };
        },
    },
    // 相当于 redux-saga ，用来做数据请求
    effects: {  
        // Generator 函数 ，第一个参数是 action，第二个参数是 sagaAPI
        * fetchList({ payload }, { call, put }) { 
            let result = yield call(queryList)  // 请求数据，使用了封装的 fetch 
            if (result.data) {
                yield put({
                    type: 'getList',  // 对应 reducers 中的函数名
                    payload: result.data  // 将要更新的数据传给 reducers
                });
            }
        },
    },
    // 用来做一些事件监听
    subscriptions: {
        // setup({ dispatch, history }) {
        //     window.onLoad = () => {
        //         dispatch({
        //             type: 'fetchList'
        //         })
        //     }
        // }
    }
}

```

### 3、 utils => request.js 封装了fetch

### 4、 services => api.js 封装了一些数据请求的接口路径