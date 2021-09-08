
const Body= document.querySelector('body')
const Nav=document.querySelector('nav')
//console.log(Nav)
const listeDesCours=document.querySelector('section .les-cours')
//console.log(listeDesCours)
const sectionDivForm=document.querySelector('div.espace-form')
const textPageCour=sectionDivForm.innerHTML
//console.log(sectionDivForm.innerHTML)

// Injecter les elements dans le NAV
const OngletNav=`<ul id='navUL'>
        <li ><a id="Page-Accueil" data-page="Page-Accueil" class="active" href="#">Accueil</a></li>
        <li ><a id="Page-Cours" data-page="Page-Cours" href="#">Cours</a></li>
        <li ><a id="Page-Mefia" data-page="Page-Media" href="#">Media</a></li>
        <li ><a id="Page-Staff" data-page="Page-Staff" href="#">Staff</a></li>
      </ul>`
  Nav.innerHTML=OngletNav
  listeDesCours.innerHTML=` <ul>
  <li id="pink"><a class="ancre" href="#">Mathematiques</a></li>
  <li id="yellow"><a class="ancre" href="#">Physiques</a></li>
  <li id="skyblue"><a class="ancre" href="#">Chimie</a></li>
  <li id="orange"><a class="ancre" href="#">Science sociale</a></li>
  <li id="greenyellow"><a class="ancre" href="#">Anglais</a></li>
  <li id="cadetblue"><a class="ancre" href="#">Espagnol</a></li>
  <li id="beige"><a class="ancre" href="#">Créole</a></li>
  <li id="lightcoral"><a class="ancre" href="#">Français</a></li>
          <ul>`
  const dataPage=document.querySelectorAll('nav #navUL li')
 
/*console.log(sectionDivForm)*/


/* RECHARGER TOUTE LA PAGE DABORD */

