class FormCours extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode:'open'});
  }
  
  connectedCallback(){
    //this.takeValueCoursInParams();
    
    this.fonctionLireCours()
    //this.getDataMathCours()
    this.getDataAndForEachThem()
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
                   <input list="input-niveau-math" class="input-niveau-math" type="text" placeholder="choisir votre Niveau" />
                  <br/><br/>
                
                    <label>Matière:</label>
                    <input list="input-matiere" class="input-matiere" type="text" placeholder="Select" />
                  
        
                </fieldset>
                <button class="bouton1">valider</button>
            </div>
        </form>
        `
    
    const templateContent = template.content.cloneNode(true);
    this.shadowRoot.appendChild(templateContent)
  }
  
  
  getDataMathCours(){
    let mathTerm = window.sessionStorage.getItem('mathTe');
    mathTerm=JSON.parse(mathTerm);
    //console.log(JSON.parse(mathTerm), 'je suis dans le formulaire');
    return mathTerm;
  }
  
  
  
  
  
  getDataAndForEachThem=()=> {
    const tabMath=[];
    const data=this.getDataMathCours()
  data.find(function(mathCours){
    
    if (mathCours['mathématique Terminale']){
      //console.log(mathCours)
      for(let objMath in mathCours){
        tabMath.push(objMath);
       // console.log(tabMath);
       let branche= mathCours[objMath]
     // console.log(mathCours[objMath])
     // forEachOnBranchMath(branche)
       
      }
      
    
    }
    
    let brancheMath=mathCours[tabMath[2]]
    //forEachOnBranchMath(brancheMath)
   // console.log(data[6].niveau);
  
  })
  //console.log(tabMath)
//  createDatalist()
 //return {tabMath};
}


  
  // end of class
}

export  {FormCours};

//customElements.define('lire-cours', LireCours);
