class Consequences {
    deltaFollower
    description;
    deltaFame


    constructor(description, deltaFollower, deltaFame) {
        this.description = description;
        this.deltaFollower = deltaFollower;
        this.deltaFame = deltaFame;
    }

    apply(context) {
        const {fameState: [fame, setFame], followersState: [followers, setFollowers]} = context
        setFame(fame + this.deltaFame)
        setFollowers(followers + this.deltaFollower)
    }
}

export default Consequences