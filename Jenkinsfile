pipeline {
    agent any

    stages{
        stage('Build'){
            steps {
                echo "✅ Just a simple build stage running"
                sh 'cat.file.txt'
            }
        }
        stage('Done') {
            steps {
                echo "🎉 Buildc complete. You can add more here later"
            }
        }
    }
}