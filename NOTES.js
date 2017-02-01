"use strict"

function doIt() {
  console.log(this)
}

doIt();

window.doIt();

var o = {
  id: 2,
  doIt: doIt
}

o.doIt();

console.log(doIt === o.doIt)

const fn = o.doIt.bind(o);

setTimeout(o.doIt, 2000) // WINDOW
setTimeout(fn, 2000)     // OBJECT
