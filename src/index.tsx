import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Header from "./components/pageBlocks/Header";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import Procedure from "./components/pageBlocks/Procedure";
import Reviews from "./components/pageBlocks/Reviews";
import { Container } from "./components/Container";

import map from "./assets/maps.png";
import cardLibrary from "./assets/card-library.png";
import Grid from "./components/Grid";
import Card, { CardContent, CardHeader } from "./components/Card";
import DownloadButtons from "./components/DownloadButtons";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.73/dist/"
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Procedure />
    <Container>
      <Grid>
        <Card>
          <CardHeader>Now with Maps!</CardHeader>
          <CardContent>
            Maps allow you to arrange all whiteboards and create a memory palace
            that you’ll never forget. Finding information has become easier than
            ever.
          </CardContent>
        </Card>
        <img src={map} alt="" />
      </Grid>
    </Container>
    <Container>
      <Grid>
        <img src={cardLibrary} alt="" />
        <Card>
          <CardHeader>Card Library</CardHeader>
          <CardContent>
            All of your cards live in the Card Library. You can filter them by
            either tags or whiteboards, or do a full-text search. All your notes
            - in one place.
          </CardContent>
        </Card>
      </Grid>
    </Container>
    <Reviews />
    <Container>
      <h1>Note-taking has never been this great.</h1>

      <DownloadButtons center></DownloadButtons>
    </Container>
  </React.StrictMode>
);
