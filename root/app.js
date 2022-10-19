import {EnteteDePage } from './components/entete-composant/entete.js'
import {CorpsDePage } from './components/corp-de-page/corp-de-page.js'
import {PiedDePage} from './components/footer-component/pied-de-page.js'
import {PageAccueil} from './components/onglet-components/accueil-component/accueil.js'
import {AsideLateral} from './components/lateral-component/lateral.js'
import {PageCours} from './components/onglet-components/cours-component/cours.js';
import {PageMedia} from './components/onglet-components/media-component/media.js';
import {PageStaff} from './components/onglet-components/staff-component/staff.js'
customElements.define('entete-de-page', EnteteDePage);
//customElements.define('corp-de-page', CorpsDePage);
customElements.define('pied-de-page', PiedDePage);
customElements.define('page-accueil', PageAccueil);
customElements.define('aside-lateral', AsideLateral)
customElements.define('page-cours', PageCours);
customElements.define('page-media', PageMedia);
customElements.define('page-staff', PageStaff);








import {routes} from './route.js'

const dataHtml=routes[0].fetchData();
dataHtml.then(function(pageHtml){
  //const body=pageHtml.querySelector('body').children;
  
    console.log(pageHtml);
    //lesEnfant(body)
})
//console.log(dataHtml);
function lesEnfant(enfant){
 // console.log(enfant);
  for(let child of enfant){
    console.log(child);
  }
}

const divApp=document.querySelector('#app');
//console.log(divApp);
  function loadPage(){
    
    
    
    
  
  // RECUPPERER  LES ONGLETS ET LES AJOUTER UN CLICK
  // première action de départ=======(2)
const recupererAncher=()=> {
  let ancreOnglet=document.querySelector('#app entete-de-page');
  ancreOnglet=ancreOnglet.shadowRoot.querySelectorAll('a');
  //console.log(ancreOnglet);
  return ancreOnglet;
}
//recupererAncher();

//dexième action de départ======(1)
const ajouterClickSurAncreOnglet=()=> {
  let ancreOngletRetouner=recupererAncher();
  
  ancreOngletRetouner.forEach((ancreRetourner, index)=> {
    ancreRetourner.addEventListener('click', ancreContentAndNewUrl)
    
  })
  
}
ajouterClickSurAncreOnglet()

//la troisième action de départ====
function activerOngletCliquer(texteAncre){
  let ancreOngletRetouner=recupererAncher()
  ancreOngletRetouner.forEach(onglet=> {
    onglet.className=''
    switch (texteAncre) {
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
      default:
      ancreOngletRetouner[0].className='activer-onglet';
    }

    
  })
  
 // currentTag.className='activer-onglet'
//console.log(texteAncre);
  
  
}


//troisième action de départ======(3)
function ancreContentAndNewUrl(e) {
  e.preventDefault();
  
  //console.log(ancreOngletRetouner);
  //console.log(e.target);
  let targetCliquer=e.currentTarget
  let ancreHref=e.target.href
  let texte=e.target.textContent
 

// activerOngletCliquer(targetCliquer)
 activerOngletCliquer(texte)
  pushStateNewUrl(ancreHref,texte)
  
 // return ancherTextContent;
  //return htmlAncherElement;
  return targetCliquer
}

// quatrième action de départ=====(4)
function pushStateNewUrl(UrlAncher,nomPage){
  window.history.pushState({nomPage}, nomPage, UrlAncher );
  let stateAndUrl={UrlAncher, nomPage, }
// console.log(nomPage)
 // console.log(history.state)
  //console.log(locationPathName())
  //activerOngletCliquer(nomPage);
  templateAndUrl(stateAndUrl)
}

//==== Fin popState(3)
const locationPathName = () => {
 // console.log(history.state)
  //console.log(history.state.nomPage);
  if (history.state!==null) {
    return history.state.nomPage
  } else {
    return history.state
  }
  //return history.state.nomPage;


}
//sixième action de départ====(6-2)
const templatePageName=(object)=> {
 let nomPage=locationPathName()
//console.log(nomPage);
  if (object.nomPage===nomPage) {
   object.render()
    //console.log(object, 'les routes');
    
  }else if(nomPage===null){
    routes[0].render()
    //console.log(routes[index])
  }
  
}
// cinquième action de dépaet=== (5-1)
function  templateAndUrl(etatEtUrl) {
  
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


window.addEventListener('popstate', templateAndUrl)


//FIN FONCTION LOADPAGE()
}



window.addEventListener('load', loadPage)










