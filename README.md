# 24G Drive Backend Practical Test

The **24G Drive Backend Practical Test** is a technical evaluation designed to assess the candidate's proficiency in developing a RESTful API using TypeScript and MySQL. The objective is to implement several API routes to handle basic CRUD (Create, Read, Update, Delete) operations, ensuring appropriate handling of HTTP requests and responses, alongside data interaction with a MySQL database.

## Key Aspects

### 1. API Development:

- **Language:** TypeScript
- **Database:** MySQL
- **Packages:** Use what the 2772-1-lxp-base-api uses

### 2. API Route Requirements:

- **Create User (`POST /users`):**
  - Accept a JSON payload with `firstName` and `lastName`.
  - Return the `id` of the new user.
- **Retrieve User (`GET /users/:id`):**
  - Fetch and return the user's data using `id`.
  - Handle non-existent users with a 404 status code.
- **Update User (`PATCH /users/:id`):**
  - Update user data using provided `id` and payload.
  - Use a 204 status code for successful updates and 404 for non-existent users.
- **Delete User (`DELETE /users/:id`):**
  - Delete the user using the provided `id`.
  - Use a 204 status code for successful deletion and 404 if the user doesn’t exist.

### 3. Analytics Requirement

- **User Report**
  - Write a script in Typescript that generates a CSV file with the following columns, one row for each user in the database. Order the data by users first and last name, alphabetically.
    - `id`, `firstName`, `lastName`, `totalLogins` (count), `lastLogin` (datetime).
   
Example

| id | firstName | lastName | totalLogins | lastLogin |
|----|-----------|----------|-------------|-----------|
| 2 | Elena | Rodriguez | 8 | 2025-10-15T18:12:33Z |
| 3 | Marcus | Johnson | 132 | 2025-10-16T14:45:02Z |
| 1 | Sarah | Chen | 47 | 2025-10-17T09:23:15Z |

### 4. Validation & Testing:

- Ensure data is persisted using MySQL.
- Validate API input/output through test requests.
- Utilize the provided script (`npm run test http://localhost:3000`) for testing before submission. Change the port if different.
- Report script should be executable via `npx ts-node ./generate-user-report.ts` or similar and output the report as a CSV file in the current directory the command is being executed from. 

## Key Considerations:

- Ensure accurate and consistent HTTP status codes.
- Implement robust error handling.
- Ensure consistent API request and response structures.

The test is structured to evaluate API development, database management, data validation, and error handling skills of the candidates by ensuring alignment with the specified route requirements.

# Submission Instructions

Ensure to follow the guidelines below for packaging and submitting your project upon completion:

## Project Packaging:

### 1. Exclude `node_modules`:

- Do **not** include the `node_modules` directory.
- Ensure your `package.json` is accurate for dependency installation via `npm install`.

### 2. Zipping the Project:

- Compress the project folder into a `.zip` file, excluding `node_modules`.

## Online Hosting for Download:

### 3. Cloud Storage:

- Upload the `.zip` file to a cloud storage platform (Google Drive, Dropbox, etc.).

### 4. Accessible Link:

- Generate and test a public link for downloading the zipped project file.

## Submission Process:

### 5. Email Submission:

- Send the download link via email to the designated submission address and include any necessary details for running your project, known bugs, and features you did not have time to build (if any). 

## Additional Notes:

- **Testing:** Re-test all API routes before submission.

Ensure to thoroughly verify your project and submission email to facilitate a smooth evaluation.
