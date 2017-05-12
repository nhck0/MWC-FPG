/// <reference path="../lib/phaser.d.ts"/>
module MonsterWantsCandy{
    export class Boot extends Phaser.State{


        preload(){
            this.load.image('preloadBar', 'assets/loading-bar.png');
        }
        create(){
            this.input.maxPointers =1;
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.maxWidth = 640;
            this.scale.maxHeight = 940;
            this.scale.parentIsWindow = true;


            this.state.start('Preloader',true,false);
        }
    }
}
