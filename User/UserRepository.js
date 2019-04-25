const User = require('./User');

class UserRepository {
    constructor(knex) {
        this.knex = knex;
    }
    async getUser(name) {
        let results = await this.knex.select('*').from('users').where('user', 'like', '%' + name + '%');
        return results.map(result => new User(result.id, result.user));
    }
    async addUser(name) {
        
        return await this.knex('users').insert({user : name})

        
    }
 }

module.exports = UserRepository;
