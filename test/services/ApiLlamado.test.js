const ApiLlamado= require('./../../lib/services/ApiLlamado')


describe("Test llamado a apis ApiLlamado", ()=>{
    test("1.Probando metodo de llamado tipo post", ()=>{   
        const apiPost=ApiLlamado.apiPost()
        expect(apiPost).toBeDefined()
    })  
})