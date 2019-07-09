export class scene1 extends Phaser.Scene {
constructor(){
  super("loading");
  }
  
  preload(){
    this.load.image("background", 'https://cdn.jsdelivr.net/gh/IProDurant/Phasergame@master/1528478710470.png');
  }

  create() {
    this.add.text(20, 20, "Loading");
    this.scene.start("play");
  }
}