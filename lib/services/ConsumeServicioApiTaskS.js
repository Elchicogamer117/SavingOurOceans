const Reader= require('./../../lib/utils/Reader')
const task = Reader.readJsonFile("taskDummyVistas.json"); 

class ConsumeServicioApiTaskS  {	
	static getInfo(taskId){
		return task;
	}

	static getInfo(taskId){
		return task;
	}
	static updateItsAvailable(taskId, isAvailable){	
		return task;
	}
	static updateItsDone(taskId, isDone){

		return task;
	}
	static getPoints(taskId){
		return task;
	}
	static updatePoints(taskId, points){
		return task;
	}
	
}

module.exports=ConsumeServicioApiTaskS