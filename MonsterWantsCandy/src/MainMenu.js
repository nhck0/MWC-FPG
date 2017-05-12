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
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MainMenu.prototype.create = function () {
            this.add.sprite(0, 0, 'background');
            this.add.sprite(-130, this.world.height - 514, 'monster-cover');
            this.add.sprite((this.world.width - 395) / 2, 60, 'title');
            this.add.button(this.world.width - 411, this.world.height - 153, 'button-start', this.startGame, this, 1, 0, 2);
        };
        MainMenu.prototype.startGame = function () {
            this.state.start('Game');
        };
        return MainMenu;
    }(Phaser.State));
    MonsterWantsCandy.MainMenu = MainMenu;
})(MonsterWantsCandy || (MonsterWantsCandy = {}));
//# sourceMappingURL=MainMenu.js.map