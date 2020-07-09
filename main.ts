for (let index = 0; index < 2; index++) {
    basic.showString("Bonjour")
    basic.pause(500)
    basic.showNumber(10853)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
}
basic.forever(function () {
	
})
