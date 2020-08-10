const db = require('./models');
const { query } = require('express');

db.user.create({
    firstName: 'Alpha',
    lastName: 'Martinez',
    age: 24,
    email: 'martinezalpha@gmail.com'
}).then(data => {
    console.log(data)
    //you can access the newly created task via the variable data
})

//search by id
db.user.findOne({
    where: { id: 2 }
}).then(user => {
    // user will be an instance of User and stores the content of the 
    //table entry with id 2. if such an entry is not defined you 
    //will get null 
    console.log('==== user 2 ====');
    console.log(user.dataValues);
})

db.user.findOrCreate({
    where: {
        firstName: 'Brian',
        lastName: 'Smith'
    },
    defaults: { age: 88, email: 'kv@email.com' }
}).then(([user, created]) => {
    console.log(created);
    console.log(user.dataValues);
})

