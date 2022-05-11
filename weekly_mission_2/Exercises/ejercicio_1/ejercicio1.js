//GitHub
const repo = {
 name: "LaunchX",
 author: "Elian",
 language: "JavaScript",
 numberOfCommits: 100,
 stars: 199,
 forks: 299,
 issues_open: 10,
 issues_close: 10,
 getTotalIssues: function(){
   return this.issues_open + this.issues_close
 },
 getGeneralInfo: function(){
   return `This repository ${this.name} was created by ${this.author}`
 }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issues = {
    title: 'tituloissue',
    repositoryNameAssociated: 'LaunchX',
    status: 'valid',
    numberOfComments: 10,
    labels: 'holakace',
    author:'Elian',
    dateCreated: '20 de abril',
    lastUpdated: '1 hours',
    getTitleAndAuthor: function(){
        return `titulo: ${this.title} ------- autor: ${this.author}`
    },
    getGeneralInfo: function(){
        return `This Issues ${this.title} was created by ${this.author}`
    } 
}
console.log("Titulo:" + issues.title)
console.log("Titulo y autor: " + issues.getTitleAndAuthor())
console.log(issues.getGeneralInfo())

const pullRequest = {
    title: 'tituloPull',
    branchName: 'NombreDeBranch',
    dateCreated: '20 de abril',
    status: 'valid',
    repositoryNameAssociated: 'LaunchX',
    getStatus: function(){  
        return `Status: ${this.status}`
    },
    getGeneralInfo: function(){
        return `This PullRequest ${this.title} was created by ${this.author}`
    } 
}
console.log("Titulo:" + pullRequest.title)
console.log("Titulo y autor: " + pullRequest.getStatus())
console.log('Info:'+pullRequest.getGeneralInfo())

//Twitter
const user = {
    user: 'Elian',
    username: 'eliansanti',
    bio: '...',
    age: '22',
    getUserInfo: function(){
        return `Nombre: ${this.user}, Username: ${this.username}, Edad: ${this.age}`
    }
}
const hashtag = {
    name: 'Mothers day',
    numberOfTweets: 17000,
    numberOfVideos: 5000,
    numberOfPhotos: 7000
}

const trending_topic = {
    hashtag: hashtag,
    numberOfTweets: 17000,
    position: 1,
    category: 'general'
}


console.log('UserInfo'+ user.getUserInfo)
console.log('Trend'+ trending_topic.hashtag)
console.log('Number of Tweets'+ hashtag.numberOfTweets)


//Facebook
const posts = {
    content: '...',
    privacity:'...', 
    media: '...',
    tags: '...'
}

const biography = {
    information:{
        name:'elian',
        age:'22',
        birthday: '4 de mayo'
    },
    presentation: '...',
    posts: posts,
    profilePicture: 'picture',
    listOfFriends: '...'
}


const userFacebook = {
    name: 'Elian',
    username: 'eliansanti',
    bio: biography,
    age: 22,
    posts: posts,
    photos: '...',
    friends: '...'
}


//Uber
const profile = {
    name: 'Elian',
    username: 'eliansanti',
    home: '...',
    phoneNumber: '961123902',
    email: 'test1@test1.com'
}

const travel = {
    driver: 'nameDriver',
    initialPoint: '...',
    endPoint: '...',
    waitingTime:'...',
    cost: 250
}

