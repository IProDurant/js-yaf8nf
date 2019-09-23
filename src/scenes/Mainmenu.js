import "phaser";
export class scene15 extends Phaser.Scene {
  constructor(){
    super("menu");
    }

    create(){
      this.background = this.add.image(0,0,"mmbackground");
      this.background.setOrigin(0,0);

      const mainbutton = this.add.image(950, 475, "mmbutton");
      mainbutton.setInteractive();
      mainbutton.on('pointerdown', () => { this.scene.start("play");; });

      }
    }
    