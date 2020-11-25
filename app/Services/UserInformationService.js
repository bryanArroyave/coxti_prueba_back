
const UserInformationModel = use("App/Models/UserInformation")
const Env = use('Env')

class UserInformationService{

    async isPassword({category_item_id}){

        const password_id = 5;
        return category_item_id  == password_id ? true: false;
    }


    async create({category_item_id,user_id,data}){
        
        try{    
            const userinformation = {category_item_id,user_id,data};


            const UserInformation = await UserInformationModel.create(userinformation);
            return {error: false, payload: UserInformation, msg: 'successfully inserted' };
        } catch (error) {
            return {error: true, payload: null, msg: error.sqlMessage};   
        }
    }

    ExceptionUsuario(mensaje) {
        this.mensaje = mensaje;
        this.nombre = "ExceptionUsuario";
    }
}


module.exports = new UserInformationService