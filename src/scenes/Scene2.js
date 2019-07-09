export class scene2 extends Phaser.Scene {
  constructor(){
    super("play");
    }

    create(){
      this.background = this.add.image(0,0,"background");
      this.background.setOrigin(0,0);
      this.add.text(20, 20, "Welcome to this monstrocity", {font: "25px Arial", fill: "yellow"});
      
      
      this.grid = this.add.image(950, 475, "grid");
      this.grid.setScale(0.9);
      this.noted = this.add.image(798, -100, "noted");
      this.noted.setScale(0.4)
    }
    
    moveNoted(noted, speed) {
      noted.y += speed;
      if (noted.y > 400) {
        this.resetNotePos(noted);
      }
    }

    resetNotePos(noted){
      noted.y = 0;
    }
    update() {
      this.moveNoted(this.noted, 10)
    }
  }
