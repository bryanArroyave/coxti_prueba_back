'use strict'

const { formatters } = use('Validator');

class UserInformation {
  get rules() {
    return {
      data: "required | alpha_numeric",
      user_id: "required | alpha_numeric",
      category_item_id: "required | alpha_numeric",
    };
  }

  get validateAll() {
    return true;
  }

  get formatter() {
    return formatters.JsonApi;
  }

  get messages() {
    return {
      "data.required": "You must provide a data",
      "data.alpha_numeric" : "The field only can be alpha numeric",
      "user_id.required" : "You must provide a user_id",
      "user_id.alpha_numeric" : "The field only can be alpha numeric",
      "category_item_id.required" : "You must provide a category_item_id",
      "category_item_id.alpha_numeric" : "The field only can be alpha numeric"
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.badRequest(errorMessages);
  }
}

module.exports = UserInformation
