# SavingOurOceans-FrontEnd 🐳

Hola nosotros somos el equipo de ```EXPLORERS H2O``` 🐟
<img align="right" height="200px" src="https://www.pngplay.com/wp-content/uploads/11/Mantine-Pokemon-Background-PNG.png" alt="charmander" />
</br>

 

Se nos hizó el challenge de generar un desarrollo de software que buscará combatir la problemática que se esta viviendo hoy en día respecto a los oceanos.
Elegimos tomar el camino de crear el desarrollo del proyecto SavingOurOceans🐠, un proyecto que incentiva a las personas y empresas a generar un cambio, pero de una manera en la que no se requiera que estas vivan u operen cerca del mar, una manera en la que tanto los usuarios, las empresas y nuestros oceanos salgan beneficiados de esta puesta en acción.

 

Elegimos la problemática de la **Contaminación de los Oceanos** 🌊, la cual es de las más preocupantes hoy en día.

 

Nuestro desarrollo es una aplicación web que por medio de un sistema de puntos incentive a los usuarios a tomar acción para mejorar esta situación, los puntos pueden ser obtenidos mediante la difusión de información de la problemática, difusión de artículos científicos, artículos de campañas de ayuda y colaborción comunitaria, entre otras.

 

Además el usuario podrá ganar puntos mediante el cumplimiento de tareas específicas que ayuden al medio ambiente, (tareas medibles y comprobables) propuestas por ```EXPLORERSH2O```💧, muchas de estas tareas buscarán que el usuario se involucre y genere el gusto por llevar a cabo acciones que ayuden en contra de la contaminación marina, lo que SavingOurOceans🐡 busca es generar difusión masiva del proyecto y un cambio social que genere un impacto real, pero y ¿Como se involucran y ayudan las empresas? 

 

Bueno, las empresas se asocian al proyecto de SavingOurOceans🐙, otorgando recompensas a los usuarios a cambio de los puntos, recompensas que ellos junto con el equipo del proyecto decidan ofrecer a nuestros usuarios, estas recompensas pueden ir desde descuentos, productos en collab con SavingOurOceans🦑, entre otros. El único requisito que las empresas tendrán que hacer es ponerse bien la camisa y también buscar hacer un cambio.

 

