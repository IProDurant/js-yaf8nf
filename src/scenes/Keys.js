//class keyfunctions extends Phaser.scene6 {
  class Keys extends Phaser.Scene {
    constructor ()
    {
        super('Keyboard inputs');
    }
  keyDflash(event) {
    keyFpress.setVisible(true);
    keyD = "Active";
  };
  keyFflash(event) {
    keyDpress.setVisible(true);
    keyF = "Active";
  };
  keyJflash(event) {
    keyJpress.setVisible(true);
    keyJ = "Active";
  };
  keyKflash(event) {
    keyKpress.setVisible(true);
    keyK = "Active";
  };

  keyDhide(event) {
    keyFpress.setVisible(false);
    keyD = "Inactive";
  };

  keyFhide(event) {
    keyDpress.setVisible(false);
    keyF = "Inactive";
  };

  keyJhide(event) {
    keyJpress.setVisible(false);
    keyJ = "Inactive";
  };

  keyKhide() {
    keyKpress.setVisible(false);
    keyK = "Inactive";
  }
  
}
