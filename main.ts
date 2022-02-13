let mySprite = sprites.create(img`
    . f f f f f f f f f . . . . . . 
    . f 1 1 1 1 1 1 1 1 f . . . . . 
    . f 1 1 1 1 1 1 1 1 f . . . . . 
    . f 1 1 1 1 1 1 1 f f . . . . . 
    . f 1 1 1 1 1 1 f f . . . . . . 
    . f 1 1 1 1 1 f f . . . . . . . 
    . f 1 1 1 f f f f f . . . . . . 
    . f 1 f f . f f f f f . . . . . 
    . . f f . . f f f f f f . . . . 
    . . . . . . . f f f f f . . . . 
    . . . . . . . . f f f f f f . . 
    . . . . . . . . . f f f f f . . 
    . . . . . . . . . . . f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.setBackgroundImage(assets.image`Room 1`)
tiles.setCurrentTilemap(tilemap`level1`)
music.playMelody("C5 D E C5 C F C C5 ", 100)
