class PageCours extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode:'open'});
  }
  
  connectedCallback(){
    this.setAttribute('class', 'page-cours');
    // créer le lien de css
    const linkCours = document.createElement('link');
    linkCours.setAttribute('rel', 'stylesheet');
    linkCours.setAttribute('href', 'components/onglet-components/cours-component/cours.css');
    this.shadowRoot.appendChild(linkCours);
    // créer le template
    const template=document.createElement('template');
    template.innerHTML=`
    <h3>La page de tous mes cours</h3> 
    <p class="parag"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ea magnam alias nostrum voluptatem, consequatur est laudantium!Voluptatibus vitae unde rerum reiciendis, accusantium nihil saepe tempora, cum accusamus provident ut minus. </p> 
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ea magnam alias nostrum voluptatem, consequatur est laudantium!Voluptatibus vitae unde rerum reiciendis, accusantium nihil saepe tempora, cum accusamus provident ut minus. </p>
    `
      
      const templateContent=template.content.cloneNode(true);
      this.shadowRoot.appendChild(templateContent)
  }
}

export {PageCours};
