var ModbusRTU = require("modbus-serial")
var client = new ModbusRTU()

// open connection to a serial port
client.connectRTUBuffered("/dev/ttyUSB0", { baudRate: 9600 }, read)

client.setID(1)

const read = async () => {
  try {
    console.log("here")
      const val = await client.readInputRegisters(33000, 100)
    console.log(val)
  } catch (e) {
    console.log(e)
  }
}