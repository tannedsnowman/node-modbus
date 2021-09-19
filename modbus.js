var ModbusRTU = require("modbus-serial")
var client = new ModbusRTU()

// open connection to a serial port
try {
    client.connectRTUBuffered("/dev/ttyUSB5", { baudRate: 9600 })
} catch (e) {
    console.log(e)
    client.conUnBectRTUBuffered("/dev/ttyUSB1", { baudRate: 9600 })
}

client.setID(1)

// client.setTimeout(500)

const read = async () => {
  try {
    const val = await client.readInputRegisters(33000, 100)
    console.log(val)
  } catch (e) {
    console.log(e)
  }
}

read()