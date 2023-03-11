package repo

import (
	"NSA_example/internal/models"
)

type UserRepository interface {
	Store(models.User)
	Select() []models.User
	Delete(id string)
}
