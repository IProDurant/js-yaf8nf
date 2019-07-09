export class scene1 extends Phaser.Scene {
constructor(){
  super("loading");
  }
  
  preload(){
    this.load.image("background", 'https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/pixelart-1562708019983-8892.jpg');
    this.load.image("grid", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/imagesforgame/maniagrid.jpg");


    this.load.image("keyd", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/imagesforgame/mania-key1.png");
    this.load.image("noted", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/imagesforgame/mania-note1H.png");


  
  
  }

  create() {
    this.add.text(20, 20, "Loading");
    this.scene.start("play");
  }
}