document.addEventListener('DOMContentLoaded', function(){
    // document.querySelector('#submit').addEventListener('click', function(){
    //     alert('submitted')
    // })

    // document.querySelector('#name').addEventListener()

    document.querySelector('form').onsubmit = function(){
        const name = document.querySelector('#name').value
        alert(`Hello , ${name}`)
    }
});