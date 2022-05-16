const ConsumeServicioApiTaskS= require("./../../lib/services/ConsumeServicioApiTaskS");
const Reader= require("./../../lib/utils/Reader");
const task = Reader.readJsonFile("taskDummyVistas.json"); 

test("1.Consumir servicio post Info de Api task", ()=>{
	const taskId = task.id;
	const respuestagetInfo = ConsumeServicioApiTaskS.getInfo(taskId);
	expect(respuestagetInfo).toBeDefined();
});

test("2.Consumir servicio post Info de Api createTask", ()=>{ 
	const respuestaCreateTask = ConsumeServicioApiTaskS.createTask(task);
	expect(task).toBeDefined();
});

test("3.Consumir servicio post Info de Api updateItsAvailable", ()=>{ 
	const respuestagUpdateItsAvailable = ConsumeServicioApiTaskS.updateItsAvailable(task.id, task.isAvailable);
	expect(respuestagUpdateItsAvailable).toBeDefined();
});

test("4.Consumir servicio post Info de Api updateItsDone", ()=>{ 
	const respuestagUpdateItsDone = ConsumeServicioApiTaskS.updateItsDone(task.id, task.isDone);
	expect(respuestagUpdateItsDone).toBeDefined();
});

test("5.Consumir servicio post Info de Api getPoints", ()=>{ 
	const respuestaGetPoints = ConsumeServicioApiTaskS.getPoints(task.id);
	expect(respuestaGetPoints).toBeDefined();
});

test("6.Consumir servicio post Info de Api updatePoints", ()=>{ 
	const respuestaUpdatePoints = ConsumeServicioApiTaskS.updatePoints(task.id, task.points);
	expect(respuestaUpdatePoints).toBeDefined();
});

