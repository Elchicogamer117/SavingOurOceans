
class ApiLlamado{
        static apiPost(peticion){
            const url= `https://api/createTask${peticion}`;//llamaremos a api
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
			return data; //se comenta para simular que metodo responde con datos api
	    	});	
        }
		
        static apiGet(){
            const url= `https://api/createTask`;//llamaremos a api
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
			return data; //se comenta para simular que metodo responde con datos api
	    	});	
        }
}

 module.exports=ApiLlamado