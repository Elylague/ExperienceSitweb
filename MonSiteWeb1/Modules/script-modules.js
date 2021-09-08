import * as module from './Chimie.js';
let dataChimie=module.recupereChimie()
dataChimie.then(function(element){
  console.log(element[0])
})