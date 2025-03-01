# FourCast Backend

FourCast is an Amazon-like service designed to distribute 3D-printed items and files. This repository contains the backend code for the platform, built with **Node.js**, **Express.js**, and **PostgreSQL**, using **Sequelize** as the ORM.

---

## Features

- **User Authentication**: Register, login, and manage user accounts.
- **Product Management**: Add, update, and browse 3D-printed items and files.
- **Order Management**: Place orders, track order status, and manage payments.
- **File Storage**: Upload and download 3D files (STL, OBJ, etc.) using **Amazon S3** or **Google Cloud Storage**.
- **Search Functionality**: Search for products using **Algolia** or **Elasticsearch**.
- **Payment Integration**: Process payments using **Stripe** or **PayPal**.

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **File Storage**: Amazon S3 or Google Cloud Storage

---

## Getting Started

### Prerequisites

- **Node.js**: Install from [nodejs.org](https://nodejs.org/).
- **PostgreSQL**: Install from [postgresql.org](https://www.postgresql.org/).
- **AWS S3** or **Google Cloud Storage**: Set up an account for file storage.

---

### Installation

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

## Set Up the Database:

**Create a new PostgreSQL database:
- **createdb yourdbname

**Run migrations:
- **npx sequelize-cli db:migrate

## Start the Server
** run node server.js
