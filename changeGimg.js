function readyFn( jQuery ) {
var x = document.getElementsByClassName("ty-img");
var i;
for (i = 0; i < x.length; i++) {
x[i].style.backgroundImage = x[i].style.backgroundImage.replace(/[0-9]+.bp.blogspot.com/,"lh4.ggpht.com").replace("s1600","s600");
}

var y = document.getElementsByClassName("yard-img");
var i;
for (i = 0; i < y.length; i++) {
y[i].style.backgroundImage = y[i].style.backgroundImage.replace(/[0-9]+.bp.blogspot.com/,"lh4.ggpht.com").replace("s1600","s500");
}

var z = document.getElementsByClassName("post-of-mine");
var i;
for (i = 0; i < z.length; i++) {
z[i].style.backgroundImage = z[i].style.backgroundImage.replace(/[0-9]+.bp.blogspot.com/,"lh4.ggpht.com").replace("s1600","s500");
}
}
readyFn;
