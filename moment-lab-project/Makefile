all: build run

build:
	docker build . -t momentlab-frontend:latest
run:
	docker run -p 8000:8000 momentab-frontend:latest
stop:
	docker stop momentlab-frontend:latest