 function recupereChimie(){
   let urlChimie='./Chimie-Niveau-Classique.json'
  return fetch(urlChimie).then(function(reponse){
    if(!reponse.ok){
      throw new Error(`erreur de recuperation ${urlChimie}:${reponse.statusText}`)
    }else{
      return reponse.json();
    }
  }).catch(function(err){
    para=document.createElement('p');
    para.textContent=err.message;
    console.log(para)
  })
}

export {recupereChimie}