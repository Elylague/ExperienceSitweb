let url = new Request('Physiques-Niveau-Classique.json')


function recupererPhysique() {
  return fetch(url).then(function(reponseJson) {
    if (!reponseJson.ok) {
      throw new Error('Error:' + reponseJson.statusText)
    } else {
      return reponseJson.json()
    }
  }).catch(function(err) {
    let paragErrPhysique = document.createElement('p');
    paragErrPhysique.innerText = err.message
    console.log(err.message)
  })
}

export { recupererPhysique}