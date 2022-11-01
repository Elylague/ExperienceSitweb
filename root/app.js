
import {routes} from './route.js'
import {EnteteDePage } from './components/entete-composant/entete.js'
import {CorpsDePage } from './components/corp-de-page/corp-de-page.js'
import {PiedDePage} from './components/footer-component/pied-de-page.js'
import {PageAccueil} from './components/onglet-components/accueil-component/accueil.js'
import {AsideLateral} from './components/lateral-component/lateral.js'
import {ListeCours} from './components/onglet-components/cours-component/cours.js';
import {PageMedia} from './components/onglet-components/media-component/media.js';
import {PageStaff} from './components/onglet-components/staff-component/staff.js'
import {FormCours} from './components/formulaire-cours/form-cours.js';
customElements.define('entete-de-page', EnteteDePage);
customElements.define('corp-de-page', CorpsDePage);
customElements.define('pied-de-page', PiedDePage);
customElements.define('page-accueil', PageAccueil);
customElements.define('aside-lateral', AsideLateral)
//customElements.define('page-cours', PageCours);
customElements.define('page-media', PageMedia);
customElements.define('page-staff', PageStaff);
customElements.define('form-cours', FormCours);
customElements.define('liste-cours', ListeCours)

//const corpsDePage=document.querySelector('#corps-de-page');

//import {routes} from './route.js'


const divApp=document.querySelector('#app');
let sectionPageCours=document.querySelector('main .section-page-accueil')

 //console.log(ancrePageCours);



    const locationPathName = () => {
      // console.log(history.state)
      //console.log(history.state.nomPage);
      
      const exUrl = window.location.href
      //console.log(Url);
      const exNewUrl = new URL(exUrl)
      const params = exNewUrl.searchParams.has('cours');
      if (params) {
        let lesCours = '';
        return lesCours = exNewUrl.searchParams.get('cours');
      
      } else {
        let lesPages = '';
        return lesPages = exNewUrl.searchParams.get('page');
      
      }
      

    
    }
    
    function compareStateAndParams(){
      
      const exUrl = window.location.href
      //console.log(Url);
      const exNewUrl = new URL(exUrl)
      const params= exNewUrl.searchParams.has('cours');
      if (params){
      let lesCours='';
        return lesCours=exNewUrl.searchParams.get('cours');
        
      }else{
        let lesPages='';
        return lesPages=exNewUrl.searchParams.get('page');
        
      }
      
    }
    
  
  // RECUPPERER  LES ONGLETS ET LES AJOUTER UN CLICK
  // première action de départ=======(2)
const recupererAncher=()=> {
  let ancreOnglet=document.querySelector('#app entete-de-page');
  ancreOnglet=ancreOnglet.shadowRoot.querySelectorAll('a');
  
  return ancreOnglet;
}


//dexième action de départ======(1)
const ajouterClickSurAncreOnglet=()=> {
  let ancreOngletRetouner=recupererAncher();
  
  ancreOngletRetouner.forEach((ancreRetourner, index)=> {
    ancreRetourner.addEventListener('click', ancreContentAndNewUrl)
    
  })
  
}
ajouterClickSurAncreOnglet()



//la troisième action de départ====
function activerOngletCliquer(){
  let ancreOngletRetouner=recupererAncher()
  let valueParams=compareStateAndParams();
  //console.log(params, 'dans activerOngletCliquer');
  ancreOngletRetouner.forEach(onglet=> {
    onglet.className=''
    switch (valueParams) {
      case "Accueil":
      ancreOngletRetouner[0].className='activer-onglet';
      break;
      case "Cours":
      ancreOngletRetouner[1].className='activer-onglet';
      break;
      case "Media":
      ancreOngletRetouner[2].className='activer-onglet';
      break;
      case "Staff":
      ancreOngletRetouner[3].className='activer-onglet';
      break;
      case "mathematiques":
      ancreOngletRetouner[1].className = 'activer-onglet';
      break;
      case "Physiques":
      ancreOngletRetouner[1].className = 'activer-onglet';
      break;
      case "Chimie":
      ancreOngletRetouner[1].className = 'activer-onglet';
      break;
      case "science sociale":
      ancreOngletRetouner[1].className = 'activer-onglet';
      break;
      case "anglais":
      ancreOngletRetouner[1].className = 'activer-onglet';
      break;
      case "espagnol":
      ancreOngletRetouner[1].className = 'activer-onglet';
      break;
      case "créole":
      ancreOngletRetouner[1].className = 'activer-onglet';
      break;
      case "français":
      ancreOngletRetouner[1].className = 'activer-onglet';
      break;
      default:
      ancreOngletRetouner[0].className='activer-onglet';
    }

    
  })
  
}


//troisième action de départ======(3)
function ancreContentAndNewUrl(e) {
  e.preventDefault();
  

  let targetCliquer=e.currentTarget
  let ancreHref=e.target.href
  let texte=e.target.textContent
 


 activerOngletCliquer()
  pushStateNewUrl(ancreHref)
  
  

 // return targetCliquer
}

// quatrième action de départ=====(4)
function pushStateNewUrl(UrlAncher){
  let nomPage=locationPathName();
  window.history.pushState({nomPage}, nomPage, UrlAncher );
 
 templateAndUrl()
}

//==== Fin popState(3)

//sixième action de départ====(6-2)
const templatePageName=(object)=> {
 let nomPage=locationPathName()
  //console.log(nomPage);
  if (object.nomPage===nomPage) {
   object.render()

  }else if(nomPage===null){
   routes[0].render();

  }
  
}
// cinquième action de dépaet=== (5-1)
function  templateAndUrl() {
  
  routes.find(templatePageName)
callActiverOngletCliquer()
}


function callActiverOngletCliquer(){
  let texteActiver = locationPathName()
  
  if (texteActiver) {
    activerOngletCliquer(texteActiver)
  }else{
  activerOngletCliquer('null')
}
}


// liste des cours indépendants dans la page des cours


window.addEventListener('popstate', templateAndUrl)


function loadPage(){
  templateAndUrl()
}

window.addEventListener('load', loadPage)



//console.log(divApp);






