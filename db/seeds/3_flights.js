
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flights').del()
    .then(function () {
      // Inserts seed entries
      return knex('flights').insert([
        {start: 'Phoenix', destination: 'Rio de Janeiro', airline_id: 2},
        {start: 'Phoenix', destination: 'Denver', airline_id: 5},
        {start: 'Amsterdam', destination: 'Phoenix', airline_id: 9}
      ]);
    });
};
