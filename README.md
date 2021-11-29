# MyResume Web Application
# San Jose State University <br />
# Team Members
  - Elias
  - Saikiran
  - Michael
  - Emilio 

# Code Repository
https://github.com/eliasfaris/MyResume

# Demo Video
https://youtu.be/tjklcsX-fas

# Project Introduction
   Our application is a resume building web app allowing users to create an account, login, and store their resume content to local storage. The application shows a real-time
   preview of the users resume on the right while inputting their information on the left. The application auto-formats the users resume to help minimalize scrutiny to organization
   and architecture. When the user is done creating their resume, they may download their resume as a PDF. We involed a recruiter page to demonstrate our vision on having 
   recruiters be able to filter resumes to reach out to users for job opportunities.
   
# Running the project through the web
http://ec2-35-182-221-124.ca-central-1.compute.amazonaws.com:8000/
  
# Instructions for running the project locally through docker(preferred)
1. Download Github zip file
2. Unzip the file and go into the folder directory using terminal
3. Open a terminal/command prompt and go to the root directory where the DockerFile is
<br>a. Once reached the directory with the DockerFile is, in terminal, type: docker build . -t myresume
<br>b. Next, in terminal, type: docker-compose build
<br>c. Next, in terminal, type: docker-compose up
<br>d. Finally, go to a web browser and type: localhost:8000 or 0.0.0.0:8000

# Instructions for running the project locally
1. Download Github zip file
2. Unzip the file and open up two terminals
3. To begin, go to the root directory where the file "manage.py" is and in terminal, type: pip install -r requirements.txt
4. To start the django framework, on one of the terminals go to the main root directory where the file "manage.py" is
<br>a. In terminal type: python manage.py runserver
4. To start react js, on the second terminal go to the folder called "frontend"
<br>a. In terminal, type: npm build
<br>b. Next, in terminal, type: npm install
<br>c. Finally, in terminal, type: npm run dev
5. After running "npm build" and "npm install", these commands only need to be ran once when in the frontend folder. Moving forward to run the application for react js, only "npm run dev" is required.
6. Make sure both "python manage.py runserver" and "npm run dev" are running concurrently.
7. Finally, go to 127.0.0.1:8000 on your web browser to use the application.

# Code Structure
<img width="530" alt="Architecture Design" src="https://user-images.githubusercontent.com/54566871/143754170-80bc3323-daf2-4ae3-861e-3962287ffddb.png">
<img width="829" alt="codestructure" src="https://user-images.githubusercontent.com/54566871/143808155-fa96b024-83aa-4dd4-bcee-85278e02f564.png">
The MyResume web application is a full stack application with Django's Python framework to taking care of the backend. There are folders in the root directory specified as "MyResume," "Student," and "Recruiter" that take care of the different models, views, and urls, to render users appropriately. Similarely, there is another folder called, "accounts" which is taking care of the authentication of the users using serializers to create queries and communicate with the database to validate. The database utilized is mySQL. Within the "frontend" folder in the root directory, this is React JS taking care of the frontend of the application. This is where the user interface is being implemented and the real-time processing is taken place when inputting resume content. The "node_module" folder is a defualt created folder when implementing React JS projects. The sqlite3 file is our database schemas that are attached to Django in the backend. The git folders/files are used to allow us to communicate to GitHub and work synchronously on the code from our local computers. The docker files are to containerize our project, meaning to package our application and all of its dependencies such as installs, so that anyone wanting to download our application on their local computers can do so without any installation errors .


