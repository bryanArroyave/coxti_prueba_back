'use strict'

const UserService = use("App/Services/UserService");

class AuthController {

    async singin({response : res, request:req}){
        
        try {
           
            const user_items = req.body
           
            const user = await UserService.singin(user_items);
            return user.error ? res.badRequest(user): res.ok(user);
          } catch (error) {
            return res.internalServerError(error);
          }
    }

    async singout({response : res, request:req}){

        try {
           
          } catch (error) {
            return res.internalServerError(error);
          }
    }

    async login({response : res, request:req}){

        try {
           
          } catch (error) {
            return res.internalServerError(error);
          }
    }

    async logout({response : res, request:req}){

        try {
           
          } catch (error) {
            return res.internalServerError(error);
          }
    }


}

module.exports = AuthController
