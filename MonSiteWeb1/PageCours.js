/*import {CreerDataList} from './Modules/creer-datalist.js';*/


/* RECUPERET LES REFERENCES PRINCIPAL */
const h5=document.createElement('h5')
h5.innerHTML='Les Matière proposées'
const div=document.createElement('div')
div.appendChild(h5)
div.id='lesCours'
const ol=document.createElement('ol')
ol.style.paddingLeft='5px'
const MainSection=document.querySelector('main section')
const h3=document.createElement('h3')
h3.innerHTML='Cours de Mathematiques'
MainSection.classList.add('main-section')
MainSection.appendChild(h3)


//=====TABLEAU DES MATIÈRES
const Matiere=['Mathematiques', 'Physiques', 'Chimie', 'Science sociale', 'Anglais', 'Espagnol', 'Créole', 'Français']
//======TABLEAU DES COULEURS

const couleurs=['pink', 'yellow', 'cadetblue', 'skyblue', 'green', 'greenyellow', 'orange', 'lightcoral']

for (let a = 0; a < couleurs.length; a++) {
 let toutCouleurs = couleurs[a]
  
  
  
  desiner(toutCouleurs, a)

}



function desiner(Couleurs, indice){

  let li = document.createElement('li')
  let aCours=document.createElement('a')
  aCours.href='#'
  aCours.style.display='block'
  aCours.style.padding='4px'
  aCours.style.margin='4px'
  aCours.style.width='130px'
  aCours.style.borderRadius='4px'
  aCours.style.textDecoration='none'
  li.style.width='130px'
  li.style.padding='0px'
  li.style.listStylePosition='inside'
  aCours.style.backgroundColor = Couleurs
  aCours.appendChild(li)
for(let i=0;i<Matiere.length;i++){
  
 /* aCours.href=`/MonSiteWeb2/PageCours.html?matire=${Matiere[indice]}`*/
  
  li.innerHTML = Matiere[indice]
  ol.appendChild(aCours)
  div.appendChild(ol)

  
   }
  //console.log(aCours)
  
  MainSection.appendChild(div)
  
}


/* RECUPERER LES FORMULAIRES AVEC LA FONCTION RecupererPageForm()
%%%%%%%FONCTION NON IMBRIQUÉE%%%%%%%%%!*/


function RecupererPageForm(url) {
      fetch(url).then(function(reponse) {
        if (reponse.ok) {
          return reponse.text()
        } else {
          throw new Error(`erreur:${url} , ${reponse.status}`)
        }
    
      }).then(function(dataHTML) {
        let pars = new DOMParser()
        let docForm = pars.parseFromString(dataHTML, 'text/html')
      sortiDataForm(docForm)
      }).catch(function(err) {
        let para = document.createElement('p')
        para.innerHTML = `${err.message}`
        //sectionDivForm.innerHTML = ''
        //sectionDivForm.appendChild(para)
    
      })
    
    }

  RecupererPageForm('Formulaire.html');
  
  
  
  
  
