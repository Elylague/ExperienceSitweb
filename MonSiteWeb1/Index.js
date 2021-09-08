
const lesAncres=document.querySelectorAll('a');
window.addEventListener('load', apresPageCharger)
function apresPageCharger(){
//PARSER LE PATHNAME
  let chemin=location.pathname;
  let derneIndex=location.pathname.length
  //console.log(derneIndex)
  let chemin1=chemin.substring(13, derneIndex);
//FAIRE UN BOUCLE SUR LESANCLES
for(let i=0;i<lesAncres.length;i++){
 let toutAncre= lesAncres[i]
    toutAncre.className=''
ajouterClassActiver(toutAncre, i)
}

// la fonction ajouterClassActiver()

 function ajouterClassActiver(tabAncre, id){
  
  switch (chemin1){
    case 'Index.html':
  
 lesAncres[0].className='activer-onglet'
    break
    case 'PageCours.html':
      //console.log(tabAncre[1])
  lesAncres[1].className='activer-onglet'
    break
    case 'PageMedia.html':
  lesAncres[2].className='activer-onglet'
    break
    case 'PageStaff.html':
    lesAncres[3].className='activer-onglet'
  }
  //console.log(chemin1)
  
 // console.log(lesAncres)
  //console.log(lesAncres);
 
  
}

   
  
  
}




