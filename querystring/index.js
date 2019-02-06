const querystring = require('querystring')

const string = 'foo=bar&hoge=hogehoge&abc=xyz&abc=123';

const query =  querystring.parse(string);

console.log(query);
// { foo: 'bar', hoge: 'hogehoge', abc: [ 'xyz', '123' ] }
