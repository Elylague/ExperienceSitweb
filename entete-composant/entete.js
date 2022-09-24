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
    linkElm.setAttribute('href', 'entete-composant/entete.css');
    this.shadowRoot.appendChild(linkElm);

  
    
    template.innerHTML= `  
    
      <header>
        <h1> je comprend tous mes cours</h1>
      </header> 
      <nav>
      
        <ul>
           <li class="li-Nav"><a class="activer-onglet" href="Index.html">Accueil</a></li>
           <li class="li-Nav"><a href="PageCours.html">Cours</a></li>
           <li class="li-Nav"><a href="PageMedia.html">Media</a></li>
           <li class="li-Nav"><a href="PageStaff.html">Staff</a></li>
        </ul> 

        </nav>`
    
        const templateContent=template.content.cloneNode(true);
        this.shadowRoot.appendChild(templateContent);
    
    
  }
  

}

customElements.define('entete-de-page', EnteteDePage);

let entete=document.querySelector('entete-de-page');
console.log(entete.shadowRoot);
