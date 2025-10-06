"use client";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function SearchForm() {
  return (
    <Form className="mt-4">
      <InputGroup>
        <Form.Control
          className="rounded-end me-1"
          placeholder="Get a five-day forecast in your favorite cities"
        />
        <Button
          className="rounded-start"
          as="input"
          type="Submit"
          value="Submit"
          variant="secondary"
        ></Button>
      </InputGroup>
    </Form>
  );
}

// "use client";
// import { useState } from "react";
// import { Form, Button, InputGroup } from "react-bootstrap";

// export default function SearchForm({ onSearch }) {
//   const [city, setCity] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!city.trim()) {
//       setError("Enter a city name.")
//       return;
//     }

//     setLoading(true);
//     try {
//       await onSearch(city);
//       setCity("");
//     } catch (err) {
//       setError(error.message || "Search failed.")
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <Form onSubmit={handleSubmit}>
//       <InputGroup className="mb-2">
//       <Form.Control
//       type="text"
//       placeholder="Enter a city"
//       value={city}
//       onChange={(e) => setCity(e.target.value)}
//       />
//       <Button variant="primary" type="submit" disabled={loading}>
//         {loading ? "Searching..." : "Search"}
//       </Button>
//       <Form.Control.Feedback type="invalid">
//       {error}
//       </Form.Control.Feedback>
//       </InputGroup>
//     </Form>
//   );
// }
