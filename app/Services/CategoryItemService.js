const CategoryItemModel = use("App/Models/CategoryItem");

class CategoryItemService {
  async getAll(category_id) {
    try {
      const category_item = await CategoryItemModel.query()
        .where("category_id", "=", category_id)
        .fetch();

      if (category_item.rows.length > 0)
        return { error: false, payload: category_item, msg: "category items" };
      else
        return {
          error: true,
          payload: [],
          msg: "Category " + category_id + " is emprty",
        };
    } catch (error) {
      console.log(error);
      return { error: true, msg: error };
    }
  }
  async create({ name }) {
    try {
      const category = { name };
      const categoryItem = await CategoryItemModel.create(category);
      return {
        error: false,
        payload: categoryItem,
        msg: "Insertado con exito",
      };
    } catch (error) {
      return { error: true, msg: error };
    }
  }

  async get() {
    try {
      const category = await CategoryItemModel.all();

      return { error: false, payload: category, msg: "" };
    } catch (error) {
      console.log(error);
      return { error: true, msg: error };
    }
  }

  async getOne(id) {
    try {
      const categoryItem = await CategoryItemModel.find(id);

      return { error: false, payload: categoryItem["$attributes"], msg: "" };
    } catch (error) {
      return { error: true, msg: error };
    }
  }
}

module.exports = new CategoryItemService();
