const Reader= require('./../../lib/utils/Reader')
const task = Reader.readJsonFile("taskDummyVistas.json"); 

class ConsumeServicioApiTaskS  {	
	static getInfo(task){
		const url= `https://api/createTask${task.id}`;
		fetch(url.then((res) => {
			if (res.status != "200") {
				console.log(res);			
			}
			else {
				return  res.json();
			}
		}
		)).then((data) => {
			//aqui llega el json de respuesta de api
			console.log(data);
			return data;
		});	
	}
}