const { create } = require("./CategoryItemService")

const UserModel = use("App/Models/User")
const UserInformationService = use("App/Services/UserInformationService");
const CategoryItemService = use("App/Services/CategoryItemService")
const CategoryService = use("App/Services/CategoryService")

const Env = use('Env')

class UserService{

    async getPassword(userInformation_array){

        const password_id = Env.get("ID_PASSWORD");
        for (const info of userInformation_array) {

           if(info.category_item_id == password_id)
            return info.data;
        }

        return null;
    }

    async getEmail(userInformation_array){

        const password_id = Env.get("ID_EMAIL");
        for (const info of userInformation_array) {

           if(info.category_item_id == password_id)
            return info.data;
        }

        return null;
    }

    
    //Routes
    async login({email, password}){

    }

    async logout({user_id}){

    }

    async singin( user_information ){

        const userInformation_array = []
        const errorFields = []
        let msg = "";
        let response = []

        try{   
            const {payload} =  await CategoryItemService.get();
            const categoryItems = payload.rows;
            
            for (const categoryItem of categoryItems) {
          
                const data = user_information[categoryItem.id];
                const validado =   await this.valitdateInfo(categoryItem.id, data)
                if(!validado){
                    const name = categoryItem.name
                    errorFields.push(name)
                }
                else{
                    const userInformation={
                        category_item_id : categoryItem.id,
                        data
                    }
                    userInformation_array.push(userInformation);
                }
            }   

            if(errorFields.length > 0){
                msg =  "no field can be empty"
                response = errorFields;
            }
            else{
               
                const user = {
                    email: await this.getEmail(userInformation_array),
                    password: await this.getEmail(userInformation_array)
                }

                const createdUser = await this.createUser(user);
                const createdUserInfo = await this.createUserInfo(createdUser.id, userInformation_array);


                
                msg = createdUserInfo || "successfully inserted"

                //TODO: Crear el usuario en la tabla usuario
                //TODO: CREAR TODA LA INFORMACIÓN
            }
  
          
           
            return {error: false, payload: response, msg };
        } catch (error) {
            console.log(error);
            throw new Error(error)
        }
    }


    async createUser(user){

        return {id:1};
    }

    async createUserInfo(id, data){
 
        for (const info of data) {
            try {
                const userInformation = {category_item_id:info.category_item_id, data:info.data, user_id:id};
                const user_information = await UserInformationService.create(userInformation);
                if(user_information.error)
                {
                    return user_information.msg
                }
                           
            } catch (error) {
                return error
            }
        };

        return null

    }
    async singout({user_id}){

    }

    //Internal



    async valitdateInfo(id, data){
        const {payload} =  await CategoryItemService.getOne(id);
        const {required} = payload; 
     
        return this.validateInfoRequired(required,data); // and other validations
    }

    
    validateInfoRequired(required,data){
        if(required == "S"){
            return !(data == null || data == "");
        }
        return true
    }

    //Other Validations here




}


module.exports = new UserService