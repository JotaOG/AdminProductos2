import React from "react";
import { Link } from "@reach/router";
import { Container, Row, Col } from "react-bootstrap";

export const ProductList = (props) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <h2>Product List</h2>
          {props.products.map((product, idx) => {
            return (
              <p key={idx}>
                <Link to={"/product/" + product._id}>{product.title}</Link>
              </p>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
