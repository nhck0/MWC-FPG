var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../lib/phaser.d.ts"/>
var MonsterWantsCandy;
(function (MonsterWantsCandy) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.spawnCandyTimer = 0;
            _this.score = 0;
            _this.health = 0;
            return _this;
        }
        Game.prototype.create = function () {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.physics.arcade.gravity.y = 200;
            this.add.sprite(0, 0, 'background');
            this.add.sprite(-30, this.world.height - 160, 'floor');
            this.add.sprite(10, 5, 'score-bg');
            this.add.button(this.world.width - 106, 5, 'button-pause', this.managePause, this);
            this.player = this.add.sprite(5, 760, 'monster-idle');
            this.player.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 10, true);
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
        };
        Game.prototype.update = function () {
            this.spawnCandyTimer += this.time.elapsed;
            if (this.spawnCandyTimer > 1000) {
                this.spawnCandyTimer = 0;
                this.spawnCandy();
            }
            this.candyGroup.forEach(function (candy) {
                candy.angle += (Math.random() + 1);
            }, this);
            if (!this.health) {
                this.add.sprite((this.world.width - 594) / 2, (this.world.height - 271) / 2, 'game-over');
                this.candyGroup.destroy();
                this.game.paused = true;
            }
        };
        Game.prototype.managePause = function () {
            if (this.game.paused == true) {
                return false;
            }
            else {
                this.game.paused = true;
                var pausedText_1 = this.add.text(200, 250, "Paused.\n Tap anywhere.", this.fontStyle);
                this.input.onDown.add(function () {
                    pausedText_1.destroy();
                    this.game.paused = false;
                }, this);
            }
        };
        Game.prototype.spawnCandy = function () {
            var dropPos = Math.floor(Math.random() * this.world.width);
            var dropOffset = [-27, -36, -36, -38, -48];
            var candyType = Math.floor(Math.random() * 5);
            var candy = this.add.sprite(dropPos, dropOffset[candyType], 'candy');
            candy.animations.add('animCandy', [candyType], 10, true);
            candy.animations.play('animCandy');
            this.physics.enable(candy, Phaser.Physics.ARCADE);
            candy.inputEnabled = true;
            candy.events.onInputDown.add(this.clickCandy, this);
            candy.checkWorldBounds = true;
            candy.events.onOutOfBounds.add(this.removeCandy, this);
            candy.anchor.setTo(0.5, 0.5);
            this.candyGroup.add(candy);
        };
        Game.prototype.clickCandy = function (candy) {
            candy.kill();
            this.score += 1;
            this.scoreText.text = "" + this.score;
        };
        Game.prototype.removeCandy = function (candy) {
            candy.kill();
            this.health -= 1;
        };
        return Game;
    }(Phaser.State));
    MonsterWantsCandy.Game = Game;
})(MonsterWantsCandy || (MonsterWantsCandy = {}));
//# sourceMappingURL=Game.js.map