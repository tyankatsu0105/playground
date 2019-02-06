const Queue = require('better-queue')

const q = new Queue((name, cb) => {
  console.log(name);
  cb();
},{
  priority(name,cb){
    if (name === "5") return cb(null, 10);
    if (name === "3") return cb(null, 10);
    cb(null, 0);
  }
})

q.push("1");
q.push("2");
q.push("3");
q.push("4");
q.push("5");
q.push("6");
q.push("7");