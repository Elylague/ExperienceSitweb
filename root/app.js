
import {createAndReturnTitreCours,WhenPageRefresh,whenGetBackFromOnglet,routes} from './components/onglet-components/cours-component/route.js'
import {EnteteDePage } from './components/entete-composant/entete.js'
//import {CorpsDePage } from './components/corp-de-page/corp-de-page.js'
import {PiedDePage} from './components/footer-component/pied-de-page.js'
import {PageAccueil} from './components/onglet-components/accueil-component/accueil.js'
import {AsideLateral} from './components/lateral-component/lateral.js'
import {ListeCours} from './components/onglet-components/cours-component/cours.js';
import {PageMedia} from './components/onglet-components/media-component/media.js';
import {PageStaff} from './components/onglet-components/staff-component/staff.js'
import {FormCours} from './components/formulaire-cours/form-cours.js';
customElements.define('entete-de-page', EnteteDePage);
//customElements.define('corp-de-page', CorpsDePage);
customElements.define('pied-de-page', PiedDePage);
customElements.define('page-accueil', PageAccueil);
customElements.define('aside-lateral', AsideLateral)
//customElements.define('page-cours', PageCours);
customElements.define('page-media', PageMedia);
customElements.define('page-staff', PageStaff);
customElements.define('form-cours', FormCours);
customElements.define('liste-cours', ListeCours)
const divApp=document.querySelector('#app');

function headMainFoot(){
  const entetePage=document.createElement('entete-de-page');
  const mainPrincipal=document.createElement('main');
  const asideListeDesCours=document.createElement('aside');
  const barreLateral=document.createElement('aside');
  const sectionDePageAccueil=document.createElement('section');
  const piedDepage=document.createElement('pied-de-page');
  // create children costumElements
  const pageDeAccueil=document.createElement('page-accueil');
  const customLateral=document.createElement('aside-lateral');
  asideListeDesCours.className='cacher-aside';
  // add class and id in elements
mainPrincipal.id='corps-de-page';
mainPrincipal.classList.add('corps-de-page');
sectionDePageAccueil.classList.add('section-page-accueil');
barreLateral.classList.add('aside');
// appendChild in corresponding elements
//const textNodeAside=document.createTextNode('je suis le aside qui est presque vide')
sectionDePageAccueil.appendChild(pageDeAccueil);
barreLateral.appendChild(customLateral);
//barreLateral.appendChild(textNodeAside);
mainPrincipal.append(asideListeDesCours,sectionDePageAccueil, barreLateral);
divApp.append(entetePage, mainPrincipal, piedDepage);
}
headMainFoot();



let sectionPageCours=document.querySelector('main .section-page-accueil')


/* CETTE FONCTION ME RETOURNE TOUS LAS PARAMETRES
DE L'URL POUR TOUTES LES PAGES. ELLE EST APPELÉE PAR:
activerOngletCliquer()-pushStateNewUrl()
templatePageName()-callActiverOngletCliquer()*/

    const getUrlParameters = () => {
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
    
    

  /* CETTE FONCTION NE FAIT QUE RETOURNER  LES ANCRES DANS L'ÉLÉMENT PERSONALISÉ entete-de-page
  ELLE EST APPELÉE PAR LA FONCTION ajouterClickSurAncreOnglet()*/
  // première action de départ=======(2)
const recupererAncher=()=> {
  let ancreOnglet=document.querySelector('#app entete-de-page');
  ancreOnglet=ancreOnglet.shadowRoot.querySelectorAll('a');
  
  return ancreOnglet;
}

/*CETTE FONCTION NE FAIT QU'AJOUTER DES CLICKS
SUR LES ONGLETS DU MENU PRINCIPALE DE LA PAGE.
ELLE EST APPELÉE GLOBALEMENT PAR LE NAVIGATEUR.
ELLE APPELLE LA FONCTION recupererAncher()*/
//dexième action de départ======(1)
const ajouterClickSurAncreOnglet=()=> {
  let ancreOngletRetouner=recupererAncher();
  
  ancreOngletRetouner.forEach((ancreRetourner, index)=> {
    ancreRetourner.addEventListener('click', getAttributeHrefInAncher)
    
  })
  
}
ajouterClickSurAncreOnglet()


/* CETTE FONCTION NE FAIT QUE METTRE UN FOCUS 
SUR L'ONGLET CLIQUER POUR INDIQUER QU'ELLE EST CLIQUÉE */
//la troisième action de départ====
function activerOngletCliquer(){
  let ancreOngletRetouner=recupererAncher()
  let valueParams=getUrlParameters()//compareStateAndParams();
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

/* LA FONCTION À APPELER QUI EST LE GESTIONAIRE D'ÉVÈNENMENT
QUAND ON CLIQUE SUR LE MENU DA LA PAGE. CE GESTIONNAIRE D'ÉVÈNEMENT
APPELLE LA FONCTION activerOngletCliquer()
 ET LA FONCTION pushStateNewUrl()*/
//troisième action de départ======(3)
function getAttributeHrefInAncher(e) {
  e.preventDefault();
  let ancreHref=e.target.href

 activerOngletCliquer()
  pushStateNewUrl(ancreHref)
  
}

/* CETTE FONCTION NE FAIT QUE METTRE À JOUR
L'URL POUR LA PAGE CORRESPONDANTE 
ELLE EST APPELÉE PAR LE GESTIONNAIRE D'ÉVÈNEMENT
getAttributeHrefInAncher() ET ELLE
APPELLE LA FONCTION templateAndUrl() */
// quatrième action de départ=====(4)
function pushStateNewUrl(UrlAncher){
  let nomPage=getUrlParameters();
  //console.log(nomPage);
  //console.log(UrlAncher);
  window.history.pushState({nomPage}, '', UrlAncher );
  document.title=nomPage;
 // console.log(history.state);
 templateAndUrl()
}

//==== Fin popState(3)
/* COMPARER LES VALEURS DES PARAMETRES 
POUR AFFCHER LA PAGE CORRESPONDANT*/
//sixième action de départ====(6-2)
const templatePageName=(object)=> {
 // console.log('when the page had loaded');
 let nomPage=getUrlParameters();
  //console.log(nomPage);
  if (object.nomPage===nomPage) {
   object.render()

  }else if(nomPage===null){
   routes[0].render();

  }
  
}

/* CETTE FONCTION NE FAIT QUE AFFICHER
LA PAGE EN FONCTION DE L'URL ET ELLE 
APPELLE LA FONCTION callActiverOnglet().
ELLE EST APPELÉE PAR LA FONCTION loadPage()
, LA FONCTION pushStateNewUrl() ET L'ÉVÈNEMENT popstate*/
// cinquième action de dépaet=== (5-1)
// LoadPage I
function  templateAndUrl() {
  
  routes.find(templatePageName)
callActiverOngletCliquer()
}


function callActiverOngletCliquer(){
  let texteActiver = getUrlParameters();
  
  if (texteActiver) {
    activerOngletCliquer(texteActiver)
  }else{
  activerOngletCliquer('null')
}
}


// liste des cours indépendants dans la page des cours


window.addEventListener('popstate', templateAndUrl)

// loadPage I
function loadPage(){
  templateAndUrl()
 
}

// QUAND LA PAGE EST index.html CHARGÉ POUR LA PREMIÈRE FOIS
// QUAND LA PAGE EST RAFRAICHIT

window.addEventListener('load', loadPage)



//console.log(divApp);






