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
    var mwc = (function (_super) {
        __extends(mwc, _super);
        function mwc() {
            var _this = _super.call(this, 640, 940, Phaser.AUTO, 'content', null) || this;
            _this.state.add('Preloader', MonsterWantsCandy.Preloader, false);
            _this.state.add('Boot', MonsterWantsCandy.Boot, false);
            _this.state.add('MainMenu', MonsterWantsCandy.MainMenu, false);
            _this.state.add('Game', MonsterWantsCandy.Game, false);
            _this.state.start('Boot');
            return _this;
        }
        return mwc;
    }(Phaser.Game));
    MonsterWantsCandy.mwc = mwc;
    window.onload = function () {
        new mwc();
    };
})(MonsterWantsCandy || (MonsterWantsCandy = {}));
//# sourceMappingURL=MWC.js.map