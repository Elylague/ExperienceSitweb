

const getCoursJson={

async getMathJson (urlMath){
  try{
  const response=await fetch(urlMath);
  if (!response.ok) {
    throw new Error(`${urlMath}: ${response.statusText}`)
  } else {
    const dataMath=await response.json();
    const stringMath=JSON.stringify(dataMath);
    window.sessionStorage.setItem('mathTe', stringMath);
   // console.log(dataMath);
    console.log('je suis getMathJason')
   // console.log(stringMath);
   // return dataMath;
   // console.log(dataMath[0].mathematiqueTerminale);
  }
  }catch(e){
    console.log(e.message)
  }
  console.log('je suis dans la methode getMathJson');
  let dataJson = window.sessionStorage.getItem('mathTe');
  dataJson=JSON.parse(dataJson);
 // getDataAndForEachThem(dataJson)

}
}

//getCoursJson.getMathJson('./mathematiques.json');



export {getCoursJson}



/*
let tabMath=[];

const getDataAndForEachThem=(data)=> {
  
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
    
    let brancheMath=mathCours[tabMath[4]]
    forEachOnBranchMath(brancheMath)
   // console.log(brancheMath);
  
  })
  //console.log(tabMath)
//  createDatalist()
 //return {tabMath};
}



function forEachOnBranchMath(brancheMa){
  
 console.log(brancheMa)
  
}





let tabCour=['mathematiques', 'Physiques', 'Chimie', 'Créole', 'Français']

   //const dataListe = document.createElement('datalist');

  class ForEachOnData {
    constructor(branche,dataList, option, attrib) {
      this.dataList = dataList, 
      this.option=option, 
      this.attrib=attrib
      this.branche=branche
    }
    
    get forLoopOnBranch(){
      const dataListe=document.createElement(this.dataList);
      for(let cours of this.branche){
         //const dataLis = document.createElement(this.dataList);
         const options = document.createElement(this.option);
         options.text=cours
         //console.log(options);
        // options.appendChild(cours);
         dataListe.id=this.attrib
         dataListe.appendChild(options)
        // console.log(dataListe)
        
      }
      
      
      return dataListe;
    }
    
    get createElementLi(){
      const ul = document.createElement(this.dataList);
      for (let cours of this.branche) {
        //const dataLis = document.createElement(this.dataList);
        const li = document.createElement(this.option);
        li.innerHTML=cours
        //console.log(options);
        // options.appendChild(cours);
        ul.classList.add(this.attrib);
        ul.appendChild(li)
       // console.log(ul)
        }
        return ul;
      
    }
    
    
  }
  
  let instanceDataliste=new ForEachOnData(tabCour, 'datalist', 'option', 'cours-math' )
  
 let dataListes=instanceDataliste.forLoopOnBranch
//console.log(datalistes);

let listeLi=new ForEachOnData(tabCour, 'ul', 'li', 'cours-math');
let lesListe=listeLi.createElementLi
//console.log(lesListe);
const divInput=document.querySelector('.div-input');
const inputCours=document.querySelector('.input-cours');
divInput.appendChild(dataListes)
//console.log(divInput);
//console.log(divInput);
*/
