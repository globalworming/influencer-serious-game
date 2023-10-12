class EventModel {
    title
    description
    eitherDescription
    question;
    orDescription
    eitherConsequences
    orConsequences


    constructor(title, description, question, eitherDescription, orDescription, eitherConsequences, orConsequences) {
        this.title = title;
        this.description = description;
        this.question = question;
        this.eitherDescription = eitherDescription;
        this.orDescription = orDescription;
        this.eitherConsequences = eitherConsequences;
        this.orConsequences = orConsequences;
    }
}

export default EventModel