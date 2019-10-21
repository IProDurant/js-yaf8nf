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

      
      this.input.keyboard.on('keydown_D', this.DPRESSED, this);
      this.input.keyboard.on('keyup_D', this.DRELEASED, this);
      this.input.keyboard.on('keydown_F', this.FPRESSED, this);
      this.input.keyboard.on('keyup_F', this.FRELEASED, this);
      //this.input.keyboard.on('keydown_J', this.JPRESSED, this);
      //this.input.keyboard.on('keyup_J', this.JRELEASED, this);
      //this.input.keyboard.on('keydown_K', this.KPRESSED, this);
      //this.input.keyboard.on('keyup_K', this.KRELEASED, this);
    }

    DPRESSED(event) {
    if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.D) {
        console.log('D was pressed');
    } 
}

    DRELEASED(event) {
      if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.D) {
        console.log('D was released');
    }
}

    FRELEASED(event) {
     if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.F) {
        console.log('F was released');
    }
}

    FPRESSED(event) {
     if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.F) {
        console.log('F was pressed');
    }
}
    JPRESSED(event) {
    if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.J) {
        console.log('J was pressed');
    } 
}

    JRELEASED(event) {
      if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.J) {
        console.log('J was released');
    }
}

    KRELEASED(event) {
     if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.K) {
        console.log('K was released');
    }
}

    KPRESSED(event) {
     if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.F) {
        console.log('K was pressed');
    }
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
      this.moveNote(this.notef, 9)
      this.moveNote(this.notej, 8)
      this.moveNote(this.notek, 1)
    }
  }
