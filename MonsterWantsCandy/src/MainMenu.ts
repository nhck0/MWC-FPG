/// <reference path="../lib/phaser.d.ts"/>
module MonsterWantsCandy {
    export class MainMenu extends Phaser.State{
        create(){
            this.add.sprite(0,0,'background');
            this.add.sprite(-130,this.world.height-514, 'monster-cover');
            this.add.sprite((this.world.width-395)/2,60,'title');
            this.add.button(this.world.width-411,
               this.world.height-153,'button-start', this.startGame, this, 1, 0, 2);
        }
        startGame(){
           this.state.start('Game');
        }
    }
}
