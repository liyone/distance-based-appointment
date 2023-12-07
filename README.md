# distance-based-appointment
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
    - [ ] Create sample API Route to write an appointment to a table
    - [ ] Add auth guard to sample route and make it public? we can use jwt auth
    - [ ]
    - [ ] Github Actions Workflow
    - [ ]
    - [ ] Gather training data
    - [ ] Create designs (figma, AI generated)
    - [ ] Write feature tickets
