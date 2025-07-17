// const screen = {
//     userProfile: document.querySelector('.profile-data'),
//     renderUser(user){
//         this.userProfile.innerHTML = `<div class="info">
//                     <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" />
//                     <div class="data">
//                             <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
//                             <p>${user.bio ?? 'Não possui bio cadastrada'}</p>

//                              <p>Seguidores:${user.followers}</P>
//                              <p>Seguindo:${user.following}</p>
//                     </div>
//                     </div>`
//         let repositoriesItens = '' 
//         user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`) 
//         if(user.repositories.length > 0){
//         this.userProfile.innerHTML+= `<div class="repositories section">
//                                       <h2>Repositórios</2>
//                                       <ul>${repositoriesItens}</ul>
//                                       </div> `
//        }
//     },
//     renderNotFound(){
//         this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
//     }
// }

// export { screen }       
       
        
   // src/scripts/screen.js

const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class="info">
                <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" />
                <div class="data">
                    <h1>${user.name ?? 'Não possui nome cadastrado :('}</h1>
                    <p>${user.bio ?? 'Não possui bio cadastrada :('}</p>
                    <hr class="profile-divider"> <div class="profile-stats"> <p>👥 Followers: ${user.followers}</p>
                        <p>➡️ Following: ${user.following}</p>
                    </div>
                </div>
            </div>
            <div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${this.renderRepositories(user.repositories)}</ul>
            </div>
            
            <div class="events section">
                <h2>Eventos</h2>
                <ul>${this.renderEvents(user.events)}</ul>
            </div>
        `;
    },

    // renderRepositories(repositories) {
    //     let repositoriesItems = '';
    //     if (repositories.length > 0) {
    //         repositories.forEach(repo => repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`);
    //     } else {
    //         repositoriesItems = '<li>Nenhum repositório encontrado.</li>';
    //     }
    //     return repositoriesItems;
    // },

renderRepositories(repositories) {
        let repositoriesItems = '';
        if (repositories.length > 0) {
            repositories.forEach(repo => repositoriesItems += `
                <li>
                    <a href="${repo.html_url}" target="_blank">
                        <h3>${repo.name}</h3>
                        <p>
                            <span>Fork🍴${repo.forks_count ?? 0} </span>
                            <span>Estrelas⭐️${repo.stargazers_count ?? 0} </span>
                            <span>Watchers👀${repo.watchers_count ?? 0} </span>
                        </p>
                        <p>Linguagem💻:${repo.language ?? 'Não informada'}</p>
                    </a>
                </li>
            `);
        } else {
            repositoriesItems = '<li>Nenhum repositório encontrado.</li>';
        }
        return repositoriesItems;
    },


    // NOVA FUNÇÃO para renderizar os eventos - Adicione esta função dentro do objeto screen
    renderEvents(events) {
        let eventsItems = '';
        if (events.length > 0) {
            events.forEach(event => {
                eventsItems += `
                    <li>
                        <strong>${event.repoName}</strong>  <span class="event-message">  &nbsp;&nbsp; - ${event.message}</span>
                    </li>
                `;
            });
        } else {
            eventsItems = '<li>Nenhum evento recente encontrado.</li>';
        }
        return eventsItems;
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }    