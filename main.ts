input.onButtonPressed(Button.A, function () {
    basic.showString("" + input.temperature() + " Grad")
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 6))
})
basic.showString("hi!")
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
