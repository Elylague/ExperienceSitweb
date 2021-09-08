
let url = new Request('Mathematiques-Niveau-Classique.json')


function recupererMath(){
return fetch(url).then(function(reponseJson) {
  if (!reponseJson.ok) {
    throw new Error('Error:' + reponseJson.statusText)
  } else {
    return reponseJson.json()
  }
}).catch(function(err) {
  let parag=document.createElement('p');
  parag.innerText=err.message
  console.log(err.message)
})
}

export{recupererMath}