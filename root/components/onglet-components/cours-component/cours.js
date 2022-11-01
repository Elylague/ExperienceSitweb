


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
                <ol type='A' class="liste-des-cours">
                   <li class="pink"><a href='http://localhost:7700/root/index.html?page=Cours&cours=mathematiques'>Mathematiques</a></li>
                   <li class="yellow"><a href='http://localhost:7700/root/index.html?page=Cours&cours=Physiques'>Physiques</a></li>
                   <li class="skyblue"><a href='http://localhost:7700/root/index.html?page=Cours&cours=Chimie'>Chimie</a></li>
                   <li class="orange"><a href='http://localhost:7700/root/index.html?page=Cours&cours=science sociale'>Science sociale</a></li>
                   <li class="greenyellow"><a href='http://localhost:7700/root/index.html?page=Cours&cours=anglais'>Anglais</a></li>
                   <li class="cadetblue"><a href='http://localhost:7700/root/index.html?page=Cours&cours=espagnol'>Espagnol</a></li>
                   <li class="beige"><a href='http://localhost:7700/root/index.html?page=Cours&cours=créole'>Créole</a></li>
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
     ancre.addEventListener('click', this.afficherForm);
     //console.log(ancre)
   })
  }
  
  
  
   afficherForm=(event)=>{
    event.preventDefault();
    const currentTag=event.target.textContent;
    const urlAncreCours=event.target.href;
    const sectionPageCours=document.querySelector('main .section-page-accueil');
    //setTimeout(()=> console.log(routes), 100)
  //  console.log(routes);
   //import('.../route.js').then(modules=> {
      console.log(routes)
       
     //})
    
    //console.log(module);
    
    const center=document.createElement('center');
    const formCours=document.createElement('form-cours');
    center.innerHTML=currentTag;
    //parentPageCours.appendChild(center);
    sectionPageCours.innerHTML=''

    sectionPageCours.append(center,formCours)
    this.pushStateUrlCoursList(urlAncreCours);
   // console.log(urlAncreCours);
  
  /* const center=document.createElement('center');
    center.innerHTML=currentTag;
    parentPageCours.appendChild(center);*/


  }
  
  pushStateUrlCoursList(url) {
    const newUrlFormCours=new URL(url);
   const UrlFormCours=newUrlFormCours.href
    const paramsFormCours=newUrlFormCours.searchParams
    const nomPage=paramsFormCours.get('cours');
    ///console.log(nomPage, 'dans lire cours');
    window.history.pushState({nomPage}, '', UrlFormCours)
  }
  

  
  
  
  
}

//customElements.define('page-cours', PageCours)

export {ListeCours};
