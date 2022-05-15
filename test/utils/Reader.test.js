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


   
