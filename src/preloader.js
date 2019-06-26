class Preloader extends Phaser.Scene {

    constructor() {
        super({key: 'Preloader', active: false});
    }

    preload() {
        this.facebook.showLoadProgress(this);
        this.facebook.once('startgame', this.startGame, this);

        this.load.image('spyro', 'src/assets/spyro.png');
        this.load.image('mask', 'src/assets/mask1.png');
        this.load.image('stats', 'src/assets/stats.png');
        this.load.bitmapFont('short', 'src/assets/short-stack.png', 'src/assets/short-stack.xml');
        this.load.bitmapFont('azo', 'src/assets/azo-fire.png', 'src/assets/azo-fire.xml');

    }

    startGame() {
        // this.scene.start('MainMenu');
        this.scene.start('GameScene');
        // this.scene.start('GameStats');
        // this.scene.start('GameData');
        // this.scene.start('GameShare');
    }

}
