///<reference path="../lib/phaser.d.ts"/>

module firstPahserGame{
    export class Boot extends Phaser.State{

        create(){
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.maxWidth = 800;
            this.scale.maxHeight = 600;
            this.scale.parentIsWindow = true;

            this.state.start('Preloader', true, false);
        }
    }
}