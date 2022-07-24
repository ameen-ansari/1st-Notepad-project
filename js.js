let save = document.getElementsByClassName('save')[0]
let parent = document.getElementsByClassName('parent')[0]
let note = document.getElementsByClassName('note')[0] 
let title = document.getElementsByClassName('title')[0] 
console.log(save);
console.log(parent);
console.log(note);
console.log(title);
var index=1
save.addEventListener('click',function(){
    if (title.value === null) {
        alert('please insert title & Notes')
    }else{
    parent.innerHTML +=`<div class="card text-dark bg-light mx-2 my-1" style="max-width: 18rem;">
    <div class="card-header"><b>Notes${index++}</b></div>
    <div class="card-body">
    <h5 class="card-title">${title.value}</h5>
    <p class="card-text">
    ${note.value}
    </p>
    <button class="py-1 px-2 rounded delete"><b>Delete Note</b> </button>
    </div>
    </div>`
    title.value = "";
    note.value = "";}
})