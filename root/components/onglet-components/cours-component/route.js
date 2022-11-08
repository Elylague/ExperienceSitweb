 const createAndReturnTitreCours=(nomCours, newAsideLate)=> {
   const h1 = document.createElement('h1');
   const center=document.createElement('center')
   let colorNames = ''
   switch (nomCours) {
     case 'cours de mathématiques':
       colorNames = newAsideLate.firstElementChild.shadowRoot.querySelectorAll('li')[0].getAttribute('class');
       //const colorTitre = sessionStorage.getItem(colorNames);
        h1.style.backgroundColor = colorNames;
   
       break;
     case 'cours de physiques':
       colorNames = newAsideLate.firstElementChild.shadowRoot.querySelectorAll('li')[1].getAttribute('class');
       h1.style.backgroundColor = colorNames;
   
       break;
     case `cours de chimie`:
       colorNames = newAsideLate.firstElementChild.shadowRoot.querySelectorAll('li')[2].getAttribute('class');
       h1.style.backgroundColor = colorNames;
   
       break;
     case `cours de science sociale`:
       colorNames = newAsideLate.firstElementChild.shadowRoot.querySelectorAll('li')[3].getAttribute('class');
       h1.style.backgroundColor = colorNames;
       //console.log(colorTitre);
       break;
     case `cours d'anglais`:
       colorNames = newAsideLate.firstElementChild.shadowRoot.querySelectorAll('li')[4].getAttribute('class');
       h1.style.backgroundColor = colorNames;
       // console.log(colorTitre);
       break;
     case `cours d'espagnol`:
       colorNames = newAsideLate.firstElementChild.shadowRoot.querySelectorAll('li')[5].getAttribute('class');
       h1.style.backgroundColor = colorNames;
       //console.log(colorTitre);
       break;
     case `cours de créole`:
       colorNames = newAsideLate.firstElementChild.shadowRoot.querySelectorAll('li')[6].getAttribute('class');
       h1.style.backgroundColor = colorNames;
       //console.log(colorTitre);
       break;
     case `cours de français`:
       colorNames = newAsideLate.firstElementChild.shadowRoot.querySelectorAll('li')[7].getAttribute('class');
       h1.style.backgroundColor = colorNames;
       //console.log(colorTitre);
       break;
   
   
   
   }
   h1.classList.add('couleur-titre');
   h1.innerHTML = `${nomCours.toUpperCase()}`
   center.appendChild(h1);
   //console.log('you really call me')
   return center;
   
 }
 
 
 
 
 // fonction
 function WhenPageRefresh(listCour, form, nomDuCours){
   let mainPage = document.querySelector('main');
   let sectionCorpDeMaPage = document.querySelector('main .section-page-accueil');
  
   let theOldAsideCours = sectionCorpDeMaPage.nextElementSibling;
   let newAsideCou=sectionCorpDeMaPage.previousElementSibling
   // partie qui gere les class
   newAsideCou.classList.remove('cacher-aside');
   newAsideCou.classList.add('aside-liste-cours');
   theOldAsideCours.classList.add('cacher-aside') // lui cacher en lui ajoutant une nouvelle classe
   let listeCours=document.createElement(listCour);
   newAsideCou.appendChild(listeCours);
   // le contenue de la page avec le formulaire
   mainPage.id = '';
   mainPage.classList.add('permute-columns')
   let formul=document.createElement(form);
   
   // créer le titre
  const leTitreCoursCentrer=createAndReturnTitreCours(nomDuCours,newAsideCou)

   sectionCorpDeMaPage.innerHTML = '';
   sectionCorpDeMaPage.append(leTitreCoursCentrer, formul);
  // console.log('je suis dans whenPageRefresh')
  
 };
 
 
 
 
 // Fonction
 function whenGetBackFromOnglet(nomCours) {
   let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
   let newAsideLate = sectionCorpDeMaPage.previousElementSibling;
   let theOldAside = sectionCorpDeMaPage.nextElementSibling;
   
   //créer le titre
   const centrerTitreCours=createAndReturnTitreCours(nomCours,newAsideLate);
   const formCours = document.createElement('form-cours');
   sectionCorpDeMaPage.innerHTML = ''
   sectionCorpDeMaPage.append(centrerTitreCours, formCours);
   theOldAside.classList.add('cacher-aside');
   newAsideLate.classList.remove('cacher-aside');
   let pagePrincip = document.querySelector('main');
   pagePrincip.id=''
   pagePrincip.classList.add('permute-columns');
   //console.log('je suis dans whenGetBackFromOnglet')
 }
 
 
 
 
 
