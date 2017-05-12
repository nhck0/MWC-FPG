/// <reference path="../lib/phaser.d.ts"/>
module firstPahserGame{
     export class fpg extends Phaser.Game{
       constructor(){
           super(800,600,Phaser.AUTO,'content',null);

           this.state.add('Preloader', Preloader, false);
           this.state.add('Game', Game, false);
           this.state.add('Boot', Boot, false);
           this.state.start('Boot');
     }
}
    window.onload = () =>{
         new fpg();
    };
}