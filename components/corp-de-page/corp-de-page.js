class CorpsDePage extends HTMLElement{
  constructor(){
    super()
    
    this.attachShadow({mode:'open'});
    
  }
  
  connectedCallback(){
    this.setAttribute('id', 'corps-de-page');
    const h1=document.createElement('h1');
          
      
    const template=document.createElement('template');
    const linkEl=document.createElement('link');
          linkEl.setAttribute('rel', 'stylesheet');
          linkEl.setAttribute('href', 'components/corp-de-page/corp-de-page.css')
          this.shadowRoot.appendChild(linkEl);
          
          template.innerHTML=`
          
          <slot name="page-accueil">le contenu de la page accueil n'est pas disponible</slot>
          <slot name="lateral"> ce contenu n'est pas encore disponible</slot>
          `
          const templateContent=template.content.cloneNode(true);
         
          this.shadowRoot.appendChild(templateContent);
          
      this.corpDePageEnSection()
          
  }
  corpDePageEnSection(){
    
    //console.log(this.shadowRoot.innerHTML);
    //console.log('dans la fonction corpDePageEnSection');
  }
}


export {CorpsDePage};
