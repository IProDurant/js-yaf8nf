import "phaser";
export class scene17 extends Phaser.Scene {
  constructor(){
    super("setmen");
    }

    create(){
      this.background = this.add.image(0,0,"mmbackground");
      this.background.setOrigin(0,0);
    }
}