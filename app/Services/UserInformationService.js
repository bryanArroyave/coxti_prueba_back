const UserInformationModel = use("App/Models/UserInformation");
const Env = use("Env");

class UserInformationService {
  async get(user_id) {
    try {

      const UserInformation = await UserInformationModel.query()
        .where("user_id", "=", user_id)
        .fetch();

      return {
        error: false,
        payload: UserInformation,
        msg: "successfully inserted",
      };
    } catch (error) {
      console.log(error);
      return { error: true, payload: null, msg: error.sqlMessage };
    }
  }

  async create({ category_item_id, user_id, data }) {
    try {
      const userinformation = { category_item_id, user_id, data };

      const UserInformation = await UserInformationModel.create(
        userinformation
      );
      return {
        error: false,
        payload: UserInformation,
        msg: "successfully inserted",
      };
    } catch (error) {
      return { error: true, payload: null, msg: error.sqlMessage };
    }
  }

  ExceptionUsuario(mensaje) {
    this.mensaje = mensaje;
    this.nombre = "ExceptionUsuario";
  }
}

module.exports = new UserInformationService();
