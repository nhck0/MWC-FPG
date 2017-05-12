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
var firstPahserGame;
(function (firstPahserGame) {
    var fpg = (function (_super) {
        __extends(fpg, _super);
        function fpg() {
            var _this = _super.call(this, 800, 600, Phaser.AUTO, 'content', null) || this;
            _this.state.add('Preloader', Preloader, false);
            _this.state.add('Game', Game, false);
            _this.state.add('Boot', Boot, false);
            _this.state.start('Boot');
            return _this;
        }
        return fpg;
    }(Phaser.Game));
    firstPahserGame.fpg = fpg;
    window.onload = function () {
        new fpg();
    };
})(firstPahserGame || (firstPahserGame = {}));
//# sourceMappingURL=app.js.map