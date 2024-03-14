# E-Portal For Court Case Management System

## Introduction
The E-Portal for Court Case Management System is a web application designed to streamline the management of court cases, facilitating both lawyers and clients in handling their legal matters efficiently.

## Getting Started
These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites
- Node.js
- MongoDB
- Python IDE (version 3.11.3)
- Visual Studio Code or any other preferred code editor

### Installation
1. **Clone Repository**: 

## Usage
1. **Database Setup**: Open a web browser and navigate to `localhost:3000/lawyer/number`. Create the `bar_association` database in MongoDB by entering a random bar association number and name for a lawyer. Ensure to write the lawyer's name in lowercase.

2. **Access the Portal**: Open a web browser and enter `localhost:3000` in the address bar. You will be directed to the index.html page.

3. **Registration/Login**:
- Click on the "Register/Login" button to display two options: lawyer or client.
- Choose the desired option.
- For Lawyer Registration/Login:
    - Fill in all the required details and the bar number.
    - After clicking the submit button, the webcam will open. Press the 'v' key on your keyboard to capture your image, which will be stored in the `FaceId/application_data/verify_image` path.
- For Client Registration/Login:
    - Register with correct details.
    - After registration, login using the provided credentials.

4. **Dashboard**: Upon successful login, lawyers will be directed to their respective dashboard, where they can manage their cases.

## Built With
- Node.js
- MongoDB
- Python
- TensorFlow
- OpenCV
- HTML/CSS/JavaScript

## Authors
- [Sanket Sanjay Pote](https://github.com/sanketsanjaypote29) - *Initial work*

## License
This project is licensed under the [MIT License](LICENSE).
