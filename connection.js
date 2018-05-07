const Sequelize = require('sequelize');
var sequelize = new Sequelize('test_framework', 'test', 'test', {
    host: 'localhost',
    dialect: 'postgres',
});

var User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    lastName: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});

sequelize.sync({force: true}).then((val) => {
    sequelize.close();
});
// User.sync({force: false}).then(function () {
//     Table created
//     return User.create({
//         firstName: 'Lee',
//         lastName: 'Junjie'
//     });
// }).then(function(user) {
//     console.log(user.get('firstName')); // John Doe (SENIOR ENGINEER)
//     console.log(user.get('lastName')); // SENIOR ENGINEER
// })

var Project = sequelize.define('project', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT
},{ timestamps: false,})

var Task = sequelize.define('task', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    deadline: Sequelize.DATE
},{ timestamps: false,})

Task.belongsTo(Project);