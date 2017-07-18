const settings = require("../.vscode/settings.json"); // settings.json
const knex = require('knex')({
    client: 'pg',
    connection: {
        user: settings.user,
        password: settings.password,
        database: settings.database,
        host: settings.hostname,
        port: settings.port,
        ssl: settings.ssl
    }
});


// function yearMonthDay(date) {
//     const newDate = moment(new Date(date));
//     return newDate;
// }


knex('famous_people')
.insert({first_name: process.argv[2],
last_name: process.argv[3],
birthdate: process.argv[4]})
.then (data => console.log(data));

    return knex.destroy();

// client.connect((err, name) => {
//     if (err) {
//         return console.error("Connection Error", err);
//     }
//     client.query('SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1', [process.argv[2]], (err, result) => {
//         if (err) {
//             return console.error("error running query", err);
//         }
//         console.log("Searcing...")
//         console.log("Found 1 person(s) by the name", "'" + process.argv[2] + "'")
//         console.log(`- ${result.rows[0].id}: ${result.rows[0].first_name} ${result.rows[0].last_name}, born '${yearMonthDay(`${result.rows[0].birthdate}`).format('YYYY-MM-Do')}' `);
//         client.end();
//     });
// });