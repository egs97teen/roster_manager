var players = require('../controllers/players.js');

module.exports = (app) => {
	app.get('/api/players', players.index);
	app.get('/api/players/play/:player_id/:game_number', players.play);
	app.get('/api/players/not/:player_id/:game_number', players.not);
	app.get('/api/players/undecided/:player_id/:game_number', players.undecided);
	app.post('/api/players/add', players.create);
	app.delete('/api/players/delete/:player_id', players.delete);
}