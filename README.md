# fourcast_backend

FourCast is an Amazon-like service designed to distribute 3D-printed items and files. This repository contains the backend code for the platform, built with Node.js, Express.js, and PostgreSQL, using Sequelize as the ORM.

Tech Stack
Backend: Node.js, Express.js

Database: PostgreSQL

ORM: Sequelize

File Storage: Amazon S3 or Google Cloud Storage

Payment Gateway: Stripe or PayPal

Hosting: AWS, Google Cloud, or Vercel/Netlify

Getting Started

Prerequisites
Node.js: Install from nodejs.org.

PostgreSQL: Install from postgresql.org.

AWS S3 or Google Cloud Storage: Set up an account for file storage.

Install dependencies:
npm install

Set Up Environment Variables:
Create a .env file in the root of the backend directory:

DB_NAME=yourdbname
DB_USER=yourusername
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=your_jwt_secret_key
PORT=5000
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_KEY=your_aws_secret_key
AWS_BUCKET_NAME=your_bucket_name

Set Up the Database:

Create a new PostgreSQL database:
createdb yourdbname

Run migrations:
npx sequelize-cli db:migrate

Start the Server:
node server.js
