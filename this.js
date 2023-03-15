const relationship1 ={
    name : "one",
    friends : ["hi", "hello", "bye"],
    logFriends() {
        let that = this;
        this.friends.forEach(function(friend){
            console.log(that.name,friend);
        });
    }
}

relationship1.logFriends();

const relationship2 ={
    name : "two",
    friends : ["hi", "hello", "bye"],
    logFriends() {
        this.friends.forEach((friend)=>{
            console.log(this.name,friend);
        });
    }
}

relationship2.logFriends();