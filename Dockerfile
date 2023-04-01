ARG GO_VERSION=1.20

FROM golang:${GO_VERSION} AS builder

WORKDIR /app

COPY .  /app

RUN go mod download

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build ./cmd/main.go

EXPOSE 1323
ENTRYPOINT ["/app/main"]
