class Calendar {
    constructor() {
        this.category = [];
        this.title = "";
        this.location = "";
        this.summary = "";
        this.url = "";
        this.image = "";
        this.origin = "";
        this.status = {
            approved : false,
            featured : false,
            priority : false
        };
        this.contact = {
            name : "",
            phone : "",
            email : "",
            department : ""
        };
        this.period = {
            startDate : new Date(),
            startTime : new Date(),
            endDate : new Date(),
            endTime : new Date()
        };
        this.digests = {
            first : new Date(),
            second : new Date()
        };
        this.submission = new Date();
    }

    getValue() {
        return this;
    }
    
    
}

export default {
    Calendar
}