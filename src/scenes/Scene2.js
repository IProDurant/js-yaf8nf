export class scene2 extends Phaser.Scene {
  constructor(){
    super("play");
    }

    create(){
      this.add.text(20, 20, "Playing Game", {font: "25px Arial", fill: "yellow"});
      this.background = this.add.image(0,0,"background");
      this.background.setOrigin(0,0);
    }
}
