const ApiLlamado= require('./../../lib/services/ApiLlamado')


describe("Test llamado a apis ApiLlamado", ()=>{
    test("1.Probando metodo de llamado tipo post", ()=>{   
        const apiPost=ApiLlamado.apiPost()
        expect(apiPost).toBeDefined()
    })  
    test("2.Probando metodo de llamado tipo get", ()=>{   
        const apiGet=ApiLlamado.apiGet()
        expect(apiGet).toBeDefined()
    }) 
})