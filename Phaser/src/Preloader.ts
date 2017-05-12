/// <reference path="../lib/phaser.d.ts"/>

module firstPahserGame{
    export class Preloader extends Phaser.State{

        preload(){
            this.load.image('sky', 'assets/sky.png');
            this.load.image('ground', 'assets/platform.png');
            this.load.image('star', 'assets/star.png');
            this.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        }
        create(){
            this.state.start('Game');
        }
    }
}