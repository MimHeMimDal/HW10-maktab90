"use strict";

import "./src/styles/index.css";
import header from "./src/layout/Header/Header-top";
import navbar from "./src/components/Navbar";
import navbarTop from "./src/layout/Nav-top";
import main from "./src/layout/Main";
import navbarBot from "./src/layout/Navbar-bot";
import headerDesktop from "./src/layout/Header-desktop";
import aside from "./src/layout/Aside";

const body = document.body;

body.append(headerDesktop(),header(), main(), navbarBot(), aside());
