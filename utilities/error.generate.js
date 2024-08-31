export class CommonErrors extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
    getStatusCode() {
        return 400;
    }
}

export class ValidationErrors extends CommonErrors {
    constructor(message) {
        super(message);
        this.name = "InvalidData"
    }

    getStatusCode() {
        return 422;
    }
}