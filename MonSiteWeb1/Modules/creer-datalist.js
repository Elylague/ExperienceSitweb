function CreerDataList(Dlist,option, tabData, ID){
  this.Dlist=Dlist;
  this.option=option;
  this.tabData=tabData;
  this.ID=ID;
  this.createTag=function(){
   let tagdataliste=document.createElement(this.Dlist);
   tagdataliste.id=this.ID
  
  // BOUCLE POUR tabData
   
   for(let Cours of this.tabData){
   let Options=document.createElement(this.option)
   Options.text=Cours
   tagdataliste.appendChild(Options)
    }
  
   
   return tagdataliste;
   
  };
};

export {CreerDataList};