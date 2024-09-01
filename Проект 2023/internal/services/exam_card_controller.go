package services

import (
	database2 "NSA_example/internal/database"
	"NSA_example/internal/database/interfaces"
	"NSA_example/internal/models"
	"NSA_example/internal/services/usecase/controller"
	"github.com/labstack/echo"
)

type ExamCardController struct {
	Interactor controller.ExamCardInteractor
}

func NewExamCardController(sqlHandler interfaces.SqlHandler) *ExamCardController {
	return &ExamCardController{
		Interactor: controller.ExamCardInteractor{
			ExamCardRepository: &database2.ExamCardRepository{
				SqlHandler: sqlHandler,
			},
		},
	}
}

func (controller *ExamCardController) Create(c echo.Context) {
	u := models.ExamCard{}
	c.Bind(&u)
	controller.Interactor.Add(u)
	createdExamCards := controller.Interactor.GetInfo()
	c.JSON(201, createdExamCards)
	return
}

func (controller *ExamCardController) GetExamCard() []models.ExamCard {
	res := controller.Interactor.GetInfo()
	return res
}

func (controller *ExamCardController) Delete(id string) {
	controller.Interactor.Delete(id)
}
