"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const UserService = use("App/Services/UserService");

class Auth {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request: req, response: res, auth }, next) {
    try {
      const user = await UserService.getUser(auth);

      if (user) {
        const { id } = user["$attributes"];

        const logged = await UserService.isLogged(id);
        req.body.user_id = id;
        req.user_id = id;
        console.log(id);
        if (logged) {
          await next();
        } else {
          return res.badRequest({
            error: true,
            payload: null,
            msg: "invalid token",
          });
        }
      } else {
        return res.badRequest({
          error: true,
          payload: null,
          msg: "invalid user",
        });
      }
    } catch (error) {
      console.log(error + "");
      return res.internalServerError(error + "");
    }
  }
}

module.exports = Auth;
