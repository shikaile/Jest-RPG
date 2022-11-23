const inquirer = require('inquirer')
const Enemy = require('./Enemy')
const Player = require('./Player')

function Game(){
    this.roundnumber = 0;
    this.isPlayerturn = false;
    this.enemies =[];
    this.currentEnemy;
    this.player;

    Game.prototype.initializeGame = function(){
        this.enemies.push(new Enemy('goblin', 'sword'));
        this.enemies.push(new Enemy('orc', 'bat'));
        this.enemies.push(new Enemy('skeleton', 'axe'));

        this.currentEnemy = this.enemies[0];

        inquirer.prompt({
            type: 'text',
            name:'name',
            message: 'What is your player name?'
        })
        //destructure name from the prompt object
        .then(({name}) => {
            this.player = new Player(name);

            //object creation test
            this.startNewBattle(this.currentEnemy, this.player);
        });
    };
}

module.exports = Game;
