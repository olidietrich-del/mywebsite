async function loadUser() { 
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const personName=document.querySelector ("#person-name");
    personName.innerText=data.results[0].name.last;

    const personEmail=document.querySelector ("#person-e-mail");
    personEmail.innerText=data.results[0].email;
    console.log(data.results[0].login.username);
    console.log(data.results[0].name.last);
} 
loadUser();
