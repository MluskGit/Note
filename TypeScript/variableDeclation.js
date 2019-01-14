for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}
var o = {
    a: "1",
    b: "2"
};
var a = o.a, b = o.b;
console.log(a);
