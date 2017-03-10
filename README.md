# CareerCon

## Backend
    Building docker image:
        - go to careercon/backend
        - docker build -t backend-image .
    Publishing docker image:
        - docker login
        - docker push backend-image
## Frontend
    Building frontend:
        - go to careercon/frontend
        - change src/environments/environment.prod.ts backendEndpoint
        - npm install
        - npm run build
    Building docker image:
        - go to careercon/frontend
        - docker build -t frontend-image .