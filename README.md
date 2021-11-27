# MyResume Web Application
# San Jose State University <br />
# Team Members
  - Elias
  - Saikiran
  - Michael
  - Emilio 
  
# Project Introduction
   Our application is a resume building web app allowing users to create an account, login, and store their resume content to local storage. The application shows a real-time
   preview of the users resume on the right while inputting their information on the left. The application auto-formats the users resume to help minimalize scrutiny to organization
   and architecture. When the user is done creating their resume, they may download their resume as a PDF. We involed a recruiter page to demonstrate our vision on having 
   recruiters be able to filter resumes to reach out to users for job opportunities.
  
# Instructions for running the project locally through docker(preferred)
1. Download Github zip file
2. Unzip the file and go into the folder directory using terminal
3. Open docker
<br>4. cd into myresume in the terminal/command prompt
<br>5. In terminal, type: docker build . -t myresume
<br>6. In terminal, type: docker-compose build
<br>7. In terminal, type: docker-compose up
<br>8. Go to localhost:8000 or 0.0.0.0:8000

# Instructions for running the project locally
1. Download Github zip file
2. Unzip the file and open up two terminals
3. To start the django framework, on one of the terminals go to the main root directory where the file "manage.py" is
<br>In terminal type: python manage.py runserver
4. To start react js, on the second terminal go to the folder called "frontend"
<br>In terminal, type: npm build
<br>Next, in terminal, type: npm install
<br>Finally, in terminal, type: npm run dev
5. After running "npm build" and "npm install", these commands only need to be ran once when in the frontend folder. Moving forward to run the application for react js, only "npm run dev" is required.
6. Make sure both "python manage.py runserver" and "npm run dev" are running concurrently.
7. Finally, go to 127.0.0.1:8000 on your web browser to use the application.

# Code Structure

