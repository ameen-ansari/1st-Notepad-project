let reset = document.getElementsByClassName('reset')[0];
let save = document.getElementsByClassName('save')[0];
let title = document.getElementsByClassName('title')[0];
let note = document.getElementsByClassName('note')[0];
let parent = document.getElementsByClassName('parent')[0];
del = document.getElementsByClassName('del')[0]
index = 1

save.addEventListener('click',()=>{
  if(title.value.length === 0 || note.value.length === 0){
    alert('Please insert title & notes')
  }
  else{
    parent.innerHTML += `<div class="card mx-1 my-1" style="max-width: 18rem;">
    <div class=" d-block mx-auto rounded text-dark"><i>Note${index++}</i></div>
    <div class="card-body">
    <h5 class="card-title text-dark">${title.value}</h5>
      <p class="card-text">${note.value}</p>
      <button class="del rounded-pill px-3 py-1 d-block mx-auto" onclick="del(this)">Delete</button>
      </div>
  </div>`
  title.value = ""
  note.value = ""
}})
del = (e)=>{
  e.parentElement.parentElement.remove()
}
reset.addEventListener('click',()=>{
  conf = confirm('You are really want to delete all notes?')
  if(conf === true){
    parent.innerHTML = ""
  }
})