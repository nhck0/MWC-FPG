/// <reference path="../lib/phaser.d.ts"/>
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
var firstPahserGame;
(function (firstPahserGame) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Preloader.prototype.preload = function () {
            this.load.image('sky', 'assets/sky.png');
            this.load.image('ground', 'assets/platform.png');
            this.load.image('star', 'assets/star.png');
            this.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        };
        Preloader.prototype.create = function () {
            this.state.start('Game');
        };
        return Preloader;
    }(Phaser.State));
    firstPahserGame.Preloader = Preloader;
})(firstPahserGame || (firstPahserGame = {}));
//# sourceMappingURL=Preloader.js.map