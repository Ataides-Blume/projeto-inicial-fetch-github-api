// const user = {
//      avatarUrl: '',
//      name: '',
//      bio: '',
//      userName:'',
     
//      followers:'',
//      following:'',
//      repositories: [],
     
//      setInfo(gitHubUser){
//           this.avatarUrl = gitHubUser.avatar_url
//           this.name = gitHubUser.name
//           this.bio = gitHubUser.bio
//           this.userName = gitHubUser.login

//           this.followers = gitHubUser.followers
//           this.following = gitHubUser.following
//      },
//      setRepositories(repositories){
//           this.repositories = repositories
//      }
// }

// export{ user }




// src/scripts/objects/user.js

const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    // Adicione a nova propriedade para armazenar os eventos
    events: [],

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
    },

    setRepositories(repositories) {
        this.repositories = repositories
    },

    // Novo método para definir e filtrar os eventos
    setEvents(gitHubEvents) {
        // Filtra os eventos para incluir apenas 'CreateEvent' e 'PushEvent'
        const filteredEvents = gitHubEvents.filter(event => 
            event.type === 'CreateEvent' || event.type === 'PushEvent'
        );

        // Mapeia os eventos filtrados para um formato mais limpo e com a mensagem/tipo correta
        // E limita a 10 eventos, conforme solicitado
        this.events = filteredEvents.slice(0, 10).map(event => {
            if (event.type === 'PushEvent') {
                const commitMessage = event.payload.commits && event.payload.commits.length > 0
                    ? event.payload.commits[0].message
                    : 'Sem mensagem de commit detalhada'; // Fallback caso não haja commit message
                
                return {
                    type: event.type,
                    repoName: event.repo.name,
                    message: commitMessage
                };
            } else if (event.type === 'CreateEvent') {
                return {
                    type: event.type,
                    repoName: event.repo.name, // CreateEvent também tem nome do repositório
                    message: 'Sem mensagem de commit' // Conforme solicitado
                };
            }
            // Retorna null ou undefined para tipos de evento não esperados (embora já filtrados)
            return null; 
        }).filter(event => event !== null); // Remove qualquer 'null' se o filtro anterior não for perfeito
    }
}

export { user }