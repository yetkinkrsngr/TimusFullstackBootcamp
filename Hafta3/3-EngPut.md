# Put

> A "PUT" operation is an HTTP request type used in the HTTP (Hypertext Transfer Protocol). This request type is used to update a specified resource (e.g., a web page or a database entry). A "PUT" request works with data sent to a specific URL, and this data is used to update the target resource.

1. Updating: A "PUT" request is used to update an existing resource. For example, it can be used to update the content of a web page or modify a database entry.

2. Idempotent: A "PUT" request is an idempotent operation, meaning that the same result is obtained when the same data is sent repeatedly. The update operation can be repeated, and the result remains the same.

3. Data Transmission: A "PUT" request carries data in the body of the request. This is useful for updating large amounts of data or complex information.

4. Resource Specification: A "PUT" request allows the complete replacement of the resource specified in the URL. In other words, the resource at this URL is expected to be replaced with the sent data.

```javascript
const express = require("express");
const app = express();

app.use(express.json()); // JSON data handling middleware

// "PUT" request to update a product
app.put("/products/:id", (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
  // Update the product using the productId
  res.send(`Product ${productId} updated.`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
```

In this example, a "PUT" request to the "/products/:id" route is used to update a specific product. The product specified in the URL is updated, and the update result is sent as a response.
