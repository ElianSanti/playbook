class Repository{
    constructor(name,author,language,
        numberOfCommits,stars,forks,
        issues_open,issues_close){
        this.name = name;
        this.author = author;
        this.language = language;
        this.numberOfCommits = numberOfCommits;
        this.stars = stars;
        this.forks = forks;
        this.issues_open = issues_open;
        this.issues_close = issues_close;
    }

    getTotalIssuies(){
        return this.issues_open + this.issues_close
    }

    getGeneralInfo(){
        return `This Repository ${this.name} was created by ${this.author}`
    }
}

class Issues{
    constructor(title, repositoryNameAssociated, status, 
                numberOfComments, labels, author,
                dateCreated, lastUpdated){
        this.title = title;
        this.repositoryNameAssociated = repositoryNameAssociated;
        this.status = status;
        this.numberOfComments = numberOfComments;
        this.labels = labels;
        this.author = author;
        this.dateCreated = dateCreated;
        this.lastUpdated = lastUpdated;
    }

    getTitleAndAuthor(){
        return `titulo: ${this.title} \nAuthor: ${this.author} `
    }

    getGeneralInfo(){
        return `This Issues ${this.title} was created by ${this.author}`
    }
}

class PullRequest{
    constructor(title, branchName, dateCreated,
                status, repositoryNameAssociated){
        this.title = title;
        this.branchName = branchName;
        this.dateCreated = dateCreated;
        this.status = status;
        this.repositoryNameAssociated = repositoryNameAssociated;
    }

    getStatus(){
        return `Status ${this.status}` 
    }

    getGeneralInfo(){
        return `This PullRequest ${this.title} was created by ${this.author}`
    }
}

//Twitter\
class User {
    constructor(user, username, bio, age){
        this.user = user;
        this.username = username
        this.bio = bio;
        this.age = age
    }

    getUserInfo(){
        return `Nombre: ${this.user}, Username ${this.username}, Edad: ${this.age}`
    }
}

class Hashtag{
    constructor(name, numberOfTweets, numberOfVideos, numberOfPhotos){
        this.name = name;
        this.numberOfTweets = numberOfTweets;
        this.numberOfVideos = numberOfVideos;
        this.numberOfPhotos = numberOfPhotos;
    }
}

class Trending_topic{
    constructor(hashtag, numberOfTweets, position, category){
        this.hashtag = hashtag;
        this.numberOfTweets = numberOfTweets;
        this.position = position;
        this.category = category;
    }
}

//Facebook
class Posts{
    constructor(content,privacity,media,tags){
        this.content = content;
        this.privacity = privacity;
        this.media = media;
        this.tags = tags;
    }
}

class Biography{
    constructor(information, presentation, posts, profilePicture,listOfFriends){
        this.information = information;
        this.presentation = presentation;
        this.posts = posts;
        this.profilePicture = profilePicture;
        this.listOfFriends = listOfFriends;
    }
}

class UserFacebook{
    constructor(name,username,bio,age,posts,photos,friends){
        this.name = name;
        this.username = username;
        this.bio = bio;
        this.age = age;
        this.posts = posts;
        this.photos = photos;
        this.friends = friends
    }
}

//Uber
class Profile{
    constructor(name, username, home, phoneNumber,email){
        this.name = name;
        this.username = username;
        this.home = home;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

class Travel{
    constructor(driver,initialPoint,endPoint,waitingTime,costs){
        this.driver = driver;
        this.initialPoint = initialPoint;
        this.endPoint = endPoint;
        this.waitingTime = waitingTime;
        this.costs = costs;
    }
}
