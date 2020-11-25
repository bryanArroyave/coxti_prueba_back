const CategoryModel = use("App/Models/Category");

class CategoryService {
  async getAll() {
    try {
      const category = await CategoryModel.all();
      return { error: false, payload: category, msg: "" };
    } catch (error) {
      console.log(error);
      return { error: true, msg: error };
    }
  }

  async get(id) {
    try {
      const category = await CategoryModel.find(id);
      if (category) {
        return { error: false, payload: category, msg: "" };
      } else {
        return { error: true, payload: null, msg: "category " + id +" doesn't exists" };
      }
    } catch (error) {
    
      return { error: true, msg: error };
    }
  }
}

module.exports = new CategoryService();
