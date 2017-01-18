function countdown(callback){
  window.setTimeout(callback, 2000)
}


function createMultiplier(multiplierValue){
  return function(num){
   return multiplierValue * num
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

var multiplier  = function multiplier(a,b){
  a * b
}


var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
