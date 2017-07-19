exports.up = function(knex, Promise) {  
  return Promise.all([
    knex.schema.createTable('milestones', function(t){
      t.increments('id').unsigned().primary();
      t.string('description');
      t.dateTime('date_achieved');
    })
  ])
};

exports.down = function(knex, Promise) {  
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};