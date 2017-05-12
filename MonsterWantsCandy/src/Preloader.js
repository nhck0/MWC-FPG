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
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Preloader.prototype.preload = function () {
            this.stage.backgroundColor = '#B4D9E7';
            this.preloadBar = this.add.sprite((this.world.width - 311) / 2, (this.world.height - 27) / 2, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
            this.load.image('background', 'assets/background.png');
            this.load.image('floor', 'assets/floor.png');
            this.load.image('monster-cover', 'assets/monster-cover.png');
            this.load.image('title', 'assets/title.png');
            this.load.image('game-over', 'assets/gameover.png');
            this.load.image('score-bg', 'assets/score-bg.png');
            this.load.image('button-pause', 'assets/button-pause.png');
            this.load.spritesheet('candy', 'assets/candy.png', 82, 98);
            this.load.spritesheet('monster-idle', 'assets/monster-idle.png', 103, 131);
            this.load.spritesheet('button-start', 'assets/button-start.png', 401, 143);
        };
        Preloader.prototype.create = function () {
            this.state.start('MainMenu');
        };
        return Preloader;
    }(Phaser.State));
    MonsterWantsCandy.Preloader = Preloader;
})(MonsterWantsCandy || (MonsterWantsCandy = {}));
//# sourceMappingURL=Preloader.js.map