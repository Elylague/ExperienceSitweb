function ChoixBranchesNiveaux(Nivo, Branches, bouton1){

 
 bouton1.addEventListener('click', boutonValider, false)
 
 function boutonValider(e) {
   e.preventDefault()
   e.stopPropagation()

 
 

  switch (Nivo){
   
   case 'NSIV':
    
    if(Branches==='Suite numerique'){
      window.location.href = 'Mathematique/Suite-Numerique.html'
    }else if(Branches==='Algèbre'){
      window.location.href = 'Mathematique/Algebre.html'
    }else if (Branches==='Analyse linéaire'){
      window.location.href = 'Mathematique/Analyse-Lineaire.html'
    }else if(Branches=='Nombre complexe'){
      window.location.href = 'Mathematique/Nombre-Complexe.html'
    }else if(Branches==='Probabilité'){
       window.location.href = 'Mathematique/Probabilite.html'
    }
    

    
       //FIN DE LA FONCTION ONCHANGE()
    // }
    break

    case 'NSIII':
    
    
    if (BrancheNS3 === 'Suite numerique') {
      
    let urlSuite='MathematiqueRheto/Suite-NumeriqueRheto.html'
   fetch(urlSuite).then(function(pageSuite){
        return pageSuite.text()
     }).then(function(Suite){
  let parseSuite=new DOMParser()
  let docSuite=parseSuite.parseFromString(Suite, 'text/html')
  
        sectionDivForm.innerHTML=''
        listeDesCours.style.display='none'
  let SuiteNS3= docSuite.querySelector('div.suiteNS3')
        sectionDivForm.appendChild(SuiteNS3)
       // console.log(Suite)
      })
       
    } else if (BrancheNS3 === 'Algèbre') {
        window.location.href = 'MathematiqueRheto/AlgebreRheto.html'
    } else if (BrancheNS3 === 'Analyse linéaire') {
        window.location.href = 'MathematiqueRheto/Analyse-LineaireRheto.html'
    } else if (BrancheNS3 === 'Analyse combinatoire') {
        window.location.href = 'MathematiqueRheto/Analyse-Combinatoire.html'
    } else if (BrancheNS3 === 'Geométrie analytique') {
        window.location.href = 'MathematiqueRheto/Geometrie-Analytique.html'
     }else if (BrancheNS3 === 'Trigonométrie') {
        window.location.href = 'MathematiqueRheto/Trigonometrie.html'
     }
    break
    
    case 'NSII':
    
    let BrancheNS2 = SelectNSII.value
    if (BrancheNS2 === 'Trigonométrie') {
      window.location.href = 'MathematiqueSeconde/TrigonometrieSeconde.html'
    } else if (BrancheNS2 === 'Algèbre') {
      window.location.href = 'MathematiqueSeconde/AlgebreSeconde.html'
    } else if (BrancheNS2 === 'Geométrie Analytique') {
      window.location.href = 'MathematiqueSeconde/GeometrieAnalytique2nde.html'
    }
    break
    
    case 'NSI':

    let BrancheNS1 = SelectNSI.value
     if (BrancheNS1 === 'Algèbre') {
      window.location.href = 'MathematiqueNS1/AlgebreNS1.html'
    } else if (BrancheNS1 === 'Geométrie plane') {
      window.location.href = 'MathematiqueNS1/Geometrie-planeNS1.html'
    } else if (BrancheNS1 === 'Geométrie Analytique') {
      window.location.href = 'MathematiqueNS1/Geometrie-AnalytiqueNS1.html'
    } else if (BrancheNS1 === 'Trigonométrie') {
      window.location.href = 'MathematiqueNS1/TrigonometrieNS1.html'
    }else if(BrancheNS1==="Geométrie de l'espace"){
      window.location.href='MathematiqueNS1/Geometrie-de-lespace.html'
    }
    break
    
    case '9ème':
    //SelectNSIII.onchange = function() {
    let Branche9 = Select9.value
    if (Branche9 === 'Geométrie plane') {
      window.location.href = 'Mathematique9eme/Geometrie-plane9eme.html'
    } else if (Branche9 === 'Algèbre') {
      window.location.href = 'Mathematique9eme/Algebre9eme.html'
    } else if (Branche9 === "Geométrie de l'espace") {
      window.location.href = 'Mathematique9eme/Geometrie-deLespace9eme.html'
    } 
    break
    
    case '8ème':

    let Branche8 = Select8.value
    if (Branche8 === 'Geométrie plane') {
      window.location.href = 'Mathematique8eme/Geometrie-plane8eme.html'
    } else if (Branche8 === 'Algèbre') {
      window.location.href = 'Mathematique8eme/Algebre8eme.html'
    } else if (Branche8 === "Geométrie de l'espace") {
      window.location.href = 'Mathematique8eme/Geometrie-deLespace8eme.html'
    }
    break
    
    case '7ème':
    //SelectNSIII.onchange = function() {
    let Branche7 = Select7.value
    if (Branche7 === 'Geométrie plane') {
      window.location.href = 'Mathematique7eme/Geometrie-plane7eme.html'
    } else if (Branche7 === 'Algèbre') {
      window.location.href = 'Mathematique7eme/Algebre7eme.html'
    } else if (Branche7 === "Geométrie de l'espace") {
      window.location.href = 'Mathematique7eme/Geometrie-deLespace7eme.html'
    } 
    
    
    
    
      
   
    
    //FIN DE SWITCH
  }
  
  
  
  

 
  }
  
  
  //FIN DE LA FONCTION boutonValider() DANS choixDesBranches()
  
  
  /* FIN DE LA FONCTION choixDesBranches pour le moment() */
}

export{ChoixBranchesNiveaux}