class AsideLateral extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode:'open'});
  }
  
  connectedCallback(){
    // créer le lien de css
    this.setAttribute('class', 'lateral');
    const linkLateral = document.createElement('link');
    linkLateral.setAttribute('rel', 'stylesheet');
    linkLateral.setAttribute('href', 'components/lateral-component/lateral.css');
    this.shadowRoot.appendChild(linkLateral);
    // créer le template
    const template=document.createElement('template');
    template.innerHTML=`
    <h3>Les nouveaux cours vont être ajoutés ici</h3> 
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ea magnam alias nostrum voluptatem, consequatur est laudantium!Voluptatibus vitae unde rerum reiciendis, accusantium nihil saepe tempora, cum accusamus provident ut minus.</p> 
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ea magnam alias nostrum voluptatem, consequatur est laudantium!Voluptatibus vitae unde rerum reiciendis, accusantium nihil saepe tempora, cum accusamus provident ut minus.</p>
    
    `
      
      const templateContent=template.content.cloneNode(true);
      this.shadowRoot.appendChild(templateContent)
  }
}

export {AsideLateral};
