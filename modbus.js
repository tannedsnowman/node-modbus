var ModbusRTU = require("modbus-serial")
var client = new ModbusRTU()

// open connection to a serial port


const read = async () => {
  try {
    client.setID(1)
    console.log("here")
      const val = await client.readInputRegisters(33000, 100)
    console.log(val)
  } catch (e) {
    console.log(e)
  }
}

client.connectRTUBuffered("/dev/ttyUSB0", { baudRate: 9600 }, read)