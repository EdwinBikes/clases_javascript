import Bill from './bills/index.js'
import BillSerializer from './bills/serializer.js'
            
let customerData = {
    "name":"Joselito",
    "address":"calle falsa 123",
    "phone":"3161232323",
    "legal_id_type":"nit",
    "legal_id":"98347678234"
    // ingrese tipo documento y numero de documento legal_id_type(cc,ce,pp,nit) legal_id
    // el programa debe reconocer si es empresa o persona natural y solo colocar los impuestos que corresponde a cada uno
}

let dataBills = [
    {"name":"Sandwich","description":"pan con jamon y queso","quantity":3,"price":2500},
    {"name":"Poker","description":"Bebida embriagante","quantity":6,"price":3000},
    {"name":"cigarrillo","description":"tabaco empacado","quantity":2,"price":900}
];

let billCompleted = [];

dataBills.forEach( bill => {
    let newBill = new Bill(bill.name,bill.description,bill.quantity,bill.price,customerData)
    billCompleted.push(newBill)
})

let serializerData = new BillSerializer(billCompleted,customerData)

console.log(serializerData.finalBill);