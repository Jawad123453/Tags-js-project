let placing=document.querySelector(".placing");
let maininput=document.querySelector(".maininput input");
let removeall=document.querySelector(".removeall");
let anynumber=document.querySelector(".anynumber")
let mainarray=[];
let newmainarray=[];
let tagsnumbers=10;
anynumber.innerText=tagsnumbers;

function makingup(mainone){
  placing.innerHTML="";
  tagsnumbers=10;
  anynumber.innerText=tagsnumbers;
  for(let i=0;i<mainone.length;i++){
    let span=document.createElement("span");
    span.innerText=mainone[i];
    let button=document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",function(){
      // mainone.slice(mainone.indexof(button.parentElement,1));
      button.parentElement.remove();
      tagsnumbers++;
      anynumber.innerText=tagsnumbers;
    })
    span.appendChild(button);
    placing.appendChild(span);
    tagsnumbers--;
    anynumber.innerText=tagsnumbers;
}
}

maininput.addEventListener("keypress",function(event){
  if(event.key === "Enter" && event.target.value){
    if(tagsnumbers > 0){
      if(maininput.value.split("").includes(",")){
        // for(let i=0;i<maininput.value.split(",").length;i++){
          let contq=maininput.value;
          contq.split(",").forEach(e => {
            mainarray.push(e);
          });
          contq="";
          maininput.value="";
          newmainarray=[...new Set(mainarray)]
          makingup(newmainarray)
        // }
      }else{
        mainarray.push(maininput.value);
        maininput.value="";
        newmainarray=[...new Set(mainarray)]
        makingup(newmainarray)
      }
    }else{
      maininput.value="";
    }
  }
})

removeall.addEventListener("click",function(){
  mainarray=[];
  tagsnumbers=10;
  placing.innerHTML="";
  anynumber.innerText=tagsnumbers;
})