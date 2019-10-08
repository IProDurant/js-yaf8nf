import "phaser";
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
      const backbutton = this.add.image(250, 825, "goback");
      backbutton.setInteractive();
      backbutton.on('pointerdown', () => { this.scene.start("menu");; });
      var keyObj = scene.input.keyboard.addKey('W');  // Get key object
      keyObj.on('down', this.notek = this.add.image(1098, 100, "notek"));
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
      this.moveNote(this.noted, 10)
      this.moveNote(this.notef, 10)
      this.moveNote(this.notej, 10)
      this.moveNote(this.notek, 10)
    }
  }
