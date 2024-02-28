const loadComments =()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res =>res.json())
    .then(data =>console.log(data))
    .catch(error =>console.log('Error Happened',error))
}

const loadComments2 = async() =>{
    try{
        const res =await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        console.log(data);
    }
    catch(error){
        console.log('Data load Error');
    }
}