pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/probodhs08/Personal-Portfolio.git'
            }
        }

        stage('Build') {
            steps {
                echo 'No build step needed for static portfolio. Skipping...'
            }
        }

    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
