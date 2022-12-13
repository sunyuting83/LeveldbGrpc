const grpc = require('@grpc/grpc-js')
const hello_proto = require('./proto/hello')

function sayHello(call, callback) {
  console.log(call.request.message)
  callback(null, { message: call.request.message })
}

var server = new grpc.Server()
server.addService(hello_proto.LevelServer.service, { sayHello: sayHello })
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start()
  console.log('grpc server started')
})