/// <reference path="../lib/phaser.d.ts"/>
module MonsterWantsCandy{
    export class Preloader extends Phaser.State{

        preloadBar : Phaser.Sprite;
        preload(){
            this.stage.backgroundColor = '#B4D9E7';
            this.preloadBar = this.add.sprite((this.world.width-311)/2,
               (this.world.height-27)/2,'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            this.load.image('background', 'assets/background.png');
            this.load.image('floor', 'assets/floor.png');
            this.load.image('monster-cover', 'assets/monster-cover.png');
            this.load.image('title', 'assets/title.png');
            this.load.image('game-over', 'assets/gameover.png');
            this.load.image('score-bg', 'assets/score-bg.png');
            this.load.image('button-pause', 'assets/button-pause.png');
            this.load.spritesheet('candy', 'assets/candy.png',82,98);
            this.load.spritesheet('monster-idle',
            'assets/monster-idle.png', 103, 131);
            this.load.spritesheet('button-start','assets/button-start.png',
            401,143);

        }
        create() {
           this.state.start('MainMenu');
        }
    }
}
