const pg = require("pg");
const settings = require("../.vscode/settings.json"); // settings.json
const moment = require('moment');

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

function yearMonthDay(date){
    const newDate = moment(new Date(date));
    return newDate;
}

client.connect((err, name) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query('SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1', [process.argv[2]], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log("Searcing...")
    console.log("Found 1 person(s) by the name", "'" + process.argv[2] + "'")
    console.log(`- ${result.rows[0].id}: ${result.rows[0].first_name} ${result.rows[0].last_name}, born '${yearMonthDay(`${result.rows[0].birthdate}`).format('YYYY-MM-Do')}' `); 
    client.end();
  });
});