package controller

import (
	"NSA_example/internal/models"
	"NSA_example/internal/services/usecase/repo"
)

type ExamInteractor struct {
	ExamRepository repo.ExamRepository
}

func (interactor *ExamInteractor) Add(u models.Exam) {
	interactor.ExamRepository.Store(u)
}

func (interactor *ExamInteractor) GetInfo() []models.Exam {
	return interactor.ExamRepository.Select()
}

func (interactor *ExamInteractor) SelectUserResult(userId int, examCardId int) []models.Exam {
	return interactor.ExamRepository.SelectUserResult(userId, examCardId)
}

func (interactor *ExamInteractor) Delete(id string) {
	interactor.ExamRepository.Delete(id)
}
