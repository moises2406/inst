import Express from 'express'

import BotServise from './service/bot.service'

//init
const app = Express();
const Bot = new BotServise();
//settis






app.listen(8080, ()=>{
    Bot.Run()
    console.log('init en 8080');
    
} )
