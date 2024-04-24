import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Header></Header>
        <div className="container py-4">
            <div className="row">
                <Main></Main>
                <Aside></Aside>
            </div>
        </div>
        
        <div className="bg-info">
            <Footer></Footer>
        </div>
        <p><i data-feather="instagram"></i> <a class="link-opacity-100" href="https://help.instagram.com/581066165581870">Instagram</a></p>
    </StrictMode>
);