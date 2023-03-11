package repo

import (
	"NSA_example/internal/models"
)

type ExamRepository interface {
	Store(models.Exam)
	Select() []models.Exam
	SelectUserResult(userId int, examCardId int) []models.Exam
	Delete(id string)
}
