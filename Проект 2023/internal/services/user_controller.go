package services

import (
	"NSA_example/internal/database"
	"NSA_example/internal/database/interfaces"
	"NSA_example/internal/models"
	"NSA_example/internal/services/usecase/controller"
	"github.com/labstack/echo"
)

type UserController struct {
	Interactor controller.UserInteractor
}

func NewUserController(sqlHandler interfaces.SqlHandler) *UserController {
	return &UserController{
		Interactor: controller.UserInteractor{
			UserRepository: &database.UserRepository{
				SqlHandler: sqlHandler,
			},
		},
	}
}

func (controller *UserController) Create(c echo.Context) {
	u := models.User{}
	c.Bind(&u)
	controller.Interactor.Add(u)
	createdUsers := controller.Interactor.GetInfo()
	c.JSON(201, createdUsers)
	return
}

func (controller *UserController) GetUser() []models.User {
	res := controller.Interactor.GetInfo()
	return res
}

func (controller *UserController) GetUserResult() []models.User {
	res := controller.Interactor.GetInfo()
	return res
}

func (controller *UserController) Delete(id string) {
	controller.Interactor.Delete(id)
}
