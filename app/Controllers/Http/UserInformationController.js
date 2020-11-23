'use strict'
const UserInformationService = use("App/Services/UserInformationService");

class UserInformationController {
    async create({response : res, request:req}){

        try {
            const {category_item_id,user_id,data } = req.body;
            const userInformation = {category_item_id,user_id,data } 
            const user_information = await UserInformationService.create(userInformation);
            return user_information.error ? res.badRequest(user_information): res.ok(user_information);
          } catch (error) {
            return res.internalServerError(error);
          }
    }
}

module.exports = UserInformationController
