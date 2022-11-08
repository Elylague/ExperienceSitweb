class PageAccueil extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode:'open'});
  }
  
  connectedCallback(){
    this.setAttribute('class', 'page-accueil');
    // créer le lien de css
    const linkAcc = document.createElement('link');
    linkAcc.setAttribute('rel', 'stylesheet');
    linkAcc.setAttribute('href', 'components/onglet-components/accueil-component/accueil.css');
    this.shadowRoot.appendChild(linkAcc);
    // créer le template
    const template=document.createElement('template');
    template.innerHTML=`
    <div part='accueil-div'>
    <h3>Bienvenue sur le site: Je Comprends Mes Cours</h3> 
    <p part='parag-accueil' class="parag"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ea magnam alias nostrum voluptatem, consequatur est laudantium!Voluptatibus vitae unde rerum reiciendis, accusantium nihil saepe tempora, cum accusamus provident ut minus. </p> 
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ea magnam alias nostrum voluptatem, consequatur est laudantium!Voluptatibus vitae unde rerum reiciendis, accusantium nihil saepe tempora, cum accusamus provident ut minus. </p>
    </>
    `
      
      const templateContent=template.content.cloneNode(true);
      this.shadowRoot.appendChild(templateContent)
  }
}

//customElements.define('page-accueil', PageAccueil);

export {PageAccueil};
