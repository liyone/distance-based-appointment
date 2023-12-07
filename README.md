# distance-based-appointment

I want to make a mobile webpage for appointment bookings,
I want the app to use google maps to calculate distance based on address

THere are two avatars:

`Admin`

- OTP? Social IDP?
- Add rules
- Add service items
  If you are a plumber, maybe list of service + time it takes for the rules engine

`User`

- Only books appointments

User flow: user goes on site,
User clicks button to book
--------------------APP start here--------------------
User gets redirected somehow to my app
First view is address,
second view is preferred date,
Third view is a list of available appointment slots (based on distance to existing appointments)
FOurth view is a list of what they are booking for (this screen should be flexible/different per user somehow?)

- Database driven page? ...
  Five i want to be able to add rules for my appointment calculations as an admin

# Decided Items

# Architecture

Infrastructure will be done through CDK
We will use github actions to deploy the CDK code with .workflow file.

### Front End

We are using Typescript React with Tailwind CSS

### Backend

We will be using NestJS deployed on a Lambda:
https://medium.com/nextfaze/deploying-serverless-api-with-nestjs-and-aws-cdk-3d41063543e0

# To Do

    - [ ] Make AWS account
    - [ ] Come up with mock up design for app, we're going mobile first
    - [ ] use tlDraw to come up with front end code
    - [ ] Spin up NestJS Service in Lambda
    - [ ] Spin up TURSO Database in Lambda. If this is not good enough, revert back to DynamoDB
    - [ ] Create an Appointments table
        - API gets Address + Date of Appointment
        - SELECT all records from Appointments table
            where Date of Appointment
            between Date of Appointment + 2 days
            and Date of Appointment - 2days
        - Calculate difference in distance between the Input Address and the Appointment.Address to see if the time slot is achievable
        - We will have a rules engine
    - [ ] Create sample API Route to write an appointment to a table
    - [ ] Add auth guard to sample route and make it public? we can use jwt auth
    - [ ]
    - [ ] Github Actions Workflow
    - [ ]
    - [ ] Gather training data
    - [ ] Create designs (figma, AI generated)
    - [ ] Write feature tickets
