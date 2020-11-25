"use strict";
const CategoryService = use("App/Services/CategoryService");
const CategoryItemService = use("App/Services/CategoryItemService");
class CategoryController {
  async get({ response: res, request: req }) {
    try {
      const { id } = req.params;
      const category = await CategoryService.get(id);
      return category.error ? res.badRequest(category) : res.ok(category);
    } catch (error) {
      return res.internalServerError(error);
    }
  }

  async getAll({ response: res }) {
    try {
      const category = await CategoryService.getAll();
      return category.error ? res.badRequest(category) : res.ok(category);
    } catch (error) {
      return res.internalServerError(error);
    }
  }

  async getAllItems({ response: res, request: req, auth }) {
    try {
      const { id } = req.params;

      const categoryItems = await CategoryItemService.getAll(id);
      return categoryItems.error
        ? res.badRequest(categoryItems)
        : res.ok(categoryItems);
    } catch (error) {
      return res.internalServerError(error);
    }
  }

}

module.exports = CategoryController;
