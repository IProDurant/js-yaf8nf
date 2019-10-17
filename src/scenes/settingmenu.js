import "phaser";
export class scene17 extends Phaser.Scene {
  constructor() {
    super("setmen");
  }

  create() {
    this.background = this.add.image(0, 0, "mmbackground");
    this.background.setOrigin(0, 0);
    const backbutton = this.add.image(950, 7, "goback");
    backbutton.setInteractive();
    backbutton.on("pointerdown", () => {
      this.scene.start("menu");
    });
    const fullscreenButton = this.add.image(950, 350, "fullscreen")
    fullscreenButton.setScale(.6);
    fullscreenButton.setInteractive();
    fullscreenButton.on('pointerdown', function () {
      if (this.scale.isFullscreen) {
        this.scale.stopFullscreen();
      } else {
        this.scale.startFullscreen();
      }
    }, this);
  }
}
