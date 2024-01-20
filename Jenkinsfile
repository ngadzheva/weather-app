node {
    stage('Checkout') {
        git 'https://github.com/alcfeoh/weather-app'
    }
    nodejs('v9') {
        stage('Install') {
           sh 'npm install'
        }
        stage('Build') {
           sh 'ng build' 
        }
        stage('Test') {
           sh 'ng test --watch=false --code-coverage' 
        }
        stage('Archive') {
           archiveArtifacts 'dist/**'
        }
    }
}
