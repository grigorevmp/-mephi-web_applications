package app

import (
	"NSA_example/internal/config"
	"NSA_example/internal/models"
	"NSA_example/internal/transport"
	"fmt"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Server struct {
	state bool
}

func (server *Server) Start() {
	dbinit()
	e := echo.New()
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

	transport.Init(e)

	e.Logger.Fatal(e.Start(config.ServerPort))
}

func dbinit() {

	db, err := gorm.Open(postgres.Open(config.DatabaseUrl), &gorm.Config{})

	err = db.Migrator().CreateTable(models.User{})
	if err != nil {
		fmt.Print("User already exists")
	}
	err = db.Migrator().CreateTable(models.Exam{})
	if err != nil {
		fmt.Print("Exam already exists")
	}
	err = db.Migrator().CreateTable(models.ExamCard{})
	if err != nil {
		fmt.Print("ExamCard already exists")
	}
}
