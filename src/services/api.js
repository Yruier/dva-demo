import request from '../utils/request';

export function queryList() {
    return request('https://jsonplaceholder.typicode.com/users', {});
}

export function queryNews() {
    return request('../../public/data/news.json', {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });
}