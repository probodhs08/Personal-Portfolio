pipeline {
    agent any

    environment {
        IMAGE_NAME = 'personal-portfolio'
        CONTAINER_NAME = 'portfolio-container'
        HOST_PORT = '9090'
        CONTAINER_PORT = '80'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                echo "🐳 Building Docker image: $IMAGE_NAME"
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                echo "🛑 Stopping and removing old container if exists"
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                echo "🚀 Running new container: $CONTAINER_NAME on port $HOST_PORT"
                sh 'docker run -d --name $CONTAINER_NAME -p $HOST_PORT:$CONTAINER_PORT $IMAGE_NAME'
            }
        }

        stage('Done') {
            steps {
                echo "🎉 Deployment complete. Your portfolio is live on http://localhost:$HOST_PORT"
            }
        }
    }
}