window.addEventListener('load', function(){
  
history.replaceState({}, '', '#Page-Accueil')
document.title='Page-Accueil'
const menu= document.querySelectorAll('#navUL li a')

const Sections=document.querySelectorAll('main section')


const Section=document.querySelector('main section#Page-Acceuil')


//partie qui gere les onglets de la page d'accueil 

for(let i=0; i<menu.length; i++){
  Onglets=menu[i]
  //console.log(menu[i])
  activeClass(Onglets,i)
  
}

function activeClass(Onglets,indice){
  
  Onglets.addEventListener('click',changerClass, false)
  function changerClass(e){
    e.preventDefault()
    e.stopPropagation()
    for(let i=0;i<menu.length;i++){
      menu[i].className=''
    }
    Onglets.className='active'
    
    for(let j=0;j<Sections.length;j++){
      Sections[j].className=''
    }
    
    Sections[indice].className='Section-active'
  let Attr = menu[indice].getAttribute('data-Page')
  
  history.pushState({}, 'titre', '#'+Attr)
  
 document.title=Attr
  
 // console.log(location.hash)
  
  }

}
 //[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]



  
// MISE A JOUR DE LA PAGE D'ACCUEIL; 
//RECUPERATION DES DONNÉES
const Main=document.querySelector('main')


const Acceuil=document.querySelector('#Page-Acceuil')

function recuperer(url, type){
return fetch(url).then(function(reponse){
  if(!reponse.ok){
    throw new Error(`vous avez une erreur au fichier :${url}. ${reponse.status}`)
  }else{
    if(type==='text'){
      return reponse.text()
    }
  }
}).catch(function(err){
  console.error('desoler il y a un problème '+err.message)
})

}

let texte1=recuperer('Introduction-Math.txt', 'text')
let texte2=recuperer('Importance-Math.txt', 'text')

Promise.all([texte1, texte2]).then(function(data){

  
  
  
  let titre=document.createElement('h1')
  titre.textContent='Bienvenue sur le site : JE COMPRENDS TOUS MES COURS'
  Acceuil.appendChild(titre)
  
  for(i=0;i<data.length;i++){
    let paragrath = document.createElement('p')
    paragrath.textContent=data[i]
    Acceuil.appendChild(paragrath)
  }
   //Body.style.display='block'

})
//})
// FIN RECHARGEMENT DE TOUTE LA PAGE //D'ACCUEIL 




//====DEUXIÈME FONCTION PRINCIPALE====

  /* RECUPERER LES DONNÉES DE MATIERE.COURS DANS LA BASE DE DONNÉE */
function tousLesCours(url) {
  fetch(url).then(function(reponse) {
    if (!reponse.ok) {
      throw new error('vous ne pouvez pas acceder à:' + url + 'une erreur' + reponse.status)
    } else {
      let Json = reponse.json()
      return Json
    }
  }).then(function(dataJson) {


    let data = dataJson
    sortiDataFetch(data)


  }).catch(function(err) {
    console.error('problème de reccuperation:' + err.message)
  })
}

tousLesCours('Matiere.json')







/* AFFICHER LES DONNÉES DANS LA PAGE COURS DES MATIERES ET RECUPERER JSON*/
let lesMatiere=[]
const Select=document.createElement('select')
let selectOptions=[]
const listesCours=document.querySelectorAll('.les-cours li a.ancre')


//====TROISIÈME FONCTION PRINCIPALE======

function sortiDataFetch(Data){
  let selectEnDur=[]
  

     

  
  /* MISE A JOUR DE LA PAGE DES COURS ET GERER LE FORMULAIRE POUR CHOISIR LA BRANCHE DU COURS CHOISIS */


  
  

  listesCours.forEach(function(liste, i){
    traiterCoursCliquer(liste,  i)
  })
    
    
  
  

  /*!!!!!!! FONCTION QUI TRAITE LORSQU'ON CLICK SUR UN DES COURS( UNIQUE FONCTON PRINCIPALE IMBRIQUER DIRECTEMENT DANS sortieDataFetch())!!!!!!!!!!!!!*/
  function traiterCoursCliquer(listes,indice){
    
    listes.addEventListener('click',coursCliquer, false )
    
    /* fonction pour clicker sur ls liste des cours */
    function coursCliquer(e){
    e.preventDefault()
    e.stopPropagation()
    
    
   // console.log('interieur de coursCliquer()')
  
  
    sectionDivForm.innerHTML='Pending...((()))'
    
    
    //====RECUPERER PAGE FORMULAIRE====
    /* !!IMBRIQUER DANS FONCTION traiterCoursCliquer()!! */
      function RecupererPageForm(url) {
      fetch(url).then(function(reponse) {
        if (reponse.ok) {
          return reponse.text()
        } else {
          throw new Error(`erreur:${url} , ${reponse.status}`)
        }
    
      }).then(function(dataHTML) {
        let pars = new DOMParser()
        let doc = pars.parseFromString(dataHTML, 'text/html')
        traiterForm(doc)
      }).catch(function(err) {
        let para = document.createElement('p')
        para.innerHTML = `${err.message}`
        sectionDivForm.innerHTML = ''
        sectionDivForm.appendChild(para)
    
      })
    
    }
  
  

  
  RecupererPageForm('Formulaire-Cours.html');
  


/* !!IMBRIQUER DANS FONCTION  traiterCoursCliquer()!!*/
  function traiterForm(Forms){
    //console.log(Forms)
   let ToutForm=Forms.querySelectorAll('.tout-form div')
    // console.log(ToutForm[0])
     if (sectionDivForm.innerHTML==='Pending...((()))'){
       sectionDivForm.innerHTML=''
       sectionDivForm.appendChild(ToutForm[indice])
  
     }
     

    
    /*RECUPERER TOUS LES SELECTS DANS FORM-MATH ET LES STYLISER */
  
     const Label=ToutForm[0].querySelector('.branche')
     Label.style.display='none'
     
     const SelectNS4=ToutForm[0].querySelector('div select#one')
     // SelectNS4.style.width='100px'
      SelectNS4.style.display='none'
//======================================
      const SelectNSI=ToutForm[0].querySelector('div select#three')
     // SelectNSI.style.width = '100px'
      SelectNSI.style.display='none'
      //console.log(SelectNSI)
//======================================
      const SelectNSII=ToutForm[0].querySelector('div select#four')
      //SelectNSII.style.width = '100px'
      SelectNSII.style.display = 'none'
      //console.log(SelectNSII)
//======================================
      const SelectNSIII=ToutForm[0].querySelector('div select#five')
     // SelectNSIII.style.width = '100px'
      SelectNSIII.style.display = 'none'
      //console.log(SelectNSIII)
//======================================
    const Select9=ToutForm[0].querySelector('#six')
      // Select9.style.width='100px'
       Select9.style.display='none'
      // console.log(Select9)
//======================================
  const Select7 = ToutForm[0].querySelector('#seven')
 // Select7.style.width = '100px'
  Select7.style.display = 'none'
       //console.log(Select7)
//======================================
  const Select8 = ToutForm[0].querySelector('#eight')
  //Select8.style.width = '100px'
  Select8.style.display = 'none'
   //console.log(Select8)
//======================================
    
    /*RECUPERER LES COURS DE MATH ET CREER LES OPTIONS POUR LES AJOUTER DANS le SELECT1*/
    let MathNSIII=Data[1].MathematiqueRheto
   // console.log(MathNSIII)
//======================================
    let MathNS4 = Data[0].mathematiqueTerminale
//======================================
    let Math8=Data[4].Mathematique
    //console.log(Math8)
//======================================
    let MathNSI=Data[2].MathematiqueNS1
    //console.log(MathNSI)
//======================================
    let MathNSII=Data[3].MathematiqueNS2
    //console.log(MathNSII)
//======================================
    let NIVEAUX = Data[7].niveau
    const SelectNiveau = ToutForm[0].querySelector('div select#two')
   // SelectNiveau.style.width = '100px'
//======================================
    // console.log(SelectNiveau)
    let Bouton1=ToutForm[0].querySelector('div .bouton1')
    //console.log(Bouton1)
    


   
    
// TOUS LES BOUTONS DU FORMULAIRE

//======================================
    
   for (let a=0; a < NIVEAUX.length; a++) {
     //console.log(classes[a])
     let optionPourNiveau = document.createElement('option')
   
     optionPourNiveau.value = NIVEAUX[a]
     optionPourNiveau.text = NIVEAUX[a]
     SelectNiveau.add(optionPourNiveau)
  
   }
   
   
  
   
    
   /* LA BOUCLE SWITCH COMMENCE ICI MÊNE */ 
    SelectNiveau.addEventListener('change', choixNiveauBranche)
    
  function choixNiveauBranche(e) {
     let Lechoix = SelectNiveau.value
     
    switch (Lechoix) {
        case 'NSIV':
          if (SelectNS4.length==0) {
    for (let mathns4 of MathNS4) {
     let optionPourNS4 = document.createElement('option')
     optionPourNS4.value = mathns4
     optionPourNS4.text = mathns4
     SelectNS4.add(optionPourNS4)
   
        }
          
     }
    
   Label.style.display='block'  
   SelectNS4.style.display='block'
   SelectNSIII.style.display='none'
   SelectNSII.style.display='none'
   SelectNSI.style.display = 'none'
   Select7.style.display = 'none'
   Select8.style.display = 'none'
   Select9.style.display = 'none'
   choixDesBranches(Lechoix)

     break
        case 'NSIII':
        
  if(SelectNSIII.length==0){
  for (let mathns3 of MathNSIII) {
  let optionPourNS3 = document.createElement('option')
  optionPourNS3.value = mathns3
  optionPourNS3.text = mathns3
  SelectNSIII.add(optionPourNS3)
       }
    
   } 
  Label.style.display='block'  
  SelectNSIII.style.display = 'block'
  SelectNS4.style.display = 'none'
  SelectNSII.style.display='none'
  SelectNSI.style.display = 'none'
  Select9.style.display = 'none'
  Select8.style.display = 'none'
  Select7.style.display = 'none'
  choixDesBranches(Lechoix)
//console.log(Lechoix, 'et '+SelectNSIII.value)
  break
  case 'NSII':
  if(SelectNSII.length==0){
    for (let mathns2 of MathNSII) {
      let optionPourNS2 = document.createElement('option')
      optionPourNS2.value = mathns2
      optionPourNS2.text = mathns2
      SelectNSII.add(optionPourNS2)
    
    }
  
  }
  Label.style.display='block'  
  SelectNSII.style.display='block'
  SelectNSIII.style.display='none'
  SelectNS4.style.display = 'none'
  SelectNSI.style.display = 'none'
  Select9.style.display = 'none'
  Select8.style.display = 'none'
  Select7.style.display = 'none'
 choixDesBranches(Lechoix)
  break
  case 'NSI':
    if (SelectNSI.length == 0) {
      for (let mathns1 of MathNSI) {
        let optionPourNS1 = document.createElement('option')
        optionPourNS1.value = mathns1
        optionPourNS1.text = mathns1
        SelectNSI.add(optionPourNS1)
    
      }
    
    }
    Label.style.display='block'  
    SelectNSI.style.display = 'block'
    SelectNSII.style.display = 'none'
    SelectNSIII.style.display = 'none'
    SelectNS4.style.display = 'none'
    Select9.style.display = 'none'
    Select8.style.display = 'none'
    Select7.style.display = 'none'
    choixDesBranches(Lechoix)
    break
    case '9ème':
    if (Select9.length == 0) {
      for (let math9 of Math8) {
        let optionPour9 = document.createElement('option')
        optionPour9.value = math9
        optionPour9.text = math9
        Select9.add(optionPour9)
    
      }
    
    }
    Label.style.display='block'  
    Select9.style.display = 'block'
    SelectNSII.style.display = 'none'
    SelectNSIII.style.display = 'none'
    SelectNS4.style.display = 'none'
    SelectNSI.style.display = 'none'
    Select8.style.display = 'none'
    Select7.style.display = 'none'
    choixDesBranches(Lechoix)
    break
    case '8ème':
    if (Select8.length == 0) {
      for (let math8 of Math8) {
        let optionPour8 = document.createElement('option')
        optionPour8.value = math8
        optionPour8.text = math8
        Select8.add(optionPour8)
    
      }
    
    }
    Label.style.display='block'  
    Select8.style.display = 'block'
    SelectNSII.style.display = 'none'
    SelectNSIII.style.display = 'none'
    SelectNS4.style.display = 'none'
    Select9.style.display = 'none'
    SelectNSI.style.display = 'none'
    Select7.style.display = 'none'
    choixDesBranches(Lechoix)
    break
    case '7ème':
    if (Select7.length == 0) {
      for (let math7 of Math8) {
        let optionPour7 = document.createElement('option')
        optionPour7.value = math7
        optionPour7.text = math7
        Select7.add(optionPour7)
    
      }
    
    }
    Label.style.display='block'  
    Select7.style.display = 'block'
    SelectNSII.style.display = 'none'
    SelectNSIII.style.display = 'none'
    SelectNS4.style.display = 'none'
    Select9.style.display = 'none'
    Select8.style.display = 'none'
    SelectNSI.style.display = 'none'
    choixDesBranches(Lechoix)
   // console.log(Select7)
    
    
    }
    
    
  
     //console.log(indice)
     /*FIN DE L'AJOUT DES COURS DE MATH DANS LE FORMULAIRE DE MATH*/
     
     
function choixDesBranches(Nivo){

 
 Bouton1.addEventListener('click', boutonValider, false)
 
 function boutonValider(e) {
   e.preventDefault()
   e.stopPropagation()

 
 

  switch (Nivo){
   
   case 'NSIV':
    
    let Branches = SelectNS4.value
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
    
      let BrancheNS3 = SelectNSIII.value
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
  
  
  /* FIN DE LA FONCTION choixDesBranches() */
}

     
   }
   /* &&&& FIN DE LA FONCTION choix()&&&& */

    
  
  
  
 // console.log(ToutForm[0])
  
  
  
  /*&&&&&&&& FIN DE LA FONCTION traiterForm() DANS LA FONCTION traiterCoursCliquer() &&&&&&&&&&*/
  

      }
 
  
  

  
   let containLi=e.target.innerHTML
    let Etat={containLi}

    
  history.pushState(Etat, Etat.containLi, `/MonSiteWeb/Index.html#Page-Cours/${Etat.containLi}`)
  
   
  
   
  
    //&&&&&&FIN DE LA FONCTION CoursCliquer()&&&&&&&&
     }
     
     
     
     
    }
   
  
  







/* FIN DE LA fonction  SortieDataFetch()
 QUI CRÉE LE FORMULAIRE ET AFFICHE LES BRANCHES DES MATHS À CHOISIR*/


}
  
  
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


/* CREATION DE LA FONCTION POPSTATE POUR LES BACKS AND RETURN DES ONGLETS ET POUR LA PAGE COURS À CHOISIR */
  
  
  window.addEventListener('popstate', PopState)
  
  function PopState(e){

  for (let e = 0;e< Sections.length; e++) {
    Sections[e].className = ''
  }

  for(let c=0;c<menu.length;c++){
   menu[c].className=''
   
  }
  let HASH=location.hash.replace('#','')

  switch(HASH){
    case 'Page-Accueil':
    if(HASH==='Page-Accueil'){
    menu[0].className='active'
    Sections[0].className='Section-active'
    document.title='Page-Accueil'
    }
    break
    case 'Page-Cours':
    if(HASH==='Page-Cours'){
    menu[1].className='active'
    Sections[1].className='Section-active'
    document.title='Page-Cours'
    }
    break
    case 'Page-Media':
    if(HASH==='Page-Media'){
    menu[2].className='active'
    Sections[2].className='Section-active'
    document.title='Page-Media'
    }
    break
    case 'Page-Staff':
    if(HASH==='Page-Staff'){
    menu[3].className='active'
    Sections[3].className='Section-active'
    document.title='Page-Staff'
    }
    break
    default:
    menu[1].className = 'active'
    Sections[1].className = 'Section-active'
    document.title = 'Page-Cours'
    
  }
  
  
  
  
  
  /* BACK AND FORWARD POUR LA PAGE FORMULAIRE */
  
  
  
  function tousLesCours(url) {
  fetch(url).then(function(reponse) {
    if (!reponse.ok) {
      throw new error('vous ne pouvez pas acceder à:' + url + 'une erreur' + reponse.status)
    } else {
      let Json = reponse.json()
      return Json
    }
  }).then(function(dataJson) {


    let data = dataJson
    sortiDataFetch(data)


  }).catch(function(err) {
    console.error('problème de reccuperation:' + err.message)
  })
}

tousLesCours('Matiere.json')







/* AFFICHER LES DONNÉES DANS LA PAGE COURS DES MATIERES ET RECUPERER JSON*/
let lesMatiere=[]
const Select=document.createElement('select')
let selectOptions=[]
const listesCours=document.querySelectorAll('.les-cours li a.ancre')


//====TROISIÈME FONCTION PRINCIPALE======

function sortiDataFetch(Data){
  let selectEnDur=[]
  

  
  sectionDivForm.innerHTML='Pending...((()))'
  
  function RecupererPageForm(url) {
    fetch(url).then(function(reponse){
      if(reponse.ok){
      return reponse.text()
      }else{
        throw new Error(`erreur:${url} , ${reponse.status}`)
      }

    }).then(function(dataHTML) {
      let pars = new DOMParser()
      let doc = pars.parseFromString(dataHTML, 'text/html')
      traiterForm(doc)
    }).catch(function(err){
      let para=document.createElement('p')
      para.innerHTML=`${err.message}`
      sectionDivForm.innerHTML=''
      sectionDivForm.appendChild(para)
      
    })
  
  }
  
  
  
  
  RecupererPageForm('Formulaire-Cours.html');
  
  function traiterForm(docForm){
    
  
    let ToutForm = docForm.querySelectorAll('.tout-form div')
    
  function displayNoneSelect(){
    
       const Label=ToutForm[0].querySelector('.branche')
     Label.style.display='none'
     
     const SelectNS4=ToutForm[0].querySelector('div select#one')
     // SelectNS4.style.width='100px'
      SelectNS4.style.display='none'
//======================================
      const SelectNSI=ToutForm[0].querySelector('div select#three')
     // SelectNSI.style.width = '100px'
      SelectNSI.style.display='none'
      //console.log(SelectNSI)
//======================================
      const SelectNSII=ToutForm[0].querySelector('div select#four')
      //SelectNSII.style.width = '100px'
      SelectNSII.style.display = 'none'
      //console.log(SelectNSII)
//======================================
      const SelectNSIII=ToutForm[0].querySelector('div select#five')
     // SelectNSIII.style.width = '100px'
      SelectNSIII.style.display = 'none'
      //console.log(SelectNSIII)
//======================================
    const Select9=ToutForm[0].querySelector('#six')
      // Select9.style.width='100px'
       Select9.style.display='none'
      // console.log(Select9)
//======================================
  const Select7 = ToutForm[0].querySelector('#seven')
 // Select7.style.width = '100px'
  Select7.style.display = 'none'
       //console.log(Select7)
//======================================
  const Select8 = ToutForm[0].querySelector('#eight')
  //Select8.style.width = '100px'
  Select8.style.display = 'none'
   //console.log(Select8)
//======================================
    
    /*RECUPERER LES COURS DE MATH ET CREER LES OPTIONS POUR LES AJOUTER DANS le SELECT1*/
    let MathNSIII=Data[1].MathematiqueRheto
   // console.log(MathNSIII)
//======================================
    let MathNS4 = Data[0].mathematiqueTerminale
//======================================
    let Math8=Data[4].Mathematique
    //console.log(Math8)
//======================================
    let MathNSI=Data[2].MathematiqueNS1
    //console.log(MathNSI)
//======================================
    let MathNSII=Data[3].MathematiqueNS2
    //console.log(MathNSII)
//======================================
    let NIVEAUX = Data[7].niveau
    const SelectNiveau = ToutForm[0].querySelector('div select#two')
   // SelectNiveau.style.width = '100px'
//======================================
    // console.log(SelectNiveau)
    let Bouton1=ToutForm[0].querySelector('div .bouton1')
    //console.log(Bouton1)
    
    


   
   
   
   
       
// TOUS LES BOUTONS DU FORMULAIRE

//======================================
    
   for (let a=0; a < NIVEAUX.length; a++) {
     //console.log(classes[a])
     let optionPourNiveau = document.createElement('option')
   
     optionPourNiveau.value = NIVEAUX[a]
     optionPourNiveau.text = NIVEAUX[a]
     SelectNiveau.add(optionPourNiveau)
  
   }
   
   
  
   
    
   /* LA BOUCLE SWITCH COMMENCE ICI MÊNE */ 
    SelectNiveau.addEventListener('change', choixNiveauBranche)
    
  function choixNiveauBranche(e) {
     let Lechoix = SelectNiveau.value
     
    switch (Lechoix) {
        case 'NSIV':
          if (SelectNS4.length==0) {
    for (let mathns4 of MathNS4) {
     let optionPourNS4 = document.createElement('option')
     optionPourNS4.value = mathns4
     optionPourNS4.text = mathns4
     SelectNS4.add(optionPourNS4)
   
        }
            //console.log(optionPourNS4)
   // console.log(Lechoix, 'et '+SelectNS4.value)
     }
    
   Label.style.display='block'  
   SelectNS4.style.display='block'
   SelectNSIII.style.display='none'
   SelectNSII.style.display='none'
   SelectNSI.style.display = 'none'
   Select7.style.display = 'none'
   Select8.style.display = 'none'
   Select9.style.display = 'none'
   choixDesBranches(Lechoix)

     break
        case 'NSIII':
        
  if(SelectNSIII.length==0){
  for (let mathns3 of MathNSIII) {
  let optionPourNS3 = document.createElement('option')
  optionPourNS3.value = mathns3
  optionPourNS3.text = mathns3
  SelectNSIII.add(optionPourNS3)
       }
    
   } 
  Label.style.display='block'  
  SelectNSIII.style.display = 'block'
  SelectNS4.style.display = 'none'
  SelectNSII.style.display='none'
  SelectNSI.style.display = 'none'
  Select9.style.display = 'none'
  Select8.style.display = 'none'
  Select7.style.display = 'none'
  choixDesBranches(Lechoix)
//console.log(Lechoix, 'et '+SelectNSIII.value)
  break
  case 'NSII':
  if(SelectNSII.length==0){
    for (let mathns2 of MathNSII) {
      let optionPourNS2 = document.createElement('option')
      optionPourNS2.value = mathns2
      optionPourNS2.text = mathns2
      SelectNSII.add(optionPourNS2)
    
    }
  
  }
  Label.style.display='block'  
  SelectNSII.style.display='block'
  SelectNSIII.style.display='none'
  SelectNS4.style.display = 'none'
  SelectNSI.style.display = 'none'
  Select9.style.display = 'none'
  Select8.style.display = 'none'
  Select7.style.display = 'none'
 choixDesBranches(Lechoix)
  break
  case 'NSI':
    if (SelectNSI.length == 0) {
      for (let mathns1 of MathNSI) {
        let optionPourNS1 = document.createElement('option')
        optionPourNS1.value = mathns1
        optionPourNS1.text = mathns1
        SelectNSI.add(optionPourNS1)
    
      }
    
    }
    Label.style.display='block'  
    SelectNSI.style.display = 'block'
    SelectNSII.style.display = 'none'
    SelectNSIII.style.display = 'none'
    SelectNS4.style.display = 'none'
    Select9.style.display = 'none'
    Select8.style.display = 'none'
    Select7.style.display = 'none'
    choixDesBranches(Lechoix)
    break
    case '9ème':
    if (Select9.length == 0) {
      for (let math9 of Math8) {
        let optionPour9 = document.createElement('option')
        optionPour9.value = math9
        optionPour9.text = math9
        Select9.add(optionPour9)
    
      }
    
    }
    Label.style.display='block'  
    Select9.style.display = 'block'
    SelectNSII.style.display = 'none'
    SelectNSIII.style.display = 'none'
    SelectNS4.style.display = 'none'
    SelectNSI.style.display = 'none'
    Select8.style.display = 'none'
    Select7.style.display = 'none'
    choixDesBranches(Lechoix)
    break
    case '8ème':
    if (Select8.length == 0) {
      for (let math8 of Math8) {
        let optionPour8 = document.createElement('option')
        optionPour8.value = math8
        optionPour8.text = math8
        Select8.add(optionPour8)
    
      }
    
    }
    Label.style.display='block'  
    Select8.style.display = 'block'
    SelectNSII.style.display = 'none'
    SelectNSIII.style.display = 'none'
    SelectNS4.style.display = 'none'
    Select9.style.display = 'none'
    SelectNSI.style.display = 'none'
    Select7.style.display = 'none'
    choixDesBranches(Lechoix)
    break
    case '7ème':
    if (Select7.length == 0) {
      for (let math7 of Math8) {
        let optionPour7 = document.createElement('option')
        optionPour7.value = math7
        optionPour7.text = math7
        Select7.add(optionPour7)
    
      }
    
    }
    Label.style.display='block'  
    Select7.style.display = 'block'
    SelectNSII.style.display = 'none'
    SelectNSIII.style.display = 'none'
    SelectNS4.style.display = 'none'
    Select9.style.display = 'none'
    Select8.style.display = 'none'
    SelectNSI.style.display = 'none'
    choixDesBranches(Lechoix)
   // console.log(Select7)
    
    
    }
    
    
  
     //console.log(indice)
     /*FIN DE L'AJOUT DES COURS DE MATH DANS LE FORMULAIRE DE MATH*/
     
     
function choixDesBranches(Nivo){

 
 Bouton1.addEventListener('click', boutonValider, false)
 
 function boutonValider(e) {
   e.preventDefault()
   e.stopPropagation()

 
 

  switch (Nivo){
   
   case 'NSIV':
    
    let Branches = SelectNS4.value
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
    
      let BrancheNS3 = SelectNSIII.value
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
  
  
  /* FIN DE LA FONCTION choixDesBranches() */
}

     
   }
   /* &&&& FIN DE LA FONCTION choix()&&&& */

   
   
   
    
    
  }
  
    
    
    
    
  /* PREPARATION DU CODE POUR BACK AND RETURN POUR LES COURS CHOISIS DANS LA FONCTION POPSTATE */
    
  let matye = history.state.containLi
  switch(matye) {
  case 'Mathematiques':
    menu[1].className = 'active'
    Sections[1].className = 'Section-active'
    document.title = 'Page-Cours'
    if (sectionDivForm.innerHTML === 'Pending...((()))') {
      sectionDivForm.innerHTML = ''
      sectionDivForm.appendChild(ToutForm[0])
   displayNoneSelect()
    }
  break
  case 'Physiques':
    menu[1].className = 'active'
    Sections[1].className = 'Section-active'
    document.title = 'Page-Cours'
      if (sectionDivForm.innerHTML === 'Pending...((()))') {
        sectionDivForm.innerHTML = ''
        sectionDivForm.appendChild(ToutForm[1])
    
      }
  break
  case 'Chimie':
    menu[1].className = 'active'
    Sections[1].className = 'Section-active'
    document.title = 'Page-Cours'
      if (sectionDivForm.innerHTML === 'Pending...((()))') {
        sectionDivForm.innerHTML = ''
        sectionDivForm.appendChild(ToutForm[2])
    
      }
  break
  case 'Science sociale':
    menu[1].className = 'active'
    Sections[1].className = 'Section-active'
    document.title = 'Page-Cours'
    if (sectionDivForm.innerHTML === 'Pending...((()))') {
      sectionDivForm.innerHTML = ''
      sectionDivForm.appendChild(ToutForm[3])
    
    }
    break
  case 'Anglais':
    menu[1].className = 'active'
    Sections[1].className = 'Section-active'
    document.title = 'Page-Cours'
    if (sectionDivForm.innerHTML === 'Pending...((()))') {
      sectionDivForm.innerHTML = ''
      sectionDivForm.appendChild(ToutForm[4])
    
    }
   break
  case 'Espagnol':
    menu[1].className = 'active'
    Sections[1].className = 'Section-active'
    document.title = 'Page-Cours'
    if (sectionDivForm.innerHTML === 'Pending...((()))') {
      sectionDivForm.innerHTML = ''
      sectionDivForm.appendChild(ToutForm[5])
    
    }
   break
  case 'Créole':
    menu[1].className = 'active'
    Sections[1].className = 'Section-active'
    document.title = 'Page-Cours'
    if (sectionDivForm.innerHTML === 'Pending...((()))') {
      sectionDivForm.innerHTML = ''
      sectionDivForm.appendChild(ToutForm[6])
    
    }
    break
  case 'Français':
  menu[1].className = 'active'
  Sections[1].className = 'Section-active'
  document.title = 'Page-Cours'
  if (sectionDivForm.innerHTML === 'Pending...((()))') {
    sectionDivForm.innerHTML = ''
    sectionDivForm.appendChild(ToutForm[7])
  
  }
  break
  default:
  
  document.title = 'Page-Cours'
  if (sectionDivForm.innerHTML === 'Pending...((()))') {
    sectionDivForm.innerHTML = ''
  sectionDivForm.innerHTML=textPageCour
  
  }
}

    
    
    
  
  
    
    
  }
  
  
//FIN DE LA FONCFION POPSTATE()
}

  
  
  
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  
 }
  
  
  
})




  
  
  