import {routes} from './route.js'

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
                   <li class="pink"><a href='http://localhost:7700/root/index.html?page=Cours&cours=mathematiques'>Mathematiques</a></li>
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
    //console.log(colorName);
    this.getColors(colorName);
    this.pushStateUrlCoursList(urlAncreCours);
  
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
  
  

  
  
  
  
}

//customElements.define('page-cours', PageCours)

export {ListeCours};
