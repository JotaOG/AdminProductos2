import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";

export const ProductDetail = (props) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + props.id).then((res) =>
      setProduct({
        ...res.data,
      })
    );
  }, [props.id]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <h2>Product Detail</h2>
          <p>Title: {product.title}</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <Link to='/'>Back</Link>
        </Col>
      </Row>
    </Container>
  );
};
