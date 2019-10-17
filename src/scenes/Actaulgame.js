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
      this.input.keyboard.on('keydown_S', this.SPRESSED, this);
      this.input.keyboard.on('keyup_S', this.SRELEASED, this);
      this.input.keyboard.on('keydown_W', this.WPRESSED, this);
      this.input.keyboard.on('keyup_W', this.WRELEASED, this);
    }

    SPRESSED(event) {
    // Here you can see what's passed when Phaser triggers it.
    console.log(arguments);

    if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.S) {
        console.log('S was pressed');
        this.keyf = this.add.image(32, 100, "notef");
    } 
}

    SRELEASED(event) {
        // Here you can see what's passed when Phaser triggers it.
    console.log(arguments);

    if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.S) {
        console.log('S was released');
        this.resetKeyPos();
    }
}

    WRELEASED(event) {
        // Here you can see what's passed when Phaser triggers it.
    console.log(arguments);
     if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.W) {
        console.log('W was released');
    }
}

    WPRESSED(event) {
        // Here you can see what's passed when Phaser triggers it.
    console.log(arguments);
     if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.W) {
        console.log('W was pressed');
    }
}
    resetKeyPos() {
      console.log("The function works lol")
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
