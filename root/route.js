 let sectionCorpDeMaPage=document.querySelector('corp-de-page')
let routes=[
  {nomPage:'Accueil', 
 /* fetchData(){
   let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
   //let sectionDivLireCours=document.querySelector('#corps-de-page section .div-lire-cours');
   
    let maPageAccueil=document.createElement('page-accueil');
    sectionCorpDeMaPage.innerHTML=''
   //sectionDivLireCours.innerHTML=''
    sectionCorpDeMaPage.appendChild(maPageAccueil);
  
   // console.log(location.pathname)
    console.log('dans Accueil')
    
  },*/
  async render(){
    //console.log('fetchData');
    let mainPage=document.querySelector('main');
     let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
    let theNewAsideCours=sectionCorpDeMaPage.previousElementSibling;
    let theOldAsideCours=sectionCorpDeMaPage.nextElementSibling;
     try {
       //let sectionCorpDeMaPage = document.querySelector('main .section-page-accueil');
      // const theNewAsideCours = sectionCorpDeMaPage.nextElementSibling;
      
       const reponse=await fetch('./components/onglet-components/accueil-component/accueil.html');
       if (!reponse.ok) {
         throw new Error('Erreur: la page est introuvable')
         
       }else if(theNewAsideCours!==null){
         //console.log(theNewAsideCours);
         theOldAsideCours.classList.remove('cacher-aside');
         theNewAsideCours.classList.add('cacher-aside');
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
         //console.log(theNewAsideCours)
         
         
       // console.log(sectionCorpDeMaPage);
         
         }else{
         const reponseHtml=await reponse.text();
         const docHtml=await new DOMParser().parseFromString(reponseHtml, 'text/html');
         // append dans la page
        // let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
         let maPageAccueil=document.createElement('page-accueil');
          sectionCorpDeMaPage.innerHTML=''
    
         let div=docHtml.querySelector('div');
  
         sectionCorpDeMaPage.appendChild(div);
        // console.log(theNewAsideCours)
        // return docHtml;
         
         
       }
     } catch (e) {
       const centrer=document.createElement('center');
       
       const h1=document.createElement('h1');
       h1.innerHTML=`${e.message}`
       centrer.appendChild(h1);
         let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil')
       sectionCorpDeMaPage.innerHTML='';
       sectionCorpDeMaPage.appendChild(centrer);
      // console.log(sectionCorpDeMaPage)
       //console.log(p);
     }
     
     
   }
  }, 
  {nomPage:'Cours',
  render(){
    
    let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');//pour la permuter et lui ajouter de nouvels contenus
    let theAsideAfter=sectionCorpDeMaPage.nextElementSibling
    let listeCours = document.createElement('liste-cours');//pour l'ajouter dans une nouvelle aside et la permuter
    const oldAside=document.querySelector('main .aside'); // pour le cacher en display: none; pas supprimer
   // sectionCorpDeMaPage.remove()// lui en ajouter de nouveaux parce qu'il est vide
    const corpsDePage = document.querySelector('main');
    
    let testNewAsidePresence=document.querySelector('.aside-liste-cours');
    // CRÉER UN TITRE POUR AFDICHER DANS LA PAGE SECTION COURS
    const centrerTitre = document.createElement('center');
    const titreH1 = document.createElement('h1');
    titreH1.innerHTML = 'LA PAGE DE TOUS MES COURS'
    centrerTitre.appendChild(titreH1)
    
    if (testNewAsidePresence===null) {
      const newAside=document.createElement('aside');
      newAside.classList.add('aside-liste-cours');
      oldAside.classList.add('cacher-aside') // lui cacher en lui ajoutant une nouvelle classe
      newAside.appendChild(listeCours);
       // pour lui supprimer son id et lui ajouter une nouvelle class
      corpsDePage.id = '';
      corpsDePage.insertBefore(newAside, sectionCorpDeMaPage);
      corpsDePage.classList.add('permute-columns')
      //console.log(corpsDePage)
      
      sectionCorpDeMaPage.innerHTML = '';
      sectionCorpDeMaPage.appendChild(centrerTitre)
  
    }else{
      //console.log(testNewAsidePresence);
      
       testNewAsidePresence.classList.remove('cacher-aside'); //supprimer la class cacher-aside
       theAsideAfter.classList.add('cacher-aside')
      corpsDePage.id=''
      corpsDePage.classList.add('permute-columns');
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
     //console.log(nextAside);
     //console.log(previousAside)
    //console.log(history.state.nomDePage);
    }
  }
  }, 
  {nomPage:'Staff', 
  
  render(){
    let mainPage = document.querySelector('main');
    let sectionCorpDeMaPage = document.querySelector('main .section-page-accueil');
    let theNewAsideCours = sectionCorpDeMaPage.previousElementSibling;
    let theOldAsideCours = sectionCorpDeMaPage.nextElementSibling;
    
    if(theNewAsideCours!==null){
   theOldAsideCours.classList.remove('cacher-aside');
   theNewAsideCours.classList.add('cacher-aside');
   mainPage.classList.remove('permute-columns');
   mainPage.id = "corps-de-page";
   //afficher contenu initial
   let pageDeStaff = document.createElement('page-staff');
   sectionCorpDeMaPage.innerHTML = ''
   //sectionDivLireCours.innerHTML=''
   sectionCorpDeMaPage.appendChild(pageDeStaff);
    }else{
     let sectionCorpDeMaPage = document.querySelector('main .section-page-accueil');
     //let sectionDivLireCours=document.querySelector('#corps-de-page section .div-lire-cours');
     // console.log(history.state.nomDePage);
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
    const centrer = document.createElement('center');
    
    const h1 = document.createElement('h1');
    h1.innerHTML='mathematiques'
    centrer.appendChild(h1);
    let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
    
    //let sectionDivLireCours=document.querySelector('#corps-de-page section .div-lire-cours');
    const formCours = document.createElement('form-cours');
    //const lireCours=document.createElement('lire-cours');
    sectionCorpDeMaPage.innerHTML=''
    //sectionDivLireCours.innerHTML=''
    sectionCorpDeMaPage.append(centrer,formCours);
    let nextAsideMathPage=sectionCorpDeMaPage.nextElementSibling;
    let beforAsideMathPage=sectionCorpDeMaPage.previousElementSibling
    let main=sectionCorpDeMaPage.parentElement;
  // console.log(main);
  }
  
  }, 
   {nomPage:'Physiques',
  render(){
    const centrer = document.createElement('center');
    
    const h1 = document.createElement('h1');
    h1.innerHTML='Physiques'
    centrer.appendChild(h1);
    let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
    
    //let sectionDivLireCours=document.querySelector('#corps-de-page section .div-lire-cours');
    const formCours = document.createElement('form-cours');
    //const lireCours=document.createElement('lire-cours');
    sectionCorpDeMaPage.innerHTML=''
    //sectionDivLireCours.innerHTML=''
    sectionCorpDeMaPage.append(centrer,formCours);
   // console.log(history.state.nomDePage);
  }
  
  }, 
  {nomPage:'Chimie',
  render(){
    const centrer = document.createElement('center');
    
    const h1 = document.createElement('h1');
    h1.innerHTML='Chimie'
    centrer.appendChild(h1);
    let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
    
    //let sectionDivLireCours=document.querySelector('#corps-de-page section .div-lire-cours');
    const formCours = document.createElement('form-cours');
    //const lireCours=document.createElement('lire-cours');
    sectionCorpDeMaPage.innerHTML=''
    //sectionDivLireCours.innerHTML=''
    sectionCorpDeMaPage.append(centrer,formCours);
   // console.log(history.state.nomDePage);
  }
  
  }, 
  {nomPage:'science sociale',
  render(){
    const centrer = document.createElement('center');
    
    const h1 = document.createElement('h1');
    h1.innerHTML='Science sociale'
    centrer.appendChild(h1);
    let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
    
    //let sectionDivLireCours=document.querySelector('#corps-de-page section .div-lire-cours');
    const formCours = document.createElement('form-cours');
    //const lireCours=document.createElement('lire-cours');
    sectionCorpDeMaPage.innerHTML=''
    //sectionDivLireCours.innerHTML=''
    sectionCorpDeMaPage.append(centrer,formCours);
   // console.log(history.state.nomDePage);
  }
  
  }, 
  {nomPage:'anglais',
  render(){
    const centrer = document.createElement('center');
    
    const h1 = document.createElement('h1');
    h1.innerHTML='Anglais'
    centrer.appendChild(h1);
    let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
    
    //let sectionDivLireCours=document.querySelector('#corps-de-page section .div-lire-cours');
    const formCours = document.createElement('form-cours');
    //const lireCours=document.createElement('lire-cours');
    sectionCorpDeMaPage.innerHTML=''
    //sectionDivLireCours.innerHTML=''
    sectionCorpDeMaPage.append(centrer,formCours);
   // console.log(history.state.nomDePage);
  }
  
  }, 
  {nomPage:'espagnol',
  render(){
    const centrer = document.createElement('center');
    
    const h1 = document.createElement('h1');
    h1.innerHTML='Espagnol'
    centrer.appendChild(h1);
    let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
    
    //let sectionDivLireCours=document.querySelector('#corps-de-page section .div-lire-cours');
    const formCours = document.createElement('form-cours');
    //const lireCours=document.createElement('lire-cours');
    sectionCorpDeMaPage.innerHTML=''
    //sectionDivLireCours.innerHTML=''
    sectionCorpDeMaPage.append(centrer,formCours);
   // console.log(history.state.nomDePage);
  }
  
  }, 
  {nomPage:'créole',
  render(){
    const center = document.createElement('center');
    
    const h1 = document.createElement('h1');
    h1.innerHTML='Créole'
    center.appendChild(h1);
    let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
    
    //let sectionDivLireCours=document.querySelector('#corps-de-page section .div-lire-cours');
    const formCours = document.createElement('form-cours');
    //const lireCours=document.createElement('lire-cours');
    sectionCorpDeMaPage.innerHTML=''
    //sectionDivLireCours.innerHTML=''
    sectionCorpDeMaPage.append(center,formCours);
   // console.log(history.state.nomDePage);
  }
  
  }, 
  {nomPage:'français',
  render(){
    const centrer = document.createElement('center');
    
    const h1 = document.createElement('h1');
    h1.innerHTML='Français'
    centrer.appendChild(h1);
    let sectionCorpDeMaPage=document.querySelector('main .section-page-accueil');
    
    //let sectionDivLireCours=document.querySelector('#corps-de-page section .div-lire-cours');
    const formCours = document.createElement('form-cours');
    //const lireCours=document.createElement('lire-cours');
    sectionCorpDeMaPage.innerHTML=''
    //sectionDivLireCours.innerHTML=''
    sectionCorpDeMaPage.append(centrer,formCours);
   // console.log(history.state.nomDePage);
  }
  
  }
  
]

export {routes};
