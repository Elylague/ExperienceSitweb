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
    <div class="aside-laterale">
    <h3>Les nouveaux cours vont être ajoutés ici</h3> 
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ea magnam alias nostrum voluptatem.</p> 
    </div>
    `
      
      const templateContent=template.content.cloneNode(true);
      this.shadowRoot.appendChild(templateContent)
  }
}

export {AsideLateral};
