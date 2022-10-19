class PageCours extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

  }

  connectedCallback() {

    const template = document.createElement('template');
    const style = document.createElement('style');
    const linkPageCours = document.createElement('link');
    linkPageCours.setAttribute('rel', 'stylesheet');
    linkPageCours.setAttribute('href', 'components/page-des-cours/page-cours.css');
    this.shadowRoot.appendChild(linkPageCours);



    template.innerHTML = `  
    
        <section class="partie-principale">
            <h3> tous les  Cours disponibles</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea magnam alias nostrum voluptatem, consequatur est laudantium! Voluptatibus vitae unde rerum reiciendis, accusantium nihil saepe tempora, cum accusamus provident ut minus.</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea magnam alias nostrum voluptatem, consequatur est laudantium! Voluptatibus vitae unde rerum reiciendis, accusantium nihil saepe tempora, cum accusamus provident ut minus.</p>
          </section>
      
        
        `

    const templateContent = template.content.cloneNode(true);
    this.shadowRoot.appendChild(templateContent);


  }


}

//export { PageCours }
