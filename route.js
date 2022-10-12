//export let sectionCorpDeMaPage=document.querySelector('corp-de-page section')
let routes=[
  {nomPage:'Accueil', 
  render(){
   let sectionCorpDeMaPage=document.querySelector('corp-de-page section')
    let maPageAccueil=document.createElement('page-accueil');
    sectionCorpDeMaPage.innerHTML=''
  
    sectionCorpDeMaPage.appendChild(maPageAccueil);
    console.log(location.pathname)
    
    
  }
  }, 
  {nomPage:'Cours',
  render(){
    let sectionCorpDeMaPage=document.querySelector('corp-de-page section')
    let pageDeCours = document.createElement('page-cours');
    sectionCorpDeMaPage.innerHTML=''
    sectionCorpDeMaPage.appendChild(pageDeCours);
   // console.log(history.state.nomDePage);
  }
  }, 
  {nomPage:'Media', 
  render(){
    let sectionCorpDeMaPage=document.querySelector('corp-de-page section')
    let pageDeMedia = document.createElement('page-media');
    sectionCorpDeMaPage.innerHTML=''
    sectionCorpDeMaPage.appendChild(pageDeMedia);
    //console.log(history.state.nomDePage);
  }
  }, 
  {nomPage:'Staff', 
  render(){
    let sectionCorpDeMaPage=document.querySelector('corp-de-page section')
   // console.log(history.state.nomDePage);
    let pageDeStaff = document.createElement('page-staff');
    sectionCorpDeMaPage.innerHTML = ''
    sectionCorpDeMaPage.appendChild(pageDeStaff);
    
  }
  }
]

export {routes};
