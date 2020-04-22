import React from "react";
import "../styles.css";
import { Card } from "react-bootstrap";

function SummaryDetail() {
  return (
    <div>
      <Card className="blog-card">
        <Card.Body>
          <Card.Header className="blog-card-title" href="/summary">
            Summary : Lorem Ipsum is simply dummy text of the printing and
            typesetting industry
          </Card.Header>
          <Card.Subtitle className="mb-2 text-muted blog-card-subtitle">
            03/25/2020
          </Card.Subtitle>
          <Card.Text className="blog-card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SummaryDetail;
