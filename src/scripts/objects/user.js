const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    
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

    
    setEvents(gitHubEvents) {
            const filteredEvents = gitHubEvents.filter(event => 
            event.type === 'CreateEvent' || event.type === 'PushEvent'
        );
       
        this.events = filteredEvents.slice(0, 10).map(event => {
            if (event.type === 'PushEvent') {
                const commitMessage = event.payload.commits && event.payload.commits.length > 0
                    ? event.payload.commits[0].message
                    : 'Sem mensagem de commit detalhada';
                
                return {
                    type: event.type,
                    repoName: event.repo.name,
                    message: commitMessage
                };
            } else if (event.type === 'CreateEvent') {
                return {
                    type: event.type,
                    repoName: event.repo.name, 
                    message: 'Sem mensagem de commit' 
                };
            }
            
            return null; 
        }).filter(event => event !== null); 
    }
}

export { user }