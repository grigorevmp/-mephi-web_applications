package models

// Exam
// Describes user exam
type Exam struct {
	StudentId  int      `json:"student_id" gorm:"primary_key"`
	TutorId    int      `json:"tutor_id" gorm:"primary_key"`
	ExamCardId int      `json:"exam_card_id" gorm:"primary_key"`
	Passed     bool     `json:"passed"`
	Mark       int      `json:"mark"`
	ECTS       string   `json:"ects"`
	Comment    string   `json:"comment"`
	User       User     `json:"user" gorm:"foreignKey:StudentId"`
	Tutor      User     `json:"tutor" gorm:"foreignKey:TutorId"`
	ExamCard   ExamCard `json:"examCard" gorm:"foreignKey:ExamCardId"`
}
