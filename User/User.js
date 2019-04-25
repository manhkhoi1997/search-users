const lodash = require('lodash');

class User {
    constructor(id, name) {
        this.id     = id;
        this.name   = name;
    }
    getPresentationName() {
        return lodash.startCase(this.name);
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
}

module.exports = User;
