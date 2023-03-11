package database

import (
	"NSA_example/internal/database/interfaces"
	"NSA_example/internal/models"
)

type ExamRepository struct {
	interfaces.SqlHandler
}

func (db *ExamRepository) Store(e models.Exam) {
	db.Create(&e)
}

func (db *ExamRepository) Select() []models.Exam {
	var exam []models.Exam
	db.FindAll(&exam)
	return exam
}

func (db *ExamRepository) SelectUserResult(userId int, examCardId int) []models.Exam {
	var exam []models.Exam
	db.Preload("User").Preload("ExamCard").Preload("Tutor").Where("student_id = ?", userId).Where("exam_card_id = ?", examCardId).Find(&exam)
	return exam
}

func (db *ExamRepository) Delete(id string) {
	var exam []models.Exam
	db.DeleteById(&exam, id)
}
