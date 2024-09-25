import { storage } from '../storage.js'
import { VenomBot } from '../venom.js'
import { STAGES } from './index.js'

export const initialStage = {
  async exec({ from }) {
    storage[from].stage = STAGES.MENU

    const venombot = await VenomBot.getInstance()

    const message = `
      👋 Olá, como vai?
       Eu sou Madeirinho o 
       *assistente virtual* do 
       ${venombot.getSessionName}.
       
       
       *Atendimento* 
       Sexta a Domingo e feriados 
       das *09:00 as 19:00*
      *Posso te ajudar?* 🙋‍♂️
      -----------------------------------
      1️⃣ - ENCOMENDAS
      2️⃣ - IFORMAÇÕES DO LOCAL 
      0️⃣ - FALAR COM ATENDENTE
    `
    await venombot.sendText({ to: from, message })
  },
}
