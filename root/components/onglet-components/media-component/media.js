class PageMedia extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode:'open'});
  }
  
  connectedCallback(){
    this.setAttribute('class', 'page-media');
    // créer le lien de css
    const linkMedia = document.createElement('link');
    linkMedia.setAttribute('rel', 'stylesheet');
    linkMedia.setAttribute('href', 'components/onglet-components/media-component/media.css');
    this.shadowRoot.appendChild(linkMedia);
    // créer le template
    const template=document.createElement('template');
    template.innerHTML=`
    <h3>La page de vidéo pour tous les cours</h3> 
    <p class="parag"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ea magnam alias nostrum voluptatem, consequatur est laudantium!Voluptatibus vitae unde rerum reiciendis, accusantium nihil saepe tempora, cum accusamus provident ut minus. </p> 
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ea magnam alias nostrum voluptatem, consequatur est laudantium!Voluptatibus vitae unde rerum reiciendis, accusantium nihil saepe tempora, cum accusamus provident ut minus. </p>
    `
      
      const templateContent=template.content.cloneNode(true);
      this.shadowRoot.appendChild(templateContent)
  }
}
  
  //customElements.define('page-media', PageMedia)
export {PageMedia};
