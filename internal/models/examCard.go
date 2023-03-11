package models

import (
	"time"
)

// ExamCard
// Describes examination card
type ExamCard struct {
	Id      int       `json:"id" gorm:"primary_key"`
	Variant int       `json:"variant_number"`
	Name    string    `json:"name"`
	Task    string    `json:"task" `
	Date    time.Time `json:"date"`
}
