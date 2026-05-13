import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  section {
    margin: 0;
    padding: 0;
    border-radius: 12px;
    overflow: hidden;
  }
  body {
    margin: 0;
    color:#333;
    background:#eaeaea;
    font-family: Raleway, sans-serif;
  }

  ul {
  list-style: none;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }
  h2 {
    font-size: 2rem;
    line-height: 1.25;
    letter-spacing: -0.015;
    font-family: Raleway, sans-serif;
  }
  h3 {
    font-size: 1.75rem;
    line-height: 1.3;
    letter-spacing: 0.01em;
    font-weight: 400;
  }
  p {
    font-size: 1rem;
    line-height: 1.6;
    letter-spacing: 0.01em;
    font-family: DBMonoLight, monospace;
  }


  a {
    text-decoration:none;
    color:#d5561f;
    margin:.5em 0;
    display:inline-table;
    font-family: DBMonoLight, monospace;
    letter-spacing: -0.02em;
    font-size: 0.85rem;
  }
  a:hover {text-decoration:underline;}





@media (prefers-color-scheme: dark) {
  body {
    color:#eaeaea;
    background:#333;
  }
}
@font-face {
  font-family: Raleway;
  src: url("assets/font/raleway/Raleway-VariableFont_wght.ttf") format("truetype");
  font-weight: 100 900;
  font-style: normal;
}

@font-face {
  font-family: DBMono;
  src: url(assets/font/DM_Mono/DMMono-Regular.ttf) format("truetype");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: DBMonoMedium;
  src: url(assets/font/DM_Mono/DMMono-Medium.ttf) format("truetype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: DBMonoLight;
  src: url(assets/font/DM_Mono/DMMono-Light.ttf) format("truetype");
  font-weight: 300;
  font-style: normal;
}
`;
