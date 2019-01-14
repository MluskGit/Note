for (var i = 0; i < 10; i++) {
    setTimeout(function(){console.log(i)
    },100*i);
}
let  o = {
    a:"1",
    b:"2"
}
let {a,b} = o;

console.log(a);
