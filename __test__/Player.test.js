const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');

const Player = require('../lib/Player');

    test('creates a player object', () => {
        const player = new Player('Dave');

        expect(player.name).toBe('Dave');
        expect(player.health).toEqual(expect.any(Number));
        expect(player.strength).toEqual(expect.any(Number));
        expect(player.agility).toEqual(expect.any(Number));

        expect(player.inventory).toEqual(
            expect.arrayContaining([expect.any(Object)])
        );
    });
    test('gets player stats as object', ()=>{
        const player = new Player('Dave');

        expect(player.getStats()).toHaveProperty('potions');
        expect(player.getStats()).toHaveProperty('health');
        expect(player.getStats()).toHaveProperty('strength');
        expect(player.getStats()).toHaveProperty('agility');
    });
    test('get inventory from player or return false', ()=>{
        const player = new Player('Dave');

        expect(player.getInventory()).toEqual(expect.any(Array));

        player.inventory = [];

        expect(player.getInventory()).toEqual(false);
    });

    test('gets player health value', () => {
        const player = new Player('Dave');

        expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
    });

    test('checks if palyer is alive or now', () => {
        const player = new Player('Dave');

        expect(player.isAlive()).toBeTruthy();

        player.health = 0;

        expect(player.isAlive()).toBeFalsy();
    });

    test('subtracts from players health', () => {
        const player = new Player('Dave');
        const oldHealth = player.health;

        player.reduceHealth(5);

        expect(player.health).toBe(oldHealth - 5);

        player.reduceHealth(99999);

        expect(player.health).toBe(0);
    });