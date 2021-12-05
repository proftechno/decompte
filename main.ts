function Décompte () {
    basic.showNumber(3)
    music.playTone(294, music.beat(BeatFraction.Half))
    basic.showNumber(2)
    music.playTone(294, music.beat(BeatFraction.Half))
    basic.showNumber(1)
    music.playTone(294, music.beat(BeatFraction.Half))
    basic.showNumber(0)
    music.playTone(294, music.beat(BeatFraction.Breve))
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
basic.forever(function () {
    pins.setAudioPin(AnalogPin.P0)
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        Décompte()
    }
})
