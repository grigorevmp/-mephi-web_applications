package models

// User
// Describes Dozen user: Student or Tutor
type User struct {
	Id    int    `json:"id" gorm:"primary_key"`
	Name  string `json:"name"`
	Group string `json:"group"`
}
