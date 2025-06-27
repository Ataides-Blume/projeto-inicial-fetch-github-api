async function user(){
    const response = await fetch('https://api.github.com/users/ataides-blume')
    return await response.json()
}

console.log(await user())

// function getUserProfile(userName){
//     user(userName).then(userData => {
//         let userInfo = `<img src="${userData.avatar_url}" alt="Foto de perfil do usuário" />
//         <div class="data">
//         <h1>${userData.name ?? 'Não possui nome cadastrado'}</h1>
//         <p>${userData.bio ?? 'Não possui bio cadastrada'}</p> </div>`

//         document.querySelector('.profile-data').innerHTML = userInfo

        
//     })
// }

// getUserProfile('ataides-blume')