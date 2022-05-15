const Reader= require('')

    test("1.Leer archivo rewads Json que no existe", ()=>{
     const rewards = Reader.readJsonFile("rewadsDummyVistasq.json"); 
     expect(rewards).toBe(rewards)
     })
  