const Reader= require('./../../lib/utils/Reader')
const task = Reader.readJsonFile("taskDummyVistas.json"); 

class ConsumeServicioApiTaskS  {	
	static getInfo(taskId){
		return task;
	}

}

module.exports=ConsumeServicioApiTaskS