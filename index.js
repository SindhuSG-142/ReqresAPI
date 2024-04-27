const fetchUserBtn=document.getElementById('fetchUserBtn');
const userDataDisplay=document.getElementById('userDataDisplay');
fetchUserBtn.addEventListener('click', fetchUser);
async function fetchUser(){
    let response=await fetch('https://reqres.in/api/users')
    let res=await response.json();
    displayUsers(res.data)
}
function displayUsers(users){
    userDataDisplay.innerHTML=""
    users.forEach((user)=>{
        userDataDisplay.innerHTML+= `
        <div class="user-card">
                <img class="user-avatar" src="${user.avatar}" alt="">
                <div class="user-name">${user.first_name} ${user.last_name}</div>
                <div class="user-email">${user.email}</div>
            </div>
            `
    })
}