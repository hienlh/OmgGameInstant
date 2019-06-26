class About extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene', active: false });
  }

  preload() {
    this.load.image('logo', 'src/assets/logo.png');
  }

  create() {
    const width = this.game.config.width;
    const height = this.game.config.height;
    this.add.image(width / 2, height / 2, 'logo');
  }
}
