pipeline {
    agent any

    environment {
        IMAGE_NAME = 'my-portfolio'
        CONTAINER_NAME = 'portfolio-container'
        DOCKER_REGISTRY = '' // Optional: Docker Hub username if you push
    }

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'git-creds', url: 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t $IMAGE_NAME ."
                }
            }
        }

        stage('Stop Old Container') {
            steps {
                script {
                    sh "docker stop $CONTAINER_NAME || true"
                    sh "docker rm $CONTAINER_NAME || true"
                }
            }
        }

        stage('Run New Container') {
            steps {
                script {
                    sh "docker run -d --name $CONTAINER_NAME -p 9090:80 $IMAGE_NAME"
                }
            }
        }
    }
}
