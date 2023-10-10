class EventModel {
    title
    description
    eitherDescription
    question;
    orDescription
    eitherConsequences
    orConsequences
    done


    constructor(title, description, question, eitherDescription, orDescription, eitherConsequences, orConsequences, done) {
        this.title = title;
        this.description = description;
        this.question = question;
        this.eitherDescription = eitherDescription;
        this.orDescription = orDescription;
        this.eitherConsequences = eitherConsequences;
        this.orConsequences = orConsequences;
        this.done = done;
    }
}

export default EventModel