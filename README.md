## Build Week --- Anywhere Fitness API
All-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held.

### Base URL: https://bw-anywhere-fitness-api.herokuapp.com/

## Getting Started

## Data Schemas

Client/Instructor
{ username: string - REQUIRED password: string - REQUIRED }

Class:
```json
{
        "id": integer,
        "instructor_id": integer,
        "name": "string" - REQUIRED,
        "type": "string" - REQUIRED,
        "start_time": "string" - REQUIRED,
        "duration": "sting" - REQUIRED,
        "intensity": integer - REQUIRED,
        "location": "string" - REQUIRED,
        "register_attendees": integer - REQUIRED,
        "max_size": integer - REQUIRED
}
```

## Login/Register:

CLIENT LOGIN/REGISTER
```json
GET:   /api/client   (GET ALL REGISTERED CLIENTS)
POST:  /api/auth/client_register (REGISTER A CLIENT)
POST:  /api/auth/client_login    (LOGIN WITH REGISTERED CLIENT)
```

```json
INSTRUCTOR LOGIN/REGISTER
GET:   /api/instructor   (GET ALL REGISTERED INSTRUCTORS)
POST:  /api/auth/instructor_register (REGISTER AN INSTRUCTOR)
POST:  /api/auth/instructor_login    (LOGIN WITH REGISTERED INSTRUCTOR)
```

## Class endpoints

```json
POST:   /api/class/:id/ (ADD CLASS)
GET:    /api/class/     (GET ALL CLASSES)
GET:    /api/class/:id/ (GET CLASS By ID)
PUT:    /api/class/:id/ (EDIT CLASS By ID)
DELETE: /api/class/:id/ (DELETE CLASS By ID)
```

### Built With
Dropwizard - The web framework used
Maven - Dependency Management
ROME - Used to generate RSS Feeds

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

### Authors
Samuel Ardis - Back-End Developer
Daniel McNamara- Back-End Developer

### License
This project is licensed under the MIT License - see the LICENSE.md file for details

### Acknowledgments
Hat tip to anyone whose code was used
Lambda School for the training to complete this project
TLs, SLs, and fellow students for help and quidance
