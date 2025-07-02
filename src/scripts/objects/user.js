const user = {
     avatarUrl: '',
     name: '',
     bio: '',
     userName:'',
     repositories: [],
     setInfo(gitHubUser){
          this.avatarUrl = gitHubUser.avatar_url
          this.name = gitHubUser.name
          this.bio = gitHubUser.bio
          this.userName = gitHubUser.login
     },
     setRepositories(){
          this.repositories = this.repositories
     }
}

export{ user }