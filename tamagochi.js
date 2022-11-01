const tamogotchi = {
    name: 'Jamic',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus: function () {
        let meal2 = this.meal;
        let energy2 = this.energy;
        let mood2 = this.mood;
        let name2 = this.name;

        if (meal2 <= 0 || energy2 <= 0 || mood2 <= 0) {
            return console.log(`${name2} Умер =( `);
        }

        meal2 < 3 ? meal2 = `Я голоден(${meal2})` : meal2 = 'Я не голоден'
        energy2 < 3 ? energy2 = `Я хочу спать(${energy2})` : energy2 = 'Я не хочу спать"'
        mood2 < 3 ? mood2 = `Мне скучно(${mood2})` : mood2 = 'Мне весело'

        console.log(`Имя:${name2} Еда:${meal2} Энергия:${energy2} Настроение:${mood2}`)
    },

    setName: function (par) {
        return this.name = par
    },

    eat: function () {
        if (this.meal < 5) {
            this.meal++;
        }
        this.mood--;
    },

    sleep: function () {
        if (this.energy < 5) {
            this.energy++;
        }
        this.meal--;
    },

    play: function () {
        if (this.mood < 5) {
            this.mood++;
        }
        this.energy--;
    },

}