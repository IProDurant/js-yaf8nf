import "phaser";
export class scene15 extends Phaser.Scene {
  constructor(){
    super("menu");
    }

    create(){
      this.background = this.add.image(0,0,"mmbackground");
      this.background.setOrigin(0,0);

      const mainbutton = this.add.image(950, 250, "mmbutton");
      mainbutton.setScale(.6);
      mainbutton.setInteractive();
      mainbutton.on('pointerdown', () => { this.scene.start("play");; });

      const setting = this.add.image(950,450, "settings");
      setting.setScale(.9);
      setting.setInteractive();
      setting.on('pointerdown', () => { this.scene.start("setmen");; });

      const backbutton = this.add.image(950,650, "goback");
      backbutton.setScale(.9);
      backbutton.setInteractive();
      backbutton.on("pointerdown", () => {closeWin();});

      }
    }

    function closeWin() {
      window.close();
    }

    