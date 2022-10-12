class EnteteDePage extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode:'open'})
    
  }
  
  connectedCallback(){
    
    const template = document.createElement('template');
    const style=document.createElement('style');
    const linkElm=document.createElement('link');
    linkElm.setAttribute('rel','stylesheet');
    linkElm.setAttribute('href', 'components/entete-composant/entete.css');
    this.shadowRoot.appendChild(linkElm);

  
    
    template.innerHTML= `  
    
      
      <nav>
      
        <div>
           <a class="activer-onglet ancher" href="pageAccueil.html">Accueil</a></li>
           <a class="ancher" href="pageCours.html">Cours</a>
           <a class="ancher" href="pageMedia.html">Media</a>
           <a class="ancher" href="pageStaff.html">Staff</a>
        </div> 

        </nav>
        <header>
                <h1> je comprend tous mes cours</h1>
        </header>
        
        
        `
    
        const templateContent=template.content.cloneNode(true);
        this.shadowRoot.appendChild(templateContent);
    
    
  }
  

}

export {EnteteDePage}
//customElements.define('entete-de-page', EnteteDePage);

