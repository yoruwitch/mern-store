# Tech Store

This is a fictional tech store project built using the MERN stack (MongoDB, Express, React, Node.js). Currently, the backend is under development, focusing on creating routes for product management.

## Routes

- `GET /api/products` - Retrieve all products
- `POST /api/products` - Create a new product
- `DELETE /api/products/:id` - Delete a product by ID
- `PUT /api/products/:id` - Update a product by ID

## TODO

- Implement the frontend using React

## Folder Structure

```
/backend
   /models
      productModel.js
   /routes
      productRoutes.js
   /controllers
      productController.js
   /config
      db.js
   server.js
```

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/tech-store.git
    cd tech-store
    ```

2. Navigate to the backend directory:
    ```sh
    cd backend
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Create a `.env` file in the backend directory and add your MongoDB URI:
    ```
    MONGO_URI=your_mongodb_uri
    ```

5. Start the server:
    ```sh
    npm start
    ```

## Swagger Documentation

Swagger is used to document the API. To access the Swagger UI, start the server and navigate to `http://localhost:5000/api-docs`.

## Contributing

Pull requests and suggestions are more than welcome! As a beginner in backend development and not much higher in frontend, any help is appreciated.
