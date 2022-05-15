const Reader= require('./../../lib/utils/Reder')

    test("1.Leer archivo rewads Json que no existe", ()=>{
     const rewards = Reader.readJsonFile("rewadsDummyVistas.json"); 
     expect(rewards).toBe(rewards)
     })
  