El desarrollo de la aplicación web consta de 2 partes:
- [x] El [Desarrollo en Frontend](https://github.com/Elchicogamer117/savingouroceansfrtnd) de la aplicación Web 
- [App Web](https://elchicogamer117.github.io/savingouroceansfrtnd/index.html)
- [x] El [Desarrollo en Backend](https://github.com/OlafRuv/SavingOurOceans-Backend) de una API para el manejo de Datos de la aplicación
- [API](https://saveouroceanapi.azurewebsites.net/)
 


## WireFrame 🐳

![WireFrame](https://user-images.githubusercontent.com/99162884/168502479-b33fb1e1-925e-4520-b7d5-c42276da3141.png)

## Herramientas 🐋

| Herramientas | Version |
| ------------ | ------- |
| Node         | >=6.9.0 |
| Jest         | 28.1.0  |
| Express      | 4.18.1  |
| Git          |         |
| Eslint       | 8.15.0  |

## Diseño de Solución

| Vista | Propósito | Interacción |
| ----- | --------- | ----------- |
| ![img](image/README/1652657209202.png) | Informar al usuario de nuestra misión y hacer conciencia de lo que pasa actualmente con nuestros mantos acuíferos.               | El usuario se podrá desplazar por la página principal. Podrá interactuar con el menú de navegación, asi como con el botón de "Unirme". |
| ![img](image/README/1652657323232.png) | Iniciar sesión para que el usuario pueda disfrutar de sus beneficios que ha ido generando con un cambio tangible hacia el medio ambiente. | Llenar campos: Correo, contraseña. Presionar el botón "Enviar consulta". O dar a la opción de registrarse. |
| ![img](image/README/1652657333177.png) | Incentivar al usuario a que se cree una cuenta y pueda formar parte del cambio para mejorar nuestro medio ambiente.              |Llenar campos: Nombre, apellido, correo, contraseña. Seleccionar pais y estado. Presionar el botón "Enviar consulta".|
| ![img](image/README/1652657412122.png) | Hacerle ver las tareas y recompensas que existen.                                                                             | El usuario podrá realizar determinada tarea para la obtención de puntos. También será capaz de utilizar sus puntos para conseguir recompensas, dependiendo del número de puntos que posea. |


### Controladores y Servicios 🐳

![Equeleto de proyecto](https://user-images.githubusercontent.com/99162884/168502435-abf197f0-7cb8-4b25-a8fc-96bc1fba71d7.jpeg)

_inspirado por el taller de Visual Thinking @visual_partner_
 

### Pruebas 🐳

__Se realizaron pruebas unitarias para cada método que traerá la API.__

```js
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
    const respuestagUpdateItsAvailable = ConsumeServicioApiTaskS.updateItsAvailable(task.id, task.isAvailable);
    expect(respuestagUpdateItsAvailable).toBeDefined();
})

test("4.Consumir servicio post Info de Api updateItsDone", ()=>{ 
    const respuestagUpdateItsDone = ConsumeServicioApiTaskS.updateItsDone(task.id, task.isDone);
    expect(respuestagUpdateItsDone).toBeDefined();
})

test("5.Consumir servicio post Info de Api getPoints", ()=>{ 
    const respuestaGetPoints = ConsumeServicioApiTaskS.getPoints(task.id);
    expect(respuestaGetPoints).toBeDefined();
})

test("6.Consumir servicio post Info de Api updatePoints", ()=>{ 
    const respuestaUpdatePoints = ConsumeServicioApiTaskS.updatePoints(task.id, task.points);
    expect(respuestaUpdatePoints).toBeDefined();
})


```

__Pruebas unitarias para la clase que contiene los métodos que se usarán para el llamado a API(GET Y POST)__

```js
const ApiLlamado= require('./../../lib/services/ApiLlamado')

describe("Test llamado a apis ApiLlamado, que la peticón no se envie vacía", ()=>{
    test("1.Probando metodo de llamado tipo post", ()=>{   
        const apiPost=ApiLlamado.apiPost();
        expect(apiPost).toBeDefined();
    })  
    test("2.Probando metodo de llamado tipo get, response no venga nulo", ()=>{   
        const apiGet=ApiLlamado.apiGet();
        expect(apiGet).toBeDefined();
    }) 
})
```

__Pruebas unitarias para la clase que se usa para leer los json con datos dummy que se usaron para simular datos que llegarían desde API__

```js
const Reader= require('./../../lib/utils/Reader')

    test("1.Leer archivo rewads Json que no existe", ()=>{
     const rewards = Reader.readJsonFile("rewadsDummyVistas.json"); 
     expect(rewards).toBe(rewards)
     })
  


    test("2.Leer archivo task Json que no existe", ()=>{
        const task = Reader.readJsonFile("taskDummyVistas.json"); 
        expect(task).toBe(task)
        })

           
     test("3.Leer archivo user Json que no existe", ()=>{
        const user = Reader.readJsonFile("userDummyVistas.json"); 
        expect(user).toBe(user)
        })


   
```
### Funcionamiento
Se presenta el resultado alcanzado

![Desploimnet](https://user-images.githubusercontent.com/89102805/168504703-3bb18f43-dd5f-4607-a846-ad768e89eb52.gif)


__Evolución Previsible:__ 

Terminar la creción de pruebas unitarias para todos los métodos de todas las APIS, para el controller que manejará la información.

Se deja construida la estructura:

![image](https://user-images.githubusercontent.com/99162884/168500007-1c492649-03f5-4c81-b05f-fee09b2120bd.png)


### Automatización de Pruebas 🐳

No se incluyo automatización de pruebas, ya que se priorizaron todos los esfuerzos en las prebas unitarias para consumir los métodos de la API Task.

__Evolución Previsible:__ 

Atomatización de actions github para revisión de pruebas cada que se de push.





## Colaboradores
- [@felixVelazco](https://github.com/felixVelazco) 🐠
- [@ErickCasGlez](https://github.com/ErickCasGlez) 🦐
- [@Elchicogamer117](https://github.com/Elchicogamer117) 🐡
- [@AliciaGaona](https://github.com/AliciaGaona) 🦑
- [@OlafRuv](https://github.com/OlafRuv) 🐙

