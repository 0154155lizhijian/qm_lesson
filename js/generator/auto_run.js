var fetch = require('node-fetch')
function* gen(){
    var url = 'https://api.github.com/users/github';
    var result = yield fetch(url);
    // .then(data=>data.json()).then(data=>rungen.next(data));
    console.log(result);
    console.log(result.bio); 
}
const rungen = gen();
var result = rungen.next()
console.log(result)
result.value.then(function(data){
    return data.json();
}).then(data=>{
    rungen.next(data)
}
)
// rungen.next()

