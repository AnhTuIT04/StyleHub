# StyleHub eCommerce Shop

StyleHub is a modern eCommerce platform built with Next.js, Tailwind CSS, and MongoDB.

## Project Structure

### Key Directories

- **app/**: Contains the Next.js app directory with pages, layouts, and components.
- **components/**: Reusable UI components.
- **prisma/**: Database schema and Prisma configuration.
- **server/**: Backend logic and API routes.
- **utils/**: Utility functions and helpers.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (Atlas or local instance)

---

### Cloning the Repository

```bash
git clone https://github.com/AnhTuIT04/StyleHub.git
cd StyleHub
```

---

### Setting Up Environment Variables

#### Frontend (`.env` in the root directory)

1. Create a `.env` file in the root directory.
2. Add the following variables:

```env
DATABASE_URL=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=your_nextauth_url
```

Replace `your_mongodb_connection_string`, `your_nextauth_secret`, and `your_nextauth_url` with your actual values.

#### Backend (`.env` in the `server/` directory)

1. Navigate to the `server/` directory.
2. Create a `.env` file and add the following variable:

```env
DATABASE_URL=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

---

### Installing Dependencies

#### Frontend

Run the following command in the root directory:

```bash
npm install
```

#### Backend

Navigate to the `server/` directory and run:

```bash
cd server
npm install
```

---

### Running the Development Server

#### Frontend

Start the frontend development server with:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

#### Backend

Start the backend server with:

```bash
cd server
node app.js
```

---

### Building for Production

#### Frontend

To build the frontend for production:

```bash
npm run build
```

Then, start the production server:

```bash
npm start
```

#### Backend

Ensure the backend server is running by navigating to the `server/` directory and running:

```bash
node app.js
```
The server will be available at [http://localhost:3001](http://localhost:3001).

---
### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
