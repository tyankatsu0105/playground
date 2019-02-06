const axios = require('axios')

const hoge = async () => {
  const res = await axios.get('https://api.github.com/users/tyankatsu0105');
  console.log(res.data);
}

hoge();