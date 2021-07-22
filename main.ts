controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        f f f f f f f f f f f f f f f f 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 f f f 2 f f 2 2 f 2 f f f 2 
        2 2 2 f 2 2 f 2 f 2 f 2 2 f 2 2 
        2 2 2 f 2 2 f 2 2 f f 2 2 f 2 2 
        2 2 2 f 2 2 f 2 2 2 f 2 2 f 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, mySprite, 200, 34)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ..............ccccccccc........
    ............cc555555555cc......
    ...........c5555555555555c.....
    ..........c55555555555555dc....
    .........c555555555555b5bdc....
    .........555bc1555555555bdcccc.
    ........c555ccc55555555bbdccddc
    ........c555bcb5555555ccddcdddc
    .......c555555555551ccccddbdddc
    .......c555555b555c1cccbddbbdbc
    .......c5555555bbc33333ddddbcc.
    .......c555555555bc333555ddbc..
    .......c5555555555555555555c...
    .......cd555555555555cccc555c..
    .......cd55555555555c555c555c..
    .......cdd555555555b5555b555c..
    .......cddd55555ddbb555bb555c..
    .......cdddd55555555555b5555c..
    .......cddddd5555555ddb5555dc..
    c......cdddddd555555555555dcc..
    cc...ccddddddd555555555555dc...
    cdccccdddddd555555d55555ddcc...
    cdddddddddbd5555555ddddddccccc.
    ccdddddddbb55555555bddddccbddc.
    .ccddddddbd55555555bdddccdddc..
    ..cccddddbd5555555cddcccddbc...
    ....ccccccd555555bcccc.cccc....
    .........cc555555bc............
    .........cc55555555c...........
    ..........cccccccccc...........
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setLife(99999999999999)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . e d d d d d e e e . . . . 
        . . . e d d d d d d d e . . . . 
        . . . . d d 1 d 1 d d . . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . d d e d e d d . . . . . 
        . . . . d d e e e d d . . . . . 
        . . . . . d 8 8 8 d d . . . . . 
        . d d d d d 8 8 8 8 d d . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . 8 8 8 8 . . . . . . . 
        . . . . . 8 8 8 8 . . . . . . . 
        . . . . . d . d . . . . . . . . 
        . . . . . d . d . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
