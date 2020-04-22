import React from "react";
import "../styles.css";
import { Card } from "react-bootstrap";

const blogs = [
  {
    title: "My First Blog Post",
    date: "03/25/2020",
    summary:
      "Summary : Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "My Second Blog Post",
    date: "03/25/2020",
    summary:
      "Summary : Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "My Third Blog Post",
    date: "03/25/2020",
    summary:
      "Summary : Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

function Home() {
  return (
    <div className="main">
      {blogs.map((item) => {
        return (
          <Card className="blog-card">
            <Card.Body>
              <Card.Link className="blog-card-title" href="/summary">
               <h1>{item.title}</h1>
              </Card.Link>
              <Card.Subtitle className="mb-2 text-muted blog-card-subtitle">
                {item.date}
              </Card.Subtitle>
              <Card.Text className="blog-card-text">{item.summary}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Home;
