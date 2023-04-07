package transport

import (
	"NSA_example/internal/database"
	controllers "NSA_example/internal/services"
	"strconv"

	"github.com/labstack/echo"
	"net/http"
)

func Init(e *echo.Echo) {
	userController := controllers.NewUserController(database.NewSqlHandler())
	examCardController := controllers.NewExamCardController(database.NewSqlHandler())
	examController := controllers.NewExamController(database.NewSqlHandler())

	// Users

	e.GET("/users", func(c echo.Context) error {
		users := userController.GetUser()
		c.Bind(&users)
		return c.JSON(http.StatusOK, users)
	})

	e.GET("/user/:id", func(c echo.Context) error {
		users := userController.GetUser()
		c.Bind(&users)
		return c.JSON(http.StatusOK, users)
	})

	e.POST("/users", func(c echo.Context) error {
		userController.Create(c)
		return c.String(http.StatusOK, "created")
	})

	e.DELETE("/users/:id", func(c echo.Context) error {
		id := c.Param("id")
		userController.Delete(id)
		return c.String(http.StatusOK, "deleted")
	})

	// ExamCard

	e.GET("/exam_cards", func(c echo.Context) error {
		users := examCardController.GetExamCard()
		c.Bind(&users)
		return c.JSON(http.StatusOK, users)
	})

	e.POST("/exam_cards", func(c echo.Context) error {
		examCardController.Create(c)
		return c.String(http.StatusOK, "created")
	})

	e.DELETE("/exam_cards/:id", func(c echo.Context) error {
		id := c.Param("id")
		examCardController.Delete(id)
		return c.String(http.StatusOK, "deleted")
	})

	// Exam

	e.GET("/exams", func(c echo.Context) error {
		users := examController.GetExam()
		c.Bind(&users)
		return c.JSON(http.StatusOK, users)
	})

	e.POST("/pass_exam", func(c echo.Context) error {
		examController.Create(c)
		return c.String(http.StatusOK, "created")
	})

	e.GET("/exam/:userId/:examId", func(c echo.Context) error {
		userId, _ := strconv.Atoi(c.Param("userId"))
		examId, _ := strconv.Atoi(c.Param("examId"))
		exam := examController.GetExamForUser(userId, examId)
		c.Bind(&exam)
		return c.JSON(http.StatusOK, exam)
	})

	e.DELETE("/users/:id", func(c echo.Context) error {
		id := c.Param("id")
		examController.Delete(id)
		return c.String(http.StatusOK, "deleted")
	})

	// Start server
	e.Logger.Fatal(e.Start(":1323"))
}
