import "phaser";
import { scene1 } from './scenes/Preloader';
import { scene2 } from './scenes/Game';
import { scene15 } from './scenes/MainMenu';
import { scene17 } from './scenes/SettingMenu';


export var config = {
  type: Phaser.AUTO,
  height: 915,
  width: 1890,
  backgroundColor: 0x000000,
  scene: [scene1, scene15, scene2, scene17]
}