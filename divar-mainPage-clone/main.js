"use strict";

import "./src/styles/index.css";
import header from "./src/layout/Header/Header-top";
import navbar from "./src/components/Navbar";
import navbarTop from "./src/layout/Header/Nav-top";
import main from "./src/layout/Main";

const body = document.body;

body.append(header(), main());
