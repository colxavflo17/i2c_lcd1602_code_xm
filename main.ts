basic.showIcon(IconNames.Happy)
I2C_LCD1602.i2cLcdInit(39)
I2C_LCD1602.i2cLcdBacklightOff()
basic.pause(500)
I2C_LCD1602.i2cLcdBacklightOn()
// 控制LCD1602液晶显示的内容和位置的程序积木
I2C_LCD1602.i2cLcdShowString("Hello! emakefun", 1, 0)
I2C_LCD1602.i2cLcdShowString("2019", 12, 1)
I2C_LCD1602.i2cLcdOff()
basic.pause(500)
I2C_LCD1602.i2cLcdOn()
basic.forever(function () {
    basic.pause(100)
})
