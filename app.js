import {EnteteDePage } from './components/entete-composant/entete.js'
import {CorpsDePage } from './components/corp-de-page/corp-de-page.js'
import {PiedDePage} from './components/footer-component/pied-de-page.js'
import {PageAccueil} from './components/onglet-components/accueil-component/accueil.js'
import {AsideLateral} from './components/lateral-component/lateral.js'
import {PageCours} from './components/onglet-components/cours-component/cours.js';
import {PageMedia} from './components/onglet-components/media-component/media.js';
import {PageStaff} from './components/onglet-components/staff-component/staff.js'
customElements.define('entete-de-page', EnteteDePage);
customElements.define('corp-de-page', CorpsDePage);
customElements.define('pied-de-page', PiedDePage);
customElements.define('page-accueil', PageAccueil);
customElements.define('aside-lateral', AsideLateral)
customElements.define('page-cours', PageCours);
customElements.define('page-media', PageMedia);
customElements.define('page-staff', PageStaff);








import {routes} from './route.js'

function squeletteDePage(){
  
  
  /*let url=location.href
 // console.log(url);
  url=url.replace('index.html', 'Accueil');
  //console.log(url);
   window.history.replaceState({url}, '', url);
   
  console.log(history.state.url);*/
   
  
  const createTeteCorpsPied = () => {
    const enteteDepage = document.createElement('entete-de-page');
    enteteDepage.shadowRoot.querySelector('nav');
    // console.log(enteteDepage);
    let corpDepage = document.createElement('corp-de-page');
    const piedDePage = document.createElement('pied-de-page');
    //const pageAccueil=document.createElement('page-accueil');
    // const lateral=document.createElement('aside-lateral')
    // corpDepage.append(pageAccueil, lateral)
    const divApp = document.getElementById('app');
  
    divApp.append(enteteDepage, corpDepage, piedDePage);
    sectionEtAside(corpDepage)
  }
  createTeteCorpsPied()
  
  
  
  
  
  function sectionEtAside(corpsPage) {
    const sectionAccueil = document.createElement('section');
    const customAccueil=document.createElement('page-accueil')
    sectionAccueil.setAttribute('slot', 'page-accueil');
    sectionAccueil.setAttribute('class', 'section');
    sectionAccueil.innerHTML='';
    sectionAccueil.appendChild(customAccueil);
    const aside = document.createElement('aside');
    aside.setAttribute('slot', 'lateral')
    const asideCustom = document.createElement('aside-lateral')
    aside.appendChild(asideCustom);
    aside.setAttribute('class', 'aside');
    corpsPage.append(sectionAccueil, aside);
    //console.log(corpsPage);
  }
  //retournerOnglet()
  
  const recuppererAncreMenu=()=> {
  const ancreMenu=document.querySelector('entete-de-page');
  const nav=ancreMenu.shadowRoot.querySelectorAll('nav div a');
  
  ajouterClickSurAncre(nav)
}
recuppererAncreMenu();


  //retournerOnglet()
  
  
  // je vais mettre les routes ici
  //window.history.pushState({}, '', url)*/
}

function parDefaut(){
  let url=location.href
 // console.log(url);
  url=url.replace('index.html', 'Accueil');
  //console.log(url);
   window.history.replaceState({url}, '', url);
   
  console.log(history.state.url);
   squeletteDePage()
}









/*

const recuppererAncreMenu=()=> {
  const ancreMenu=document.querySelector('entete-de-page');
  const nav=ancreMenu.shadowRoot.querySelectorAll('nav div a');
  
  ajouterClickSurAncre(nav)
}
recuppererAncreMenu();

*/


 function ajouterClickSurAncre(ancher){
  ancher.forEach((ancre)=> {
    ancre.addEventListener('click', pushStateHref);
    
  })
  //console.log(ancher);
}

function pushStateHref(event) {
  event.preventDefault();
  const urlAbsolu = event.target.href;
  //console.log(urlAbsolu);
  
 // console.log(urlAbsolu.indexOf('page'));
  const index=urlAbsolu.indexOf('page');
 // console.log(urlAbsolu.slice(index));
  let nomDePage=urlAbsolu.slice(index);
//  console.log(nomDePage.replace('page',''));
   nomDePage=nomDePage.replace('page', '');
   nomDePage=nomDePage.replace('.html', '');
   history.pushState({nomDePage}, `${nomDePage}`, nomDePage);
   retournerOnglet()
  //console.log(nomDePage);
  
  

}



function nomDePageEtTemplate(objet){
  if(objet.nomPage===history.state.nomDePage){
  objet.render();
  }
}




function retournerOnglet(){

routes.find(nomDePageEtTemplate)
  console.log(history.state);
}

window.addEventListener('popstate', retournerOnglet);

window.addEventListener('load', parDefaut)





