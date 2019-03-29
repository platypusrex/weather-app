import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import { ScrollToTop } from './shared/components/ScrollToTop';
import { Home } from './routes/Home/Home';
import { Forecast } from './routes/Forecast/Forecast';
import { route } from "./shared/constants/routes";

export const App = () => {
  return (
    <Layout>
      <Layout.Content>
        <ScrollToTop>
          <Switch>
            <Route exact={true} path={route.home} component={Home}/>
            <Route path={route.forecast} component={Forecast}/>
          </Switch>
        </ScrollToTop>
      </Layout.Content>
    </Layout>
  );
};