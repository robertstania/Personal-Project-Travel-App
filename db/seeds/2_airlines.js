exports.seed = function(knex, Promise) {
// Deletes ALL existing entries
  return knex('airlines').del()
    .then(function () {
      // Inserts seed entries
      return knex('airlines').insert([
        {name: 'American Airlines', description: 'Domestic, International', password: 'abc'},
        {name: 'Delta Airlines', description: 'Domestic, International', password: 'abc'},
        {name: 'Southwest Airlines', description: 'Domestic', password: 'abc'},
        {name: 'United Airlines', description: 'Domestic', password: 'abc'},
        {name: 'Air Canada', description: 'Domestic, International', password: 'abc'},
        {name: 'Virgin America', description: 'International', password: 'abc'},
        {name: 'Hawaiian Airlines', description: 'Domestic', password: 'abc'},
        {name: 'Emirates Airlines', description: 'International', password: 'abc'},
        {name: 'Singapore Airlines', description: 'International', password: 'abc'},
        {name: 'Qatar Airways', description: 'Domestic', password: 'abc'}
      ]);
    });
}
