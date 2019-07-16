export class scene1 extends Phaser.Scene {
constructor(){
  super("loading");
  }

  preload(){
    this.load.image("background", 'https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/pixelart-1562708019983-8892.jpg');
    this.load.image("grid", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/imagesforgame/maniagrid.jpg");


    this.load.image("keyd", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/imagesforgame/mania-key1.png");
    this.load.image("noted", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/imagesforgame/mania-note1H.png");

    this.load.image("keyf", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/imagesforgame/mania-key2.png");
    this.load.image("notef", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/imagesforgame/mania-note2H.png");


    this.load.image("keyj", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/imagesforgame/mania-key2.png");
    this.load.image("notej", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/imagesforgame/mania-note2H.png");


    this.load.image("keyk", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/imagesforgame/mania-key1.png");
    this.load.image("notek", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/imagesforgame/mania-note1H.png");

    this.load.image("mmbackground", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/mainmenu.PNG");
    this.load.image("mmbutton", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/playbuttonlolidknjsdfnjadfnj.PNG")
    this.load.image("goback", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/backbuttonthinglsefadf.PNG")
  
  }

  create() {
    this.add.text(20, 20, "Loading");
    this.scene.start("menu");
  }

  
}