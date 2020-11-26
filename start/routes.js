"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.group(() => {
  Route.post("/", "UserInformationController.create").validator(
    "UserInformation"
  );  
  Route.get("/", "UserInformationController.get");
})
  .prefix("api/userinformation")
 .middleware(["auth"]);

Route.group(() => {
  Route.post("/singin", "AuthController.singin");
  Route.post("/login", "AuthController.login");
  Route.post("/logout", "AuthController.logout");
  Route.get("/get/:id", "AuthController.getUser");
}).prefix("api/auth");

Route.group(() => {
  Route.get("/:id", "CategoryController.get");
  Route.get("", "CategoryController.getAll");
  Route.get("/:id/item", "CategoryController.getAllItems");
  Route.get("/:id/item/:item_id", "CategoryController.get");
})
  .prefix("api/category")
 // .middleware(["auth"]);
