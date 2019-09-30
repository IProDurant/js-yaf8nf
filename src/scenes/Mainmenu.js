import "phaser";
export class scene15 extends Phaser.Scene {
  constructor(){
    super("menu");
    }

    create(){
      this.background = this.add.image(0,0,"mmbackground");
      this.background.setOrigin(0,0);

      const mainbutton = this.add.image(950, 300, "mmbutton");
      mainbutton.setScale(.6);
      mainbutton.setInteractive();
      mainbutton.on('pointerdown', () => { this.scene.start("play");; });

      const setting = this.add.image(950,550, "settings");
      setting.setScale(.9);
      setting.setInteractive();
      setting.on('pointerdown', () => { this.scene.start("setmen");; });
      }
    }

    