
const UserInformationModel = use("App/Models/UserInformation")

class UserInformationService{


    async create({category_item_id,user_id,data}){
    try{    
        const userinformation = {category_item_id,user_id,data};

        const UserInformation = await UserInformationModel.create(userinformation);
        return {error: false, payload: UserInformation, msg: 'Insertado con exito' };
        } catch (error) {
        return {error : true, msg: error};
        }
    }
}


module.exports = new UserInformationService