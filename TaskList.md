# Project Tasks Breakdown

## 1. Make AWS Account

**Summary:** Establish a new AWS account for the project.

**Description:** Set up a new Amazon Web Services (AWS) account to host and manage all the cloud resources needed for the project. This includes setting up the appropriate permissions and access controls.

**Acceptance Criteria:**

- A new AWS account is created.
- Necessary permissions and access controls are configured.
- The account is ready to host cloud resources for the project.

---

## 2. Mockup Design for Mobile App

**Summary:** Design mockups for the mobile application.

**Description:** Create detailed mockup designs for the mobile-first application, focusing on user experience and interface. The designs should be visually appealing and user-friendly.

**Acceptance Criteria:**

- Mockup designs are created for key screens of the app.
- The designs are reviewed and approved by the design team.
- The mockups are mobile-first and responsive.

---

## 3. Use tlDraw for Front-End Code

**Summary:** Utilize tlDraw for front-end code creation.

**Description:** Leverage tlDraw, a tool for drawing and diagramming, to generate and conceptualize the front-end code structure for the application.

**Acceptance Criteria:**

- Front-end code structure is designed using tlDraw.
- The design is reviewed and aligns with the project's front-end requirements.
- Code structure is exportable and integrable with the development workflow.

---

## 3.5. Deploy Front-End Code to S3 with Vite Compilation

**Summary:** Deploy the front-end code to an S3 hosted origin, compiled into a static bundle using Vite.

**Description:** The front-end code, conceptualized using tlDraw, will be compiled into a static bundle using Vite, a modern frontend build tool. This bundle will then be deployed to an Amazon S3 (Simple Storage Service) bucket, set up to serve as a web hosting origin.

**Acceptance Criteria:**

- The front-end code is successfully compiled into a static bundle using Vite.
- The compiled bundle is deployed to an Amazon S3 bucket.
- The S3 bucket is properly configured to host and serve the static website.
- The website is accessible publicly or through specified networks (as per project requirements).
- Proper documentation is created for the deployment process and configuration settings.

---

## 4. Spin up NestJS Service in Lambda

**Summary:** Implement a NestJS service on AWS Lambda.

**Description:** Develop and deploy a NestJS service within AWS Lambda to handle backend logic. Ensure that the service is scalable and integrates seamlessly with other AWS services.

**Acceptance Criteria:**

- A NestJS service is successfully deployed on AWS Lambda.
- The service is tested for scalability and performance.
- Integration with other AWS services is verified.

---

## 5. Spin up TURSO Database in Lambda

**Summary:** Deploy a TURSO Database in Lambda, with a fallback to DynamoDB.

**Description:** Deploy TURSO Database within AWS Lambda, ensuring its compatibility and performance. If TURSO doesn't meet requirements, fallback to using DynamoDB.

**Acceptance Criteria:**

- TURSO Database is deployed and operational in Lambda.
- Performance and compatibility tests are conducted.
- If TURSO is insufficient, a seamless transition to DynamoDB is executed.

---

## 6. Create an Appointments Table

**Summary:** Develop an Appointments table with specific functionalities.

**Description:** Create an Appointments table that stores records of appointments, including addresses and dates. Implement logic to select records within a specific date range and calculate distance differences.

**Acceptance Criteria:**

- The table stores addresses and appointment dates.
- Functionality to select records within ±2 days of a given date is implemented.
- Logic to calculate distance from an input address is operational.
- Integration with a rules engine is confirmed.

---

## 7. Create Sample API Route to Write an Appointment

**Summary:** Implement a sample API route for appointment creation.

**Description:** Develop an API route that allows writing an appointment record to the table. This will serve as a template for further API development.

**Acceptance Criteria:**

- A functional API route for creating appointments is implemented.
- The route is tested for correct data handling.
- The functionality is documented for future reference.

---

## 8. Add Auth Guard to Sample Route

**Summary:** Implement JWT authentication for the sample API route.

**Description:** Secure the sample API route with JWT (JSON Web Token) authentication, making it accessible only to authenticated users.

**Acceptance Criteria:**

- JWT authentication is integrated with the sample route.
- The route is tested for security and proper authentication flow.
- Documentation is updated to include authentication details.

---

## 9. Github Actions Workflow

**Summary:** Set up a Github Actions workflow.

**Description:** Create a continuous integration and deployment workflow using Github Actions to automate testing and deployment processes.

**Acceptance Criteria:**

- A CI/CD pipeline is set up using Github Actions.
- The pipeline successfully automates tests and deployments.
- Documentation on the workflow setup and operation is provided.

---

## 10. Gather Training Data

**Summary:** Collect data for training purposes.

**Description:** Accumulate a comprehensive set of data that will be used for training the system, ensuring it is diverse and relevant.

**Acceptance Criteria:**

- A substantial amount of relevant data is collected.
- The data is verified for diversity and relevance.
- The data is prepared and formatted for training processes.

---

## 11. Create Designs (Figma, AI-Generated)

**Summary:** Design visual elements using Figma and AI tools.

**Description:** Use Figma and AI-based design tools to create visual components of the application, ensuring they align with the overall design strategy.

**Acceptance Criteria:**

- Designs are created and stored in Figma.
- AI-generated designs are reviewed and integrated where applicable.
- The designs meet the project's aesthetic and functional requirements.

---

## 12. Write Feature Tickets

**Summary:** Document feature tickets for development.

**Description:** Break down the project into smaller, manageable feature tickets that clearly outline the objectives, requirements, and acceptance criteria for each feature.

**Acceptance Criteria:**

- A comprehensive list of feature tickets is created.
- Each ticket includes detailed descriptions and acceptance criteria.
- The tickets are prioritized and assigned to the development team.

---
