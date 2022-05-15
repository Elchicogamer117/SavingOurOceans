

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

}

class ConsumeServicioApiUser  {

}



module.exports=ConsumeServicioApiRewards
module.exports=ConsumeServicioApiTaskS
module.exports=ConsumeServicioApiUser

