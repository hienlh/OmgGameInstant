FBInstant.initializeAsync().then(function() {

    const config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: '#222448',
        scene: [Preloader, GameScene]
    };

    new Phaser.Game(config);

});
