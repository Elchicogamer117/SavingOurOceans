const ControllerConsimeApi = require('/../../../../../Users/Novucentral/savingouroceansfrtnd/app/lib/controllers/ControllerConsimeApi')



describe("Test service ConsumeServicioApiRewards", ()=>{
    test("1.Probando metodo static getExplorersByMission, que recibe lista de explorers", ()=>{
        const getExplorers=ExplorerController.getExplorersByMission("node")
        expect(getExplorers).toBeDefined()
    })

   
})