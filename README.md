# SavingOurOceans-Backend 🐳

## Herramientas 🐋

| Herramientas | Version |
| ------------ | ------- |
| Node         | >=6.9.0 |
| Jest         | 28.1.0  |
| Express      | 4.18.1  |
| Git          |         |
| Eslint       | 8.15.0  |

## Diseño de Solución

| Vista                                | Propósito                                                                                                                                 | Interacción |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------ |
| ![img](image/README/1652657209202.png) | Informar al usuario de nuestra misión y hacer conciencia de lo que pasa actualmente con nuestros mantos acuíferos.                       |              |
| ![img](image/README/1652657323232.png) | Iniciar sesión para que el usuario pueda disfrutar de sus beneficios que ha ido generando con un cambio tangible hacia el medio ambiente. |              |
| ![img](image/README/1652657333177.png) | Incentivar al usuario a que se cree una cuenta y pueda formar parte del cambio para mejorar nuestro medio ambiente.                        |              |
| ![img](image/README/1652657412122.png) | Hacerle ver las tareas y recompensas que existen.                                                                                          |              |

## Implementación

### Modelos

### Controladores y Servicios

### Utilidades

### Pruebas

Se realizaron pruebas unitarias para cada método que traerá la API.

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


__Evolución Previsible:__ 

Terminar la creción de pruebas unitarias para todos los métodos de todas las APIS, para el controller que manejará la información.

### Automatización de Pruebas

No se incluyo automatización de pruebas, ya que se priorizaron todos los esfuerzos en las prebas unitarias para consumir los métodos de la API Task.

__Evolución Previsible:__ 

Atomatización de actions github para revisión de pruebas cada que se de push.

### Deployment de Aplicación

`npm install`
