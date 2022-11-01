class FormCours extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode:'open'});
  }
  
  connectedCallback(){
    //this.takeValueCoursInParams()
    this.fonctionLireCours()
  }
  
  
  fonctionLireCours(){
    this.setAttribute('class', 'form-cours');
    const linkLireCours = document.createElement('link');
    linkLireCours.setAttribute('rel', 'stylesheet');
    linkLireCours.setAttribute('href', 'components/formulaire-cours/form-cours.css');
    this.shadowRoot.appendChild(linkLireCours);
    // créer le template
    const template = document.createElement('template');
    template.innerHTML = `
        <h3>BONNE LECTURE ET BIEN PROFITER LES COURS </h3> 
        <form>
        <div class="form-math">
              
             <fieldset>
              <legend><strong>Choisir une branche et votre Niveau Mathématique</strong></legend>
                 
                  <label>votre Niveau<label />
                   <input class="inputNiveau" type="text" placeholder="choisir votre Niveau" />
                  <br/><br/>
                
                    <label>Matière:</label>
                    <input class="matiere" type="text" placeholder="Select" />
                  
        
                </fieldset>
                <button class="bouton1">valider</button>
            </div>
        </form>
        `
    
    const templateContent = template.content.cloneNode(true);
    this.shadowRoot.appendChild(templateContent)
  }
}

export  {FormCours};

//customElements.define('lire-cours', LireCours);
