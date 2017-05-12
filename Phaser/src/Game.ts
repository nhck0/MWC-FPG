/// <reference path="../lib/phaser.d.ts"/>
module firstPahserGame{
    export class Game extends Phaser.State{

        player: Phaser.Sprite;
        platforms: Phaser.Group;
        cursors: Phaser.CursorKeys;
        stars: Phaser.Group;
        score = 0;
        scoreText: Phaser.Text;

        create(){
            this.physics.startSystem(Phaser.Physics.ARCADE);

            this.add.sprite(0,0,'sky');

            this.platforms = this.add.group();
            this.platforms.enableBody = true;

            let ground = this.platforms.create(0, this.world.height - 64, 'ground');
            ground.scale.setTo(2,2);

            ground.body.immovable = true;

            let ledge = this.platforms.create(400, 400, 'ground');
            ledge.body.immovable = true;

            ledge = this.platforms.create(-150, 250, 'ground');
            ledge.body.immovable = true;

            this.player = this.add.sprite(32, this.world.height - 150, 'dude');
            this.physics.arcade.enable(this.player);

            this.player.body.bounce.y = 0.1;
            this.player.body.gravity.y = 300;
            this.player.body.collideWorldBounds = true;

            this.player.animations.add('left', [0,1,2,3], 10, true);
            this.player.animations.add('right', [5,6,7,8], 10, true);

            this.stars = this.add.group();
            this.stars.enableBody = true;

            for (let i: number = 0; i < 2; i++) {
              let star = this.stars.create((i + 4) * 70, 0, 'star');
              star.body.gravity.y = 700;
              star.body.bounce.y = 0.7 + Math.random() * 0.2;
            }
            this.scoreText = this.add.text(16, 16, 'Score: 0',
                { fontSize: '32px',
                    fill: '#000'
                });

            this.cursors = this.input.keyboard.createCursorKeys();

        }
        update(){
            let hitPlat = this.physics.arcade.collide(this.player, this.platforms);
            this.physics.arcade.collide(this.stars, this.platforms);

            this.physics.arcade.overlap(this.player, this.stars, this.collectStar, null, this);

            this.player.body.velocity.x = 0;

            if(this.cursors.left.isDown){
                this.player.body.velocity.x = -300;
                this.player.animations.play('left');
            }
            else if (this.cursors.right.isDown){
                this.player.body.velocity.x = 300;
                this.player.animations.play('right');
            }
            else{
                this.player.animations.stop();
                this.player.frame = 4;
            }

            if (this.cursors.up.isDown && this.player.body.touching.down && hitPlat){
                this.player.body.velocity.y = -350;
            }
            if(this.score > 10){
                for(let i: number = 0; i < 2; i++){}
                let star = this.stars.create(400,0, 'star');
                let tween = this.add.tween(star);
                tween.to({ x: (Math.random()*200) }, (Math.random()*5000), 'Linear', true, 0);
                star.body.gravity.y = 700;
                star.body.bounce.y = 0.7 + Math.random() * 0.2;
            }
            if(this.score == 1000){
                this.stars.destroy();
                this.player.destroy();
                this.add.text(this.world.width/2,this.world.height/2, 'GG',
                    {fontSize: '32px',
                        fill: '#000'
                    });
            }
        }

        collectStar(player, star){
            star.kill();

            this.score += 10;
            this.scoreText.text = 'Score: ' + this.score;
        }
    }
}

