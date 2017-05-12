/// <reference path="../lib/phaser.d.ts"/>
module MonsterWantsCandy{
    export class mwc extends Phaser.Game{
        constructor(){
            super(640,940, Phaser.AUTO, 'content', null);

            this.state.add('Preloader', Preloader, false);
            this.state.add('Boot', Boot, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Game', Game, false);
            this.state.start('Boot');
        }
    }
    window.onload = () =>{
        new mwc();
    }
}