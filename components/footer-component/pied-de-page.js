class PiedDePage extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode:'open'});
    
    
  }
  
connectedCallback(){
  const piedPage=document.createElement('div');
  const template=document.createElement('template');
  const linkPied=document.createElement('link');
  linkPied.setAttribute('rel', 'stylesheet');
  linkPied.setAttribute('href', 'components/footer-component/pied-de-page.css');
  this.shadowRoot.appendChild(linkPied);
  template.innerHTML='<p>le pied de page créé</p>';
  const templateContent=template.content.cloneNode(true);
  this.shadowRoot.appendChild(templateContent);
  
}
  
  
  
}

export  {PiedDePage};
