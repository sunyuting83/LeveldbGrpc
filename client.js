const hello_proto = require('./proto/hello')
const grpc = require('@grpc/grpc-js')

function main() {
    let client = new hello_proto.LevelServer('localhost:50051', grpc.credentials.createInsecure())
    client.sayHello({ message: 'Hello World' }, function(err, response) {
        if (err) {
            console.error('Error: ', err)
        } else {
            console.log(response)
        }
    })
}

main()