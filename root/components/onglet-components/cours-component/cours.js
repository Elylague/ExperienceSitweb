import {routes} from './route.js'
/*import {getCoursJson} from './dataCoursMath.js'
getCoursJson.getMathJson('./components/onglet-components/cours-component/mathematiques.json')
console.log(getCoursJson);
*/
/*
getMathJason('mathematiques.json')
let mathTerm = window.sessionStorage.getItem('mathTe');
console.log(JSON.parse(mathTerm), 'mathTerm');
*/


//console.log(routes);
class ListeCours extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode:'open'});
    //this.recupDivParagraph()
  }
  
  connectedCallback(){
      this.customElementsFonctionality()
      this.ajouterClickSurListCours();
      this.getNameCoursPourForm()
    
      //this.getCoursPourForm()
    //console.log(routes)
  }
  
  customElementsFonctionality(){
    this.setAttribute('class', 'page-cours');
    // créer le lien de css
    const linkCours = document.createElement('link');
    linkCours.setAttribute('rel', 'stylesheet');
    linkCours.setAttribute('href', 'components/onglet-components/cours-component/cours.css');
    this.shadowRoot.appendChild(linkCours);
    // créer le template
    const template = document.createElement('template');
    template.innerHTML = `
          <div class="conteneur-cours">
          <h3>La liste de tous les cours</h3> 
                <ol type='I' class="liste-des-cours">
                   <li class="pink"><a href='http://localhost:7700/root/index.html?page=Cours&cours=mathematiques'>Mathématiques</a></li>
                   <li class="lightseagreen"><a href='http://localhost:7700/root/index.html?page=Cours&cours=Physiques'>Physiques</a></li>
                   <li class="skyblue"><a href='http://localhost:7700/root/index.html?page=Cours&cours=Chimie'>Chimie</a></li>
                   <li class="orange"><a href='http://localhost:7700/root/index.html?page=Cours&cours=science sociale'>Science sociale</a></li>
                   <li class="greenyellow"><a href='http://localhost:7700/root/index.html?page=Cours&cours=anglais'> Anglais</a></li>
                   <li class="cadetblue"><a href='http://localhost:7700/root/index.html?page=Cours&cours=espagnol'>Espagnol</a></li>
                   <li class="steelblue"><a href='http://localhost:7700/root/index.html?page=Cours&cours=créole'>Créole</a></li>
                   <li class="lightcoral"><a href='http://localhost:7700/root/index.html?page=Cours&cours=français'>Français</a></li>
                <ol>
              </div>
  
        `
    
    const templateContent = template.content.cloneNode(true);
    
    this.shadowRoot.appendChild(templateContent)
    
  }
  
  
  
  
  
  
  
  recupererAncreListeCours(){
    const listDesCours=this.shadowRoot.querySelectorAll('div .liste-des-cours li a');
    return listDesCours;
  }
  
  
  ajouterClickSurListCours(){
   const listDesCours=this.recupererAncreListeCours();
   listDesCours.forEach((ancre)=> {
     ancre.addEventListener('click', this.getHrefAncre);
     //console.log(ancre)
   })
  }
  
  
  
   getHrefAncre=(event)=>{
    event.preventDefault();
    const colorName=event.target.parentElement.getAttribute('class');
    const urlAncreCours=event.target.href;
    const nameCours=event.target.textContent
    //console.log(colorName);
    //this.getColors(colorName);
    this.pushStateUrlCoursList(urlAncreCours);
    this.getNameCoursPourForm(nameCours)
  }
  
  pushStateUrlCoursList(url) {
    
    const newUrlFormCours=new URL(url);
   const UrlFormCours=newUrlFormCours.href
    const paramsFormCours=newUrlFormCours.searchParams
    const nomPage=paramsFormCours.get('cours');
    ///console.log(nomPage, 'dans lire cours');
    window.history.pushState({nomPage}, '', UrlFormCours);
    
   // this.getStateListeCours()
    this.renderPageForm()
  }
  
  getStateListeCours(){
   let stateCours=window.history.state.nomPage;
   return stateCours;
  }
  
  renderPageForm(){
    let stateCours=this.getStateListeCours()
   // const sectionPageCours=document.querySelector('main .section-page-accueil');
   // sectionPageCours.innerHTML = ''
    routes.find((object)=> {
      if (object.nomPage===stateCours) {
        object.render()
      }
    })
    
    
    
    
  }
  
  getColors(colors) {
  
    const allColors= { colors }
    //console.log(allColors.colors);
    window.sessionStorage.setItem(allColors.colors,allColors.colors);
    const getCouleurs=sessionStorage.getItem(allColors.colors);
   // console.log('COULEUR: ',getCouleurs);
  }
  
  
  
  getNameCoursPourForm(nameCours='null'){
    let nomDuCours=''
    sessionStorage.setItem('mathematiques', nameCours);
    if (sessionStorage.getItem('mathematiques')!=='null') {
      nomDuCours=sessionStorage.getItem('mathematiques');
      console.log(nomDuCours, 'nomDuCours pour formulaire');
      
    } else {
      let urlPourForm=window.location.href
      //console.log(urlPourForm);
     const newUrlFormCours = new URL(urlPourForm);
    // const UrlFormCours = newUrlFormCours.href
     const paramsFormCours = newUrlFormCours.searchParams
     let nomPage = paramsFormCours.get('cours');
     sessionStorage.setItem('mathematiques', nomPage);
     nomPage=sessionStorage.getItem('mathematiques');
     
     console.log(nomPage);
      
    }
    
    
  }
  

  
  
  
  
}

//customElements.define('page-cours', PageCours)

export {ListeCours};
