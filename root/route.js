//export let sectionCorpDeMaPage=document.querySelector('corp-de-page section')
let routes=[
  {nomPage:'Accueil', 
  render(){
   let sectionCorpDeMaPage=document.querySelector('#corps-de-page section')
    let maPageAccueil=document.createElement('page-accueil');
    sectionCorpDeMaPage.innerHTML=''
  
    sectionCorpDeMaPage.appendChild(maPageAccueil);
  
   // console.log(location.pathname)
    
    
  },
  async fetchData(){
     
     try {
       const reponse=await fetch('./components/onglet-components/accueil-component/accueil.html');
       if (!reponse.ok) {
         throw new Error('Erreur: la page est introuvable')
         
       }else{
         const reponseHtml=await reponse.text();
         const docHtml=await new DOMParser().parseFromString(reponseHtml, 'text/html')
         return docHtml;
         
         
       }
     } catch (e) {
       const p=document.createElement('p');
       p.innerHTML=`${e.message}`
       console.log(p);
     }
     
     
   }
  }, 
  {nomPage:'Cours',
  render(){
    let sectionCorpDeMaPage=document.querySelector('#corps-de-page section')
    let pageDeCours = document.createElement('page-cours');
    sectionCorpDeMaPage.innerHTML=''
    sectionCorpDeMaPage.appendChild(pageDeCours);
   // console.log(history.state.nomDePage);
  }
  }, 
  {nomPage:'Media', 
  render(){
    let sectionCorpDeMaPage=document.querySelector('#corps-de-page section')
    //console.log(sectionCorpDeMaPage);
    let pageDeMedia = document.createElement('page-media');
    sectionCorpDeMaPage.innerHTML=''
    sectionCorpDeMaPage.appendChild(pageDeMedia);
    //console.log(history.state.nomDePage);
  }
  }, 
  {nomPage:'Staff', 
  render(){
    let sectionCorpDeMaPage=document.querySelector('#corps-de-page section')
   // console.log(history.state.nomDePage);
    let pageDeStaff = document.createElement('page-staff');
    sectionCorpDeMaPage.innerHTML = ''
    sectionCorpDeMaPage.appendChild(pageDeStaff);
    
  }
  }, 
  {nomPage:'null', 
  render(){
   let sectionCorpDeMaPage=document.querySelector('#corps-de-page section')
    let maPageAccueil=document.createElement('page-accueil');
    sectionCorpDeMaPage.innerHTML=''
  
    sectionCorpDeMaPage.appendChild(maPageAccueil);
   // console.log(location.pathname)
    
    
  }
  }
]

export {routes};
