
const  locationHref=()=>  {

  let path = window.location.href;
  return path;

}



const injecterDansDOM=()=> {
  const divApp= document.querySelector('#container');

  path=locationHref()
  path = path.replace('/index.html', '')
  console.log(path);
  window.history.replaceState({}, '',path );
  const h3=document.createElement('h3');
  h3.innerHTML=`<h3>une deuxième élément h3 dans la page</h3>`
 // console.log(divApp);
 divApp.appendChild(h3);
 //console.log(divApp);
  
  
}






window.addEventListener('load', injecterDansDOM);
