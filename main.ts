let Button1 = ""
basic.showLeds(`
    # . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.pause(1000)
basic.clearScreen()
while (true) {
    makerbit.connectIrReceiver(DigitalPin.P8, IrProtocol.NEC)
    Button1 = convertToText(makerbit.irDatagram())
    if (Button1 == "0x00FFB04F") {
        basic.showNumber(0)
    }
    if (Button1 == "0x00FF08F7") {
        basic.showNumber(1)
    }
    if (Button1 == "0x00FF8877") {
        basic.showNumber(2)
    }
    if (Button1 == "0x00FF48B7") {
        basic.showNumber(3)
    }
    if (Button1 == "0x00FF28D7") {
        basic.showNumber(4)
    }
    if (Button1 == "0x00FFA857") {
        basic.showNumber(5)
    }
    if (Button1 == "0x00FF6897") {
        basic.showNumber(6)
    }
    if (Button1 == "0x00FF18E7") {
        basic.showNumber(7)
    }
    if (Button1 == "0x00FF9867") {
        basic.showNumber(8)
    }
    if (Button1 == "0x00FF58A7") {
        basic.showNumber(9)
    }
    if (Button1 == "0x807FC03F") {
        basic.showNumber(10)
    }
    if (Button1 == "0x00807FD02F") {
        basic.showNumber(11)
    }
    if (Button1 == "0x807F22DD") {
        basic.showNumber(12)
    }
    if (Button1 == "0xFFB04F") {
        basic.showIcon(IconNames.No)
    }
}