/*%%%%%%FONCTION NON IMBRIQUÉE MAIS CONTENANT D'AUTRES FONCTIONS%%%%%%%% */
  function sortiDataForm(DataFormulaire){
  let conteneurPourChaqueForm=document.createElement('div')
  conteneurPourChaqueForm.innerHTML='pending(((((())))))'
  conteneurPourChaqueForm.classList.add('boite-form')
 let ToutForm= DataFormulaire.querySelectorAll('.tout-form div')
 
 
 
 /* RECUPERER LES LIENS DES ANCLES ET AJOUTER À CHACUN UN EVENEMENT CLICK
 POUR INJECTER LES FORMULAIRES DANS LA PAGE COURS*/
 
 
 let ancreListeCours=document.querySelectorAll('section div a')
// console.log(ancreListeCours)
 
 for( j=0;j<ancreListeCours.length;j++){
 let chaqueAncre=ancreListeCours[j]; sortirChaqueCours(chaqueAncre, j)
 }
 
 /* ((())) PREMIERE FONCFION INBRIQUÉE DANS FONCTION sortirDataForm() ((()))*/
 function sortirChaqueCours(eachAncre, Ind){
  
  eachAncre.addEventListener('click', cliquerSurCours)
  
  /* ((())) DEUXIEME FONCTION IMBRIQUÉE
  DANS FONCFION sortirDataForm()  ((()))*/
 function cliquerSurCours(ev){
   ev.preventDefault()
 //  console.log(ev.target, 'me voici')
/* if(conteneurPourChaqueForm.innerHTML){
  conteneurPourChaqueForm.innerHTML=''
 }
 conteneurPourChaqueForm.appendChild(ToutForm[Ind])
 //console.log(formMath[Ind])
 MainSection.appendChild(conteneurPourChaqueForm)*/
 
//=== ajouter un parametre queryString dans url avec la methode pushState===
 let TexteDansLi=ev.target.innerText
 let State={matiere:TexteDansLi, Ind}
 //console.log(State)
 //console.log(TexteDansLi)
// console.log(TexteDansLi)
/* aCours.href=`/MonSiteWeb2/PageCours.html?matire=${Matiere[indice]}`*/
 history.pushState(State, TexteDansLi, `/MonSiteWeb2/PageCours.html?matiere=${TexteDansLi}`)
 document.title=TexteDansLi
 
 fonctionCallback(ToutForm, Ind, TexteDansLi)
  
    }
 
 
  
  
  
   }
  
   
  
  

 //((((((((((((((((((()))))))))))))))))))
 window.addEventListener('popstate', BackForwardFonction)
 
 function BackForwardFonction() {
  // let LesMatiere = history.state.matiere;
   
   // console.log(location.search.split('?matire='))
    let tabMat=location.search
    let Parameters=new URLSearchParams(tabMat)
   let nameMatiere=Parameters.get('matiere')
   //console.log(nameMatiere)

    
   document.title=nameMatiere;
    //console.log(LesMatiere)
   switch (nameMatiere) {
     case 'Mathematiques':
      if (conteneurPourChaqueForm.innerHTML) {
  conteneurPourChaqueForm.innerHTML = ''
      }
      conteneurPourChaqueForm.appendChild(ToutForm[0])
      //console.log(formMath[Ind])
      MainSection.appendChild(conteneurPourChaqueForm)
    break
    case 'Physiques':
      if (conteneurPourChaqueForm.innerHTML) {
   conteneurPourChaqueForm.innerHTML = ''
      }
      conteneurPourChaqueForm.appendChild(ToutForm[1])
      //console.log(formMath[Ind])
      MainSection.appendChild(conteneurPourChaqueForm)
    break
    case 'Chimie':
    if (conteneurPourChaqueForm.innerHTML) {
  conteneurPourChaqueForm.innerHTML = ''
    }
    conteneurPourChaqueForm.appendChild(ToutForm[2])
    //console.log(formMath[Ind])
    MainSection.appendChild(conteneurPourChaqueForm)
  break
  case 'Science sociale':
  if (conteneurPourChaqueForm.innerHTML) {
  conteneurPourChaqueForm.innerHTML = ''
  }
  conteneurPourChaqueForm.appendChild(ToutForm[3])
  //console.log(formMath[Ind])
  MainSection.appendChild(conteneurPourChaqueForm)
  case 'Anglais':
  if (conteneurPourChaqueForm.innerHTML) {
  conteneurPourChaqueForm.innerHTML = ''
  }
  conteneurPourChaqueForm.appendChild(ToutForm[4])
  //console.log(formMath[Ind])
  MainSection.appendChild(conteneurPourChaqueForm)
  break
  case 'Espagnol':
    if (conteneurPourChaqueForm.innerHTML) {
      conteneurPourChaqueForm.innerHTML = ''
    }
    conteneurPourChaqueForm.appendChild(ToutForm[5])
    //console.log(formMath[Ind])
    MainSection.appendChild(conteneurPourChaqueForm)
    break
    case 'Créole':
    if (conteneurPourChaqueForm.innerHTML) {
    conteneurPourChaqueForm.innerHTML = ''
    }
    conteneurPourChaqueForm.appendChild(ToutForm[6])
    //console.log(formMath[Ind])
    MainSection.appendChild(conteneurPourChaqueForm)
   break
   case 'Français':
    if (conteneurPourChaqueForm.innerHTML) {
      conteneurPourChaqueForm.innerHTML = ''
    }
    conteneurPourChaqueForm.appendChild(ToutForm[7])
    //console.log(formMath[Ind])
    MainSection.appendChild(conteneurPourChaqueForm)
    break
    default:
    //if( chemin1==='PageCours.html')
   conteneurPourChaqueForm.innerHTML = ''
  //lesAncres[1].className='activer-onglet'
   }
  
   
   
 }
 //((((((((((((((((((()))))))))))))))))))

  /*@@@@@@@@@EMPLACEMENT DE LA FONCTION CONSTRUCTEUR QUI CREE LES DATALIST POUR CHOISIR LES NIVEAUX ET BRANCHES@@@@@@@@@@@@@*/
function fonctionCallback(touform, ind, texte){
//  console.log('Formulaire: ', touform[ind])
  if (conteneurPourChaqueForm.innerHTML) {
    conteneurPourChaqueForm.innerHTML = ''
  }
  conteneurPourChaqueForm.appendChild(touform[ind])
  //console.log(formMath[Ind])
  MainSection.appendChild(conteneurPourChaqueForm)
  
  switch (texte){
    case 'Mathematiques':
      import('./Modules/Mathematique.js').then(function(moduleMath){
       // console.log(moduleMath.recupererMath())
        return moduleMath.recupererMath()
      }).then(function(dataCN){
        //console.log(data[3])
        let MathNSIV=dataCN[0].mathematiqueTerminale
  let MathNS3=dataCN[1].MathematiqueRheto
  let MathNS1=dataCN[2].MathematiqueNS1
  let classeNiveau=dataCN[7].niveau
  let MathNS2=dataCN[3].MathematiqueNS2
  let Math8=dataCN[4].Mathematique
 // console.log(classeNiveau)
 
 


import('./Modules/creer-dataList.js').then(function(Module){
  
  
  let datalistRhe=new Module.CreerDataList('datalist', 'option', MathNS3, 'NSIII')
let datalistNS1=new Module.CreerDataList('datalist', 'option',MathNS1, 'NSI')
let datalistNS4=new Module.CreerDataList('datalist', 'option',MathNSIV, 'NSIV')
let lesNiveaux=new Module.CreerDataList('datalist', 'option', classeNiveau, 'niveau')
let datalistNS2=new Module.CreerDataList('datalist', 'option',MathNS2, 'NSII')
//let datalistMath8=new CreerDataList('datalist', 'option',Math8, '8ème')
let datalistMath8=new Module.CreerDataList('datalist', 'option',Math8, '9ème')
//let datalistMath8=new CreerDataList('datalist', 'option',Math8, '7ème')
let tousLesNiveaux=lesNiveaux.createTag()
let coursRheto=datalistRhe.createTag()
let coursNS1=datalistNS1.createTag()
let coursNS4=datalistNS4.createTag()
let coursNS2=datalistNS2.createTag()
//let cours8=datalistMath8.createTag()
let cours9=datalistMath8.createTag()
//let cours7=datalistMath8.createTag()
let idLesNiveaux=lesNiveaux.ID


let inputNiveaux=document.querySelector('.form-math .inputNiveau')
inputNiveaux.setAttribute('list', idLesNiveaux)
let DIVdataliste=document.querySelector('div.form-math')
//console.log(DIVdataliste)
DIVdataliste.appendChild(tousLesNiveaux)
DIVdataliste.appendChild(coursRheto)
DIVdataliste.appendChild(coursNS1)
DIVdataliste.appendChild(coursNS4)
DIVdataliste.appendChild(coursNS2)
//DIVdataliste.appendChild(cours7)
//DIVdataliste.appendChild(cours8)
DIVdataliste.appendChild(cours9)

inputNiveaux.addEventListener('change',  changerPourCours)

function changerPourCours(ev){
  let choixNiveau=ev.target.value
  let choixBranche=document.querySelector('.matiere')
  let Bouton1=touform[0].querySelector('div .bouton1')
  choixBranche.setAttribute('list', choixNiveau)
  
  choixBranche.focus()
  choixBranche.value=''

  
  /*declarer une fonction onchange à l'interieur de la fonction onchange de inputNiveau*/
  choixBranche.onchange=function(event){
  let valeurChoixBranche=event.target.value
   // console.log(valeurChoixBranche, choixNiveau, Bouton1)
 // ChoixBranchesNiveaux(valeurInputNiveau, valeurChoixBranche, Bouton1)
  
  }
  
  
  
//fin de la fonction changerPourCours()
}

})


      })
    break
    case 'Physiques':
    import('./Modules/Physique.js').then(function(dataPhysique){
      //  console.log(dataPhysique)
        return dataPhysique.recupererPhysique()
      }).then(function(modulePhysique){
    let Physique9=modulePhysique[0].physique9
    let PhysiqueNS1=modulePhysique[1].physiqueNSI
    let PhysiqueNS2=modulePhysique[2].physiqueNSII
    let PhysiqueNS3=modulePhysique[3].physiqueNSIII
    let PhysiqueNS4=modulePhysique[4].physiqueNSIV
    let niveauPhysique=modulePhysique[5].Niveaux
       // console.log(niveauPhysique)
        
  //GENERER LES DATALIST
  import('./Modules/creer-dataList.js').then(function(Module) {
  
  
  let datalist9 = new Module.CreerDataList('datalist', 'option', Physique9, '9eme')
  let datalisteNS1 = new Module.CreerDataList('datalist', 'option', PhysiqueNS1, 'NSI')
  let datalisteNS4 = new Module.CreerDataList('datalist', 'option', PhysiqueNS4, 'NSIV')
  let NIVEAUphysique = new Module.CreerDataList('datalist', 'option', niveauPhysique, 'niveau')
  let datalisteNS2 = new Module.CreerDataList('datalist', 'option', PhysiqueNS2, 'NSII')
  let datalisteNS3=new Module.CreerDataList('datalist', 'option',PhysiqueNS3, 'NSIII' )

  let levelPhysique = NIVEAUphysique.createTag()
  let RhetoCours = datalisteNS3.createTag()
  let NS1Cours = datalisteNS1.createTag()
  let NS4Cours = datalisteNS4.createTag()
  let NS2Cours = datalisteNS2.createTag()
  let COURS9 = datalist9.createTag()
  let IDNiveauDatalist = NIVEAUphysique.ID
  //console.log(levelPhysique)
  
//Maintenant on va gerer les input
  
  let inputNiveauPhysique=document.querySelector('.form-physique .niveau-physique');
  let inputChapitrePhysique=document.querySelector('.form-physique .chapitre-physique')
 // console.log(inputChapitrePhysique)
  inputNiveauPhysique.setAttribute('list', IDNiveauDatalist);
  let DIVformPhysique=document.querySelector('div.form-physique');
  DIVformPhysique.append(levelPhysique, RhetoCours, NS1Cours, NS2Cours, NS4Cours, COURS9);
  
// La fonction qui va gerer les input et datalist
inputNiveauPhysique.addEventListener('change', changerDatalist)

function changerDatalist(ev){
  let valeurInputNiveau=ev.target.value;
  let input=ev.target;
  inputChapitrePhysique.setAttribute('list', valeurInputNiveau);
  inputChapitrePhysique.value='';
  inputChapitrePhysique.focus();
 //console.log(valeurInputNiveau);
 //console.log(input);
}

  //console.log(inputPhysique.value)
  
      })

  
  
  })
  break
  case 'Chimie':
    
    console.log(`${texte}`)
  //===============Fin de Swith
}
  
 
 

  }



/*÷÷÷÷÷÷fin de la fonction sortiDataForma()÷÷÷÷÷÷ */
}