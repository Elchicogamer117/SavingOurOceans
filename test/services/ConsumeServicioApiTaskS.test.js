const ConsumeServicioApiTaskS= require('./../../lib/services/ConsumeServicioApiTaskS')
const Reader= require('./../../lib/utils/Reader')
const task = Reader.readJsonFile("taskDummyVistas.json"); 


test("1.Consumir servicio post Info de Api task", ()=>{
    const taskId = task.id;
    const respuestagetInfo = ConsumeServicioApiTaskS.getInfo(taskId);
    expect(respuestagetInfo).toBeDefined();
})

test("2.Consumir servicio post Info de Api createTask", ()=>{ 
    const respuestagetInfo = ConsumeServicioApiTaskS.createTask(task);
    expect(task).toBeDefined();
})


