package services

import (
	database2 "NSA_example/internal/database"
	"NSA_example/internal/database/interfaces"
	"NSA_example/internal/models"
	"NSA_example/internal/services/usecase/controller"
	"github.com/labstack/echo"
	"strconv"
)

type ExamController struct {
	Interactor controller.ExamInteractor
}

func NewExamController(sqlHandler interfaces.SqlHandler) *ExamController {
	return &ExamController{
		Interactor: controller.ExamInteractor{
			ExamRepository: &database2.ExamRepository{
				SqlHandler: sqlHandler,
			},
		},
	}
}

func (controller *ExamController) Create(c echo.Context) {
	u := models.Exam{}
	c.Bind(&u)
	controller.Interactor.Add(u)
	createdExams := controller.Interactor.GetInfo()
	c.JSON(201, createdExams)
	return
}

func (controller *ExamController) GetExam() []models.Exam {
	res := controller.Interactor.GetInfo()
	return res
}

func (controller *ExamController) GetExamForUser(userId int, examCardId int) string {
	res := controller.Interactor.SelectUserResult(userId, examCardId)

	str := ""
	for _, exam := range res {
		str += "Студент " + exam.User.Name + " сдал " + exam.Tutor.Name + " на оценку " + strconv.Itoa(exam.Mark) + "(" + exam.ECTS + ")" + ": " + exam.Comment
	}

	return str
}

func (controller *ExamController) Delete(id string) {
	controller.Interactor.Delete(id)
}
