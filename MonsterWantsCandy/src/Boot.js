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
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', 'assets/loading-bar.png');
        };
        Boot.prototype.create = function () {
            this.input.maxPointers = 1;
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.maxWidth = 640;
            this.scale.maxHeight = 940;
            this.scale.parentIsWindow = true;
            this.state.start('Preloader', true, false);
        };
        return Boot;
    }(Phaser.State));
    MonsterWantsCandy.Boot = Boot;
})(MonsterWantsCandy || (MonsterWantsCandy = {}));
//# sourceMappingURL=Boot.js.map