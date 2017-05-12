/// <reference path="../lib/phaser.d.ts"/>
module MonsterWantsCandy{
    export class Game extends Phaser.State{

        player : Phaser.Sprite;
        candyGroup : Phaser.Group;
        fontStyle: Phaser.PhaserTextStyle;
        scoreText : Phaser.Text;
        spawnCandyTimer = 0;
        score = 0;
        health = 0;
        create(){
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.physics.arcade.gravity.y = 200;

            this.add.sprite(0, 0, 'background');
            this.add.sprite(-30, this.world.height-160, 'floor');
            this.add.sprite(10, 5,'score-bg');
            this.add.button(this.world.width-106, 5, 'button-pause', this.managePause, this);

            this.player = this.add.sprite(5, 760, 'monster-idle');
            this.player.animations.add('idle', [0,1,2,3,4,5,6,7,8,9,10,11,12], 10, true);
            this.player.animations.play('idle');

            this.health = 1;

            this.fontStyle = { font: "40px Arial",
                fill: "#FFCC00",
                stroke: "#333",
                strokeThickness: 5,
                align: "center"
            };
            this.scoreText = this.add.text(120, 20, '0', this.fontStyle);
            this.candyGroup = this.add.group();
            this.spawnCandy();
        }
        update(){
            this.spawnCandyTimer += this.time.elapsed;
            if(this.spawnCandyTimer > 1000)
            {
               this.spawnCandyTimer = 0;
               this.spawnCandy();
            }

           this.candyGroup.forEach(function (candy) {
              candy.angle += (Math.random()+1);
           },this);

            if(!this.health){
                this.add.sprite((this.world.width - 594)/2, (this.world.height -271)/2, 'game-over');
                this.candyGroup.destroy();
                this.game.paused = true;
            }
        }
        managePause() {
                if (this.game.paused == true){
                    return false;
                }
                else{
                    this.game.paused = true;
                    let pausedText = this.add.text(200, 250,
                        "Paused.\n Tap anywhere.", this.fontStyle);
                    this.input.onDown.add(function () {
                        pausedText.destroy();
                        this.game.paused = false;
                        }, this)
                }
            }

            spawnCandy(){
                let dropPos = Math.floor(Math.random()* this.world.width);
                let dropOffset = [-27, -36, -36, -38, -48];
                let candyType = Math.floor(Math.random()*5);
                let candy = this.add.sprite(dropPos, dropOffset[candyType], 'candy');
                candy.animations.add('animCandy', [candyType], 10, true);
                candy.animations.play('animCandy');

                this.physics.enable(candy, Phaser.Physics.ARCADE);
                candy.inputEnabled = true;
                candy.events.onInputDown.add(this.clickCandy, this);

                candy.checkWorldBounds = true;
                candy.events.onOutOfBounds.add(this.removeCandy, this);
                candy.anchor.setTo(0.5, 0.5);
                this.candyGroup.add(candy);
            }
            clickCandy(candy){
                    candy.kill();
                    this.score +=1;
                    this.scoreText.text = "" + this.score;
            }
            removeCandy(candy){
                candy.kill();
                this.health -= 1;
            }
    }
}

