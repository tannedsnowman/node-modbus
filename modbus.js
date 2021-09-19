var ModbusRTU = require("modbus-serial")
var client = new ModbusRTU()

// open connection to a serial port
client.connectRTUBuffered("/dev/ttyUSB0", { baudRate: 9600 })

client.setID(1)

setInterval(function() {
  client.readHoldingRegisters(33000, 100, function(err, data) {
      console.log(err, data.data);
  });
}, 1000);