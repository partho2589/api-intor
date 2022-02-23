function lodaPosts (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
lodaPosts()

function displayPosts (posts){
    const postcontainer = document.getElementById('posts')
    for(const post of posts){
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>

        `
        postcontainer.appendChild(div)
    }
 
}


function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts'),{
        method:'POST',
         body:JSON.stringify({
             title: 'My new post',
             body: 'This is my post',
             userId:1
         }),
         headers:{
            'Content-type': 'application/json; charset=UTF-8'
         }
         
    }
    .then(res => res.json)
    .then( data => console.log(data))
}