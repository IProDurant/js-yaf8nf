import { scene1 } from './scenes/Scene1';
import { scene2 } from './scenes/Scene2';

export var config = {
  type: Phaser.AUTO,
  height: 920,
  width: 1905,
  backgroundColor: 0x000000,
  scene: [scene1, scene2]
}