let routes=[
  {nomPage:'Accueil', 

  async render(){
    //console.log('fetchData');
    let mainPage=document.querySelector('main');
     let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
    let theNewAside=sectionCorpDeMaPage.previousElementSibling;
    let theOldAsideCours=sectionCorpDeMaPage.nextElementSibling;
     try {
       const reponse=await fetch('./components/onglet-components/accueil-component/accueil.html');
       if (!reponse.ok) {
         throw new Error('Erreur: la page est introuvable')
         
       }else if(theNewAside!==null){
         
         theOldAsideCours.classList.remove('cacher-aside');
         theNewAside.classList.add('cacher-aside');
         mainPage.classList.remove('permute-columns');
         mainPage.id="corps-de-page";
         // AFFICHER LE CONTENU INITIAL DE LA PAGE ACCUEIL
         const reponseHtml = await reponse.text();
         const docHtml = await new DOMParser().parseFromString(reponseHtml, 'text/html');
         // append dans la page
         // let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
         let maPageAccueil = document.createElement('page-accueil');
         sectionCorpDeMaPage.innerHTML = ''
         
         let div = docHtml.querySelector('div');
         
         sectionCorpDeMaPage.appendChild(div);
         
         }else{
         const reponseHtml=await reponse.text();
         const docHtml=await new DOMParser().parseFromString(reponseHtml, 'text/html');
         // append dans la page
         let maPageAccueil=document.createElement('page-accueil');
          sectionCorpDeMaPage.innerHTML=''
    
         let div=docHtml.querySelector('div');
  
         sectionCorpDeMaPage.appendChild(div);
         
         
       }
     } catch (e) {
       const centrer=document.createElement('center');
       
       const h1=document.createElement('h1');
       h1.innerHTML=`${e.message}`
       centrer.appendChild(h1);
         let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil')
       sectionCorpDeMaPage.innerHTML='';
       sectionCorpDeMaPage.appendChild(centrer);

     }
     
     
   }
  }, 
  {nomPage:'Cours',
  render(){
    
    let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');//pour la permuter et lui ajouter de nouvels contenus
    let asideOnRightSideMain=sectionCorpDeMaPage.nextElementSibling
    let asideOnLeftSideMain=sectionCorpDeMaPage.previousElementSibling;
    let listeCours = document.createElement('liste-cours');//pour l'ajouter dans une nouvelle aside et la permute
    const mainIsCorps = document.querySelector('main');
    
    //let testNewAsidePresence=document.querySelector('.aside-liste-cours');
    // CRÉER UN TITRE POUR AFDICHER DANS LA PAGE SECTION COURS
    const centrerTitre = document.createElement('center');
    const titreH1 = document.createElement('h1');
    titreH1.innerHTML = 'LA PAGE DE TOUS MES COURS'
    centrerTitre.appendChild(titreH1);
    
    /* quand je clique sur l'onglet Cours du menu de ma page
    au cas où asideOnLeftSideMain est en display:none;*/
    
    if (asideOnLeftSideMain.classList.contains('cacher-aside')) {
      //const newAside=document.createElement('aside');
      asideOnLeftSideMain.classList.remove('cacher-aside')
      asideOnLeftSideMain.classList.add('aside-liste-cours');
      asideOnRightSideMain.classList.add('cacher-aside') // lui cacher en lui ajoutant une nouvelle classe
      asideOnLeftSideMain.innerHTML=''
      asideOnLeftSideMain.appendChild(listeCours);
       // pour lui supprimer son id et lui ajouter une nouvelle class
      mainIsCorps.id = '';
      //mainIsCorps.insertBefore(asideOnLeftSideMain, sectionCorpDeMaPage);
      mainIsCorps.classList.add('permute-columns')
      //console.log(corpsDePage)
      
      sectionCorpDeMaPage.innerHTML = '';
      sectionCorpDeMaPage.appendChild(centrerTitre)
     // console.log(corpsDePage);
    }else{
      // A annuler
      
       asideOnLeftSideMain.classList.remove('cacher-aside'); //supprimer la class cacher-aside
       asideOnLeftSideMain.classList.add('aside-liste-cours')
      mainIsCorps.id=''
      mainIsCorps.classList.add('permute-columns');
      sectionCorpDeMaPage.innerHTML='';
      sectionCorpDeMaPage.appendChild(centrerTitre);
      
    }
    
  
  }
  }, 
  {nomPage:'Media', 
  render(){
  
    let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
    let main=document.querySelector('main');
    let previousAside=sectionCorpDeMaPage.previousElementSibling;
    if(previousAside===null){
      // A annuler
      let pageDeMedia = document.createElement('page-media');
      sectionCorpDeMaPage.innerHTML = ''
      //sectionDivLireCours.innerHTML=''
      sectionCorpDeMaPage.appendChild(pageDeMedia);
    }else{
    //let sectionDivLireCours=document.querySelector('#corps-de-page section .div-lire-cours');
    //console.log(sectionCorpDeMaPage);
    let pageDeMedia = document.createElement('page-media');
    sectionCorpDeMaPage.innerHTML=''
    //sectionDivLireCours.innerHTML=''
    sectionCorpDeMaPage.appendChild(pageDeMedia);
    // la deuxième fonctionalité pour afficher aside
    //let previousAside=sectionCorpDeMaPage.previousElementSibling;
    let nextAsideCours=sectionCorpDeMaPage.nextElementSibling;
    // console.log(previousAside);
    nextAsideCours.classList.remove('cacher-aside');
    previousAside.classList.add('cacher-aside');
    main.classList.remove('permute-columns');
    main.id='corps-de-page'

    }
  }
  }, 
  {nomPage:'Staff', 
  
  render(){
    let mainPage = document.querySelector('main');
    let sectionCorpDeMaPage = document.querySelector('main .section-page-accueil');
    let theNewAside = sectionCorpDeMaPage.previousElementSibling;
    let theOldAsideCours = sectionCorpDeMaPage.nextElementSibling;
    
    if(theNewAside!==null){
   theOldAsideCours.classList.remove('cacher-aside');
   theNewAside.classList.add('cacher-aside');
   mainPage.classList.remove('permute-columns');
   mainPage.id = "corps-de-page";
   //afficher contenu initial
   let pageDeStaff = document.createElement('page-staff');
   sectionCorpDeMaPage.innerHTML = ''
   //sectionDivLireCours.innerHTML=''
   sectionCorpDeMaPage.appendChild(pageDeStaff);
    }else{

     let pageDeStaff = document.createElement('page-staff');
     sectionCorpDeMaPage.innerHTML = ''
     //sectionDivLireCours.innerHTML=''
     sectionCorpDeMaPage.appendChild(pageDeStaff);
  }
  }
  }, 
  {nomPage:'null', 
  render(){
   let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
   //let sectionDivLireCours=document.querySelector('#corps-de-page section .div-lire-cours');
    let maPageAccueil=document.createElement('page-accueil');
    sectionCorpDeMaPage.innerHTML=''
   // sectionDivLireCours.innerHTML=''
  
    sectionCorpDeMaPage.appendChild(maPageAccueil);
   // console.log(location.pathname)
   
    
  }
  
  }, 
   {nomPage:'mathematiques',
  
   
  
  render(){
    
    let sectionCorpDeMaPage = document.querySelector('main .section-page-accueil');
    let theNewAsideCour = sectionCorpDeMaPage.previousElementSibling;
    let ifContentNodes=theNewAsideCour.hasChildNodes();
    let testClassCacher=theNewAsideCour.classList.contains('cacher-aside');
   
    if(ifContentNodes){
      //console.log(firstChildAside.hasChildNodes())
      //console.log('firstChildAside')
      // A annuler
      whenGetBackFromOnglet('cours de mathématiques')
    }else if(theNewAsideCour!==null && testClassCacher===true){
      WhenPageRefresh('liste-cours','form-cours', 'cours de mathématiques' );
      

    }else{
      
  
  console.log('je suis dans le else');
  }
  }
  
  }, 
   {nomPage:'Physiques',
  render(){
    let sectionCorpDeMaPage = document.querySelector('main .section-page-accueil');
   let theNewAsideCour = sectionCorpDeMaPage.previousElementSibling;
   let ifContentNodes=theNewAsideCour.hasChildNodes()
   let testClassCacher = theNewAsideCour.classList.contains('cacher-aside');

   if (ifContentNodes) {
     //console.log('firstChildAside')
     // A annuler
     whenGetBackFromOnglet('cours de physiques')
   } else if (theNewAsideCour !== null && testClassCacher === true) {
     WhenPageRefresh('liste-cours', 'form-cours', 'cours de physiques');
   
   
   } else {
   
   
     console.log('je suis dans le else');
   }
  }
  
  }, 
  {nomPage:'Chimie',
  render(){
    let sectionCorpDeMaPage = document.querySelector('main .section-page-accueil');
    let theNewAsideCour = sectionCorpDeMaPage.previousElementSibling;
    let ifContentNodes=theNewAsideCour.hasChildNodes()
    let testClassCacher = theNewAsideCour.classList.contains('cacher-aside');

    if (ifContentNodes) {
      
      
      whenGetBackFromOnglet('cours de chimie')
    } else if (theNewAsideCour !== null && testClassCacher === true) {
      WhenPageRefresh('liste-cours', 'form-cours', 'cours de chimie');
    
    
    } else {
    
    
      console.log('je suis dans le else');
    }

  }
  
  }, 
  {nomPage:'science sociale',
  render(){
    let sectionCorpDeMaPage = document.querySelector('main .section-page-accueil');
   let theNewAsideCour = sectionCorpDeMaPage.previousElementSibling;
   let ifContentNodes=theNewAsideCour.hasChildNodes()
   let testClassCacher = theNewAsideCour.classList.contains('cacher-aside');

   if (ifContentNodes) {
     //console.log('firstChildAside')
     // A annuler
     whenGetBackFromOnglet('cours de science sociale')
   } else if (theNewAsideCour !== null && testClassCacher === true) {
     WhenPageRefresh('liste-cours', 'form-cours', 'cours de science sociale');
   
   
   } else {
   
   
     console.log('je suis dans le else');
   }
  }
  
  }, 
  {nomPage:'anglais',
  render(){
    let sectionCorpDeMaPage = document.querySelector('main .section-page-accueil');
   let theNewAsideCour = sectionCorpDeMaPage.previousElementSibling;
   let ifContentNodes=theNewAsideCour.hasChildNodes()
   let testClassCacher = theNewAsideCour.classList.contains('cacher-aside');

   if (ifContentNodes) {
    // console.log('firstChildAside')
     // A annuler
     whenGetBackFromOnglet(`cours d'anglais`)
   } else if (theNewAsideCour !== null && testClassCacher === true) {
     WhenPageRefresh('liste-cours', 'form-cours', `cours d'anglais`);
   
   
   } else {
   
   
     console.log('je suis dans le else');
   }
  }
  
  }, 
  {nomPage:'espagnol',
  render(){
    let sectionCorpDeMaPage = document.querySelector('main .section-page-accueil');
   let theNewAsideCour = sectionCorpDeMaPage.previousElementSibling;
   let ifContentNodes=theNewAsideCour.hasChildNodes()
   let testClassCacher = theNewAsideCour.classList.contains('cacher-aside');

   if (ifContentNodes) {
     //console.log('firstChildAside')
     // A annuler
     whenGetBackFromOnglet(`cours d'espagnol`)
   } else if (theNewAsideCour !== null && testClassCacher === true) {
     WhenPageRefresh('liste-cours', 'form-cours', `cours d'espagnol`);
   
   
   } else {
   
   
     console.log('je suis dans le else');
   }
  }
  
  }, 
  {nomPage:'créole',
  render(){
    let sectionCorpDeMaPage = document.querySelector('main .section-page-accueil');
   let theNewAsideCour = sectionCorpDeMaPage.previousElementSibling;
   let ifContentNodes=theNewAsideCour.hasChildNodes()
   let testClassCacher = theNewAsideCour.classList.contains('cacher-aside');

   if (ifContentNodes) {
    // console.log('firstChildAside')
     // A annuler
     whenGetBackFromOnglet(`cours de créole`)
   } else if (theNewAsideCour !== null && testClassCacher === true) {
     WhenPageRefresh('liste-cours', 'form-cours', 'cours de créole');
   
   
   } else {
   
   
     console.log('je suis dans le else');
   }
  }
  
  }, 
  {nomPage:'français',
  render(){
    let sectionCorpDeMaPage = document.querySelector('main .section-page-accueil');
   let theNewAsideCour = sectionCorpDeMaPage.previousElementSibling;
   let ifContentNodes=theNewAsideCour.hasChildNodes();
   let testClassCacher = theNewAsideCour.classList.contains('cacher-aside');

   if (ifContentNodes) {
     //console.log('firstChildAside')
     // A annuler
     whenGetBackFromOnglet(`cours de français`)
   } else if (theNewAsideCour !== null && testClassCacher === true) {
     WhenPageRefresh('liste-cours', 'form-cours', 'cours de français');
   
   
   } else {
   
   
     console.log('je suis dans le else');
   }
  }
  
  }
  
]

export {createAndReturnTitreCours,WhenPageRefresh,whenGetBackFromOnglet,routes};
