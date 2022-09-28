import {EnteteDePage } from './components/entete-composant/entete.js'
import {CorpsDePage } from './components/corp-de-page/corp-de-page.js'
import {PiedDePage} from './components/footer-component/pied-de-page.js'
import {PageAccueil} from './components/accueil-component/accueil.js'
import {AsideLateral} from './components/lateral-component/lateral.js'
customElements.define('entete-de-page', EnteteDePage);
customElements.define('corp-de-page', CorpsDePage);
customElements.define('pied-de-page', PiedDePage);
customElements.define('page-accueil', PageAccueil);
customElements.define('aside-lateral', AsideLateral)





const createTeteCorpsPied=()=> {
  const enteteDepage = document.createElement('entete-de-page');
  let corpDepage = document.createElement('corp-de-page');
  const piedDePage = document.createElement('pied-de-page');
  const divApp = document.getElementById('app');
  divApp.append(enteteDepage, corpDepage, piedDePage);
  sectionEtAside(corpDepage)
}
createTeteCorpsPied()


 function sectionEtAside(corpsPage) {
  const section=document.createElement('section');
  const pageAccuei=document.createElement('page-accueil');
  section.appendChild(pageAccuei);
  section.setAttribute('class', 'section')
  const aside=document.createElement('aside');
  const lateral=document.createElement('aside-lateral')
  aside.appendChild(lateral);
  aside.setAttribute('class', 'aside');
  corpsPage.append(section, aside);
  //console.log(corpsPage);
}





