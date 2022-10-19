class PageStaff extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode:'open'});
  }
  
  connectedCallback(){
    this.setAttribute('class', 'page-staff');
    // créer le lien de css
    const linkStaff = document.createElement('link');
    linkStaff.setAttribute('rel', 'stylesheet');
    linkStaff.setAttribute('href', 'components/onglet-components/staff-component/staff.css');
    this.shadowRoot.appendChild(linkStaff);
    // créer le template
    const template=document.createElement('template');
    template.innerHTML=`
    <h3>La page de tous les staff qui créent ce site web</h3> 
    <p class="parag"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ea magnam alias nostrum voluptatem, consequatur est laudantium!Voluptatibus vitae unde rerum reiciendis, accusantium nihil saepe tempora, cum accusamus provident ut minus. </p> 
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ea magnam alias nostrum voluptatem, consequatur est laudantium!Voluptatibus vitae unde rerum reiciendis, accusantium nihil saepe tempora, cum accusamus provident ut minus. </p>
    `
      
      const templateContent=template.content.cloneNode(true);
      this.shadowRoot.appendChild(templateContent)
  }
}

//customElements.define('page-staff', PageStaff)

export {PageStaff};
