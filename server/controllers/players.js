var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = {
	index: (req, res) => {
		Player.find({}).sort('name').exec( (err, players) => {
			if(err){
				var errors=[];
				for (var i in err) {
					errors.push(err[i].message)
				}
				res.status(400).send({errors: errors})
			} else {
				res.json(players)
			}
		})
	},

	create: (req, res) => {
		var player = new Player({
			name: req.body.name,
			position: req.body.position
		})

		player.save( (err) => {
			if(err) {
				var errors = [];
				for (var i in err) {
					errors.push(err[i].message);
				}
				res.status(400).send({errors: errors})
			} else {
				console.log("Successfully added a player");
				res.json(true);
			}
		});
	},

	play: (req, res) => {
		Player.findOne({_id: req.params.player_id}, (err, player) => {
			if(err) {
				var errors = [];
				for (var i in err) {
					errors.push(err[i].message);
				}
				res.status(400).send({errors: errors})
			} else {
				if (req.params.game_number == 1){
					player.game1 = "playing";
				}
				if (req.params.game_number == 2){
					player.game2 = "playing";
				}
				if (req.params.game_number == 3){
					player.game3 = "playing";
				}
				player.save( (err) => {
					if(err) {
						for (var i in err) {
							errors.push(err[i].message);
						}
						res.status(400).send({errors: errors});
					} else {
						res.json(true);
					}
				})
			}
		});	
	},

	not: (req, res) => {
		Player.findOne({_id: req.params.player_id}, (err, player) => {
			if(err) {
				var errors = [];
				for (var i in err) {
					errors.push(err[i].message);
				}
				res.status(400).send({errors: errors});
			} else {
				if (req.params.game_number == 1){
					player.game1 = "not";
				}
				if (req.params.game_number == 2){
					player.game2 = "not";
				}
				if (req.params.game_number == 3){
					player.game3 = "not";
				}
				player.save( (err, saved_player) => {
					if(err) {
						for (var i in err) {
							errors.push(err[i].message);
						}
						res.status(400).send({errors: errors});
					} else {
						res.json(true);
					}
				})
			}
		});	
	},

	undecided: (req, res) => {
		Player.findOne({_id: req.params.player_id}, (err, player) => {
			if(err) {
				var errors = [];
				for (var i in err) {
					errors.push(err[i].message);
				}
				res.status(400).send({errors: errors})
			} else {
				if (req.params.game_number == 1){
					player.game1 = "undecided";
				}
				if (req.params.game_number == 2){
					player.game2 = "undecided";
				}
				if (req.params.game_number == 3){
					player.game3 = "undecided";
				}
				player.save( (err) => {
					if(err) {
						for (var i in err) {
							errors.push(err[i].message);
						}
						res.status(400).send({errors: errors});
					} else {
						res.json(true);
					}
				})
			}
		});	
	},

	delete: (req, res) => {
		Player.remove({_id: req.params.player_id}, (err, player) => {
			if(err){
				var errors=[];
				for (var i in err) {
					errors.push(err[i].message)
				}
				res.status(400).send({errors: errors})
			} else {
				res.json(true)
			}
		});
	}
}