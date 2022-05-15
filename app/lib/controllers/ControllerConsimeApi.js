const Reader = require('/../../../../../Users/Novucentral/savingouroceansfrtnd/app/lib/utils/Reader')
const task = Reader.readJsonFile("taskDummyVistas.json"); 
const rewards = Reader.readJsonFile("rewadsDummyVistas.json"); 
const user = Reader.readJsonFile("userDummyVistas.json"); 

class ConsumeServicioApiRewards{
    static createRewards(id,sponsor,code,pointsValue,name,type,deadLine){
		return new Rewards(id,sponsor,code,pointsValue,name,type,deadLine);
	}

	static getInfoWOCode(reward){
		
		return rewardsInfo;
	}  

	static getInfoWCode(reward){
		
		return rewardsInfo;
	}  

	static getCode(reward){
		
		return rewardsInfo;
	}

	static getPoints(reward){
		return reward.getPointsValue;
	}
    
	static updatePoints(reward, points){
		
		return reward;
	}

	static updateDeadline(reward, deadLine){
		
		return reward;
	}


}

class ConsumeServicioApiTaskS  {
	
	static createTask(task){

		
		return new Task(id,description,points,itsDone, itsAvailable);
	}
	

}

class ConsumeServicioApiUser  {

}



module.exports=ConsumeServicioApiRewards
module.exports=ConsumeServicioApiTaskS
module.exports=ConsumeServicioApiUser

