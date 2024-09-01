package controller

import (
	"NSA_example/internal/models"
	"NSA_example/internal/services/usecase/repo"
)

type ExamCardInteractor struct {
	ExamCardRepository repo.ExamCardRepository
}

func (interactor *ExamCardInteractor) Add(u models.ExamCard) {
	interactor.ExamCardRepository.Store(u)
}

func (interactor *ExamCardInteractor) GetInfo() []models.ExamCard {
	return interactor.ExamCardRepository.Select()
}

func (interactor *ExamCardInteractor) Delete(id string) {
	interactor.ExamCardRepository.Delete(id)
}
