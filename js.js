let save = document.getElementsByClassName('save')[0]
let parent = document.getElementsByClassName('parent')[0]
let note = document.getElementsByClassName('note')[0] 
let title = document.getElementsByClassName('title')[0] 
let card = document.getElementsByClassName('cardb')
let delbtn = document.getElementsByClassName('delbtn')[0]
let del = document.getElementsByClassName('delete');
console.log(save);
console.log(parent);
console.log(note);
console.log(title);
var index=1
btnhtml = ` <button class="rounded" ><b>Delete Note</b> </button>`
console.log(btnhtml);
save.addEventListener('click',function(){
    if (title.value.length === 0 || note.value.length === 0) {
        alert('Please insert title & Notes');
    }else{
        parent.innerHTML +=`<div class="card text-dark bg-light mx-2 my-1 cardb style="max-width: 18rem;">
    <div class="card-header">Notes${index++}</div>
    <div class="card-body">
    <h5 class="card-title">${title.value}</h5>
    <p class="card-text">
    ${note.value}</p>
   <div>${btnhtml}</div>
    </div>
    </div>`
    title.value = "";
    note.value = "";
    }
})
delbtn.addEventListener('click',()=>{
    promp = confirm('You are really want to delete all notes')
    if(promp == true){
        parent.innerHTML = ""
    }
})