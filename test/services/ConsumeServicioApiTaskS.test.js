const ConsumeServicioApiTaskS= require('./../../lib/services/ConsumeServicioApiTaskS')
const Reader= require('./../../lib/utils/Reader')
const task = Reader.readJsonFile("taskDummyVistas.json"); 


test("1.Consumir servicio post Info de Api task", ()=>{
    const taskId = task.id;
    const respuestagetInfo = ConsumeServicioApiTaskS.getInfo(taskId);
    expect(respuestagetInfo).toBeDefined();
})

test("2.Consumir servicio post Info de Api createTask", ()=>{ 
    const respuestaCreateTask = ConsumeServicioApiTaskS.createTask(task);
    expect(task).toBeDefined();
})

test("3.Consumir servicio post Info de Api updateItsAvailable", ()=>{ 
    const respuestagUpdateItsAvailable = ConsumeServicioApiTaskS.createTask(task.id, task.isAvailable);
    expect(respuestagUpdateItsAvailable).toBeDefined();
})


