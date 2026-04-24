pipeline {
    agent any

    stages {
        stage('Build Docker') {
            steps {
                sh 'docker build -t minha-app ./backend'
            }
        }

        stage('Subir containers') {
            steps {
                sh 'docker compose down'
                sh 'docker compose up -d'
            }
        }

        stage('Testar API') {
            steps {
                sh 'sleep 10'
                sh 'curl http://localhost:3000'
            }
        }
    }
}