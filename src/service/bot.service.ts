import { IgApiClient } from 'instagram-private-api';
import { config } from 'dotenv'


export default class BotService {
  ig: IgApiClient;
  password: string;
  username: string;
  searchUser: string = 'dylan_jimenezrosario';
  constructor() {
    config();
    this.password = '8498033413';
    this.username = 'rosarioseymourrd';
    this.ig = new IgApiClient();
  }

  //activacion automatica
  Run = async () => {
    await this.Login()
    setInterval(() => {
      this.getInfo()
    },60000)
  }

  /* // buscar conctatos i fotos y la informacion
  getUser = async ()=>{
    //buscar iduser
    const id = await this.ig.user.getIdByUsername(this.searchUser);
    //bucar perfil
    const idd = await this.ig.feed.user(id);
    const iddd = await idd.items();

    //url de las fotos
    const arr = iddd[0].carousel_media?.map(i => (
      i.image_versions2.candidates[0].url
      ))
    console.log();
    
  } 
 */


  /*
  //ubicaciones
   getUbicacion = async ()=>{
    //buscar iduser
    const id = await this.ig.locationSearch.index(18.461500167847,-69.896499633789)
    console.log(id);

  } */

  getInfo = async ()=>{
    //buscar iduser
    const id = await this.ig.user.getIdByUsername(this.searchUser);
    const idd = await this.ig.user.info(id);

    console.log(idd);
  }
  async Login() {
    this.ig.state.generateDevice(this.username);
    await this.ig.simulate.preLoginFlow();
    //respuesta de informacion del user
    const logeado = await this.ig.account.login(this.username, this.password);
    await this.ig.simulate.postLoginFlow();
    console.log(logeado.username);
  }
}


