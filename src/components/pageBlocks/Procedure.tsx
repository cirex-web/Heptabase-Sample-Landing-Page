import React from "react";
import Card, { CardContent, CardHeader } from "../Card";
import { Container } from "../Container";
import arrow from "../../assets/arrow.png";
const Procedure = () => {
  return (
    <Container>
      <h1>See how it works</h1>
      <div className="card-container">
        <Card>
          <CardHeader>1 | Capture</CardHeader>
          <CardContent>
            All great ideas need a place to live. With <strong>Timeline</strong>
            , you can quickly capture your ideas into cards. You can then easily
            tag them for later retrieval
          </CardContent>
        </Card>
        <img src={arrow} alt="" />
        <Card>
          <CardHeader>2 | Organize</CardHeader>
          <CardContent>
            Make sense of your cards with <strong>Whiteboards</strong>, which
            allow you to arrange your cards on an infinite canvas. Here, you can
            visualize the information by moving cards around and creating
            relationships between them!
          </CardContent>
        </Card>
        <img src={arrow} alt="" />

        <Card>
          <CardHeader>3 | Create</CardHeader>
          <CardContent>
            With your ideas and cards organized, you can select and open your
            cards into <strong>Tabs</strong> from anywhere in the app. The
            multi-pane feature helps you cross-reference ideas while combining
            them into a stunning piece of work.
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};
export default Procedure;
