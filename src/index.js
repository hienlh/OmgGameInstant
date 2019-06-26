FBInstant.initializeAsync().then(function() {

    const config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: '#bfcc00',
        scene: [Preloader, GamePlay, About]
    };

    new Phaser.Game(config);

});
