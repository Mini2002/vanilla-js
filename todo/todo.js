document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('form').onsubmit = function(e){
        e.preventDefault()
        const task = document.querySelector('#task').value
        console.log(task)
    }

})