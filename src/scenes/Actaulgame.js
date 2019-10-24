import "phaser";

var x = 0;
var keyFpress;
var keyDpress;
var keyJpress;
var keyKpress;
var cursors;
var keyD;
var keyF;
var keyJ;
var keyK;

export class scene2 extends Phaser.Scene {
  constructor(){
    super("play");
    }
    create(){
      this.background = this.add.image(0,0,"background");
      this.background.setOrigin(0,0);
      this.add.text(20, 20, "[NOT EVEN IN BETA]", {font: "40px Arial", fill: "black"});
      
      
      this.grid = this.add.image(950, 475, "grid");
      this.grid.setScale(0.9);
      this.noted = this.add.image(798, -100, "noted");
      this.noted.setScale(0.4);
      this.notef = this.add.image(898, -100, "notef");
      this.notef.setScale(0.4);
      this.notej = this.add.image(998, -100, "notej");
      this.notej.setScale(0.4);
      this.notek = this.add.image(1098, -100, "notek");
      this.notek.setScale(0.4);
      keyFpress = this.add.image(800, 860, "keyblue");
      keyFpress.setScale(2);
      keyDpress = this.add.image(900, 859, "keywhite");
      keyDpress.setScale(2);
      keyJpress = this.add.image(1000, 859, "keywhite");
      keyJpress.setScale(2);
      keyKpress = this.add.image(1100, 859, "keyblue");
      keyKpress.setScale(2);
      const backbutton = this.add.image(250, 825, "goback");
      cursors = this.input.keyboard.createCursorKeys();

      backbutton.setInteractive();
      backbutton.on('pointerdown', () => { this.scene.start("menu");; });

      keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
      keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
      keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);

          }

    ESCRELEASED(event) {
      x++;
    }


    moveNote(note, speed) {
      note.y += speed;
      if (note.y > 775) {
        this.resetNotePos(note);
      }
    }

    resetNotePos(note){
      note.y = -100;
    }

    update() {
      if (x % 2 == 0){
        this.moveNote(this.noted, 10)
        this.moveNote(this.notef, 9)
        this.moveNote(this.notej, 8)
        this.moveNote(this.notek, 11)
        }

      if (keyD.isDown) {
        keyDpress.y = 100;
        if (keyD.isup) {
        keyDpress.y -=100;
        }
    }
      
    }
  }
