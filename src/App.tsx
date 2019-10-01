import {Route} from "react-router";
import {DataPage} from "./modules/DataPage/dataPage";
import React from "react";

import "./assets/clearfix.scss";
import {NavLink} from "react-router-dom";

export const Routes = (): JSX.Element => (
  <>
    <ul className={"container"}>
      <li>
        <NavLink to={"/"}>{"Тестовое задание"}</NavLink>
      </li>
    </ul>
    <br />
    <Route exact={true} path="/" component={DataPage} />
  </>
);
