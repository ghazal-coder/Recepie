import React from "react";
import { Route, Routes } from "react-router";
import { routes } from "./Routes.constant";

function Approutes() {
    return (
        <Routes>
            {routes.map((item, index) => (
                <Route key={index} path={item.path} element={item.element} />
            ))}
        </Routes>
    );
}

export default Approutes;
