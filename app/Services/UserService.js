const UserModel = use("App/Models/User");
const TokenModel = use("App/Models/Token");
const UserInformationService = use("App/Services/UserInformationService");
const CategoryItemService = use("App/Services/CategoryItemService");
const Encryption = use("Encryption");

const Env = use("Env");

class UserService {
  async getUser(auth) {
    try {
      return await auth.getUser();
    } catch (error) {
      return null;
    }
  }

  async check(auth) {
    try {
      return await auth.check();
    } catch (error) {
      return null;
    }
  }
  //Routes
  async login({ email, password }, auth) {
    try {
      const user = await this.get(email);
      const { id } = user["$attributes"];
      if (!(await this.isLogged(id))) {
        const token = await auth.withRefreshToken().attempt(email, password);
        return {
          error: false,
          payload: token,
          msg: "user was logged",
        };
      } else {
        return { error: true, payload: null, msg: "user is logged already" };
      }
    } catch (error) {
      console.log(error);
      return { error: true, payload: null, msg: error + "" };
    }
  }

  async logout(auth) {
    try {
      const user = await auth.getUser();

      const token_deleted = await user
        .tokens()
        .where("type", "jwt_refresh_token")
        .delete();

      if (token_deleted)
        return { error: false, payload: null, msg: "user was logged out" };
      else return { error: true, payload: null, msg: "user is logged already" };
    } catch (error) {
      console.log(error);
      return { error: true, payload: null, msg: error + "" };
    }
  }

  async singin(user_information) {
    const userInformation_array = [];
    const errorFields = [];
    let msg = "";
    let error = false;
    let payload_data = null;

    try {
      const { payload } = await CategoryItemService.get();
      const categoryItems = payload.rows;

      for (const categoryItem of categoryItems) {
        const data = user_information[categoryItem.id];
        const validado = await this.valitdateInfo(categoryItem.id, data);
        if (!validado) {
          const name = categoryItem.name;
          errorFields.push(name);
        } else {
          const userInformation = {
            category_item_id: categoryItem.id,
            data,
          };
          userInformation_array.push(userInformation);
        }
      }

      if (errorFields.length > 0) {
        msg = "no field can be empty";
      } else {
        const user = {
          email: await this.getEmail(userInformation_array),
          password: await this.getPassword(userInformation_array),
        };

        const createdUser = await this.createUser(user, userInformation_array);
        error = createdUser.error;
        msg = createdUser.msg;
        payload_data = createdUser.payload;
      }
      return { error, payload: payload_data, msg };
    } catch (error) {
      console.log(error);
      return { error: true, payload: null, msg: error.sqlMessage };
    }
  }

  async get(email) {
    const user = await UserModel.findBy("email", email);
    return user;
  }

  async getUserByEmail(email) {
    try {
      const user = await UserModel.query().where("email", "=", email).fetch();

      if (user.rows.length > 0)
        return { error: false, payload: user.rows[0], msg: "user" };
      else
        return {
          error: true,
          payload: [],
          msg: "email " + email + " doesn't exists",
        };
    } catch (error) {
      console.log(error);
      return { error: true, msg: error };
    }
  }
  async createUser(user, userInformation_array) {
    try {
      console.log(user);
      const User = await UserModel.create(user);
      const { id } = User["$attributes"];
      await this.createUserInfo(id, userInformation_array);
      return {
        error: false,
        payload: { id: User.id, email: User.email },
        msg: "successfully inserted",
      };
    } catch (error) {
      console.log(error);
      return { error: true, payload: null, msg: error.sqlMessage };
    }
  }

  async createUserInfo(id, data) {
    for (const info of data) {
      try {
        const userInformation = {
          category_item_id: info.category_item_id,
          data: info.data,
          user_id: id,
        };
        const user_information = await UserInformationService.create(
          userInformation
        );
        if (user_information.error) {
          return user_information.msg;
        }
      } catch (error) {
        return error;
      }
    }

    return null;
  }

  async getPassword(userInformation_array) {
    const password_id = Env.get("ID_PASSWORD");
    for (const info of userInformation_array) {
      if (info.category_item_id == password_id) return info.data;
    }

    return null;
  }

  async getEmail(userInformation_array) {
    const password_id = Env.get("ID_EMAIL");
    for (const info of userInformation_array) {
      if (info.category_item_id == password_id) return info.data;
    }

    return null;
  }
  //Internal

  async valitdateInfo(id, data) {
    const { payload } = await CategoryItemService.getOne(id);
    const { required } = payload;

    return this.validateInfoRequired(required, data); // and other validations
  }

  validateInfoRequired(required, data) {
    if (required == "S") {
      return !(data == null || data == "");
    }
    return true;
  }

  async getTokens(user_id) {
    try {
      const user = await TokenModel.findBy("user_id", user_id);

      return user;
    } catch (error) {
      return null;
    }
  }

  async isLogged(user_id) {
    return (await this.getTokens(user_id)) != null;
  }
  //Other Validations here
}

module.exports = new UserService();
