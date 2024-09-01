package database

import (
	"NSA_example/internal/database/interfaces"
	"NSA_example/internal/models"
)

type ExamCardRepository struct {
	interfaces.SqlHandler
}

func (db *ExamCardRepository) Store(u models.ExamCard) {
	db.Create(&u)
}

func (db *ExamCardRepository) Select() []models.ExamCard {
	var examCard []models.ExamCard
	db.FindAll(&examCard)
	return examCard
}

func (db *ExamCardRepository) Delete(id string) {
	var examCard []models.ExamCard
	db.DeleteById(&examCard, id)
}
