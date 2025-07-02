import { getUser } from '../scripts/services/user.js'
import { getRepositories } from '../scripts/services/repositories.js'

import { user } from '../scripts/objects/user.js'
import { screen } from '../scripts/objects/screen.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value 
    getUserProfile(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        getUserProfile(userName)
    }
})

async function getUserProfile(userName){
    
    const userResponse = await getUser(userName)
    user.setInfo(userResponse)
    console.log(user) 
    // user.repositories(repositories)

    screen.renderUser(user)
    
    //     getUser(userName).then(userData => {
            

    //         getUserRepositories(userName)
    // })
 }

function getUserRepositories(userName){
  getRepositories(userName).then(reposData => {
       let repositoriesItens = "" 
       
       reposData.forEach(repo => {
        repositoriesItens += `<li><a href="${repo.html_url}"target="_blank">${repo.name}</a></li>`
       })

       document.querySelector('.profile-data').innerHTML += `<div class="repositories section">
                                                               <h2>Repositórios</h2>
                                                               <ul>${repositoriesItens}</ul>
                                                               </div>`
    })
}

