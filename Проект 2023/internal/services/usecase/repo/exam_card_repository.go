package repo

import (
	"NSA_example/internal/models"
)

type ExamCardRepository interface {
	Store(models.ExamCard)
	Select() []models.ExamCard
	Delete(id string)
}
