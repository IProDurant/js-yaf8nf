import "phaser";
export class scene17 extends Phaser.Scene {
  constructor() {
    super("setmen");
  }

  create() {
    this.background = this.add.image(0, 0, "mmbackground");
    this.background.setOrigin(0, 0);
    const backbutton = this.add.image(250, 825, "goback");
    backbutton.setInteractive();
    backbutton.on("pointerdown", () => {
      this.scene.start("menu");
    });
    const fullscreenButton = this.add.image("fullscreen").setInteractive();
      this.fullscreenB.on('pointerdown', function () {
      if (this.scale.isFullscreen) {
        this.scale.stopFullscreen();
      } else {
        this.scale.startFullscreen();
      }
    }, this);
  }
}
