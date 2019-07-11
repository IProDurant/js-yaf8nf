import { scene1 } from './scenes/Preloader';
import { scene2 } from './scenes/Actaulgame';

export var config = {
  type: Phaser.AUTO,
  height: 950,
  width: 1900,
  backgroundColor: 0x000000,
  scene: [scene1, scene2]
}