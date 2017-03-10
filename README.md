# CareerCon

## Backend
    Buildind docker image:
        - go to careercon/backend
        - docker build -t backend-image .
    Publishin docker image:
        - docker login
        - docker push backend-image
## Frontend
    Building frontend:
        - go to careercon/frontend
        - go to frontend folder
        - npm install
        - npm run build
    Building docker image:
        - go to careercon/frontend
        - docker build -t frontend-image .