input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(100)
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
