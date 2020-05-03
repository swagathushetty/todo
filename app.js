//1.1
const addForm=document.querySelector('.add');
const list=document.querySelector('.todos')
const search=document.querySelector('.search')


//refer docs 1.3
const generateTemplate=(todo)=>{
    const html =`<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>`

            list.innerHTML+=html
            addForm.add.value=''
}

//refer docs 1.2
//adding todos
addForm.addEventListener('submit',e=>{
    e.preventDefault()
    const todo=addForm.add.value;

    if(todo.length){
        generateTemplate(todo)
    }
})

//refer docs 1.4
//delete todos
//check if we clicked the delete icon that contains class of delete
//parent of icon is the li tag
list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})


//refer docs 1.5
const filterTodos=(Term)=>{

    const term=Term.toLowerCase()
    const res=[...list.children].
    filter((todo)=>{
        return !todo.textContent.includes(term)
    }).
    forEach((todo)=>{
        todo.classList.add('filtered')
    })

    const f=[...list.children].
        filter((todo) => {
            return todo.textContent.includes(term)
        }).
            forEach((todo) => {
                todo.classList.remove('filtered')
            })

    

    console.log(res)
}


//refer docs 1.6
//search
search.addEventListener('keyup',e=>{
    console.log(e.target.value)
    const term=e.target.value.trim();
    filterTodos(term)
})