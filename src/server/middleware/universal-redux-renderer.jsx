import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';

import { createReduxStore } from '../../common/redux';

export const universalReduxRenderer = (Component, renderHtml, reduxConfig) => (req, res) => {

  let context = {};

  const store = createReduxStore(reduxConfig);

  const Router = (props) => (
    <StaticRouter	location={req.url} context={context} >
      {props.children}
    </StaticRouter>
  );

  const html = renderToString(
     <Provider store={store}>
      <Router>
			  <Component />
      </Router>
    </Provider>
  );

  if (context.url) {
    res.redirect(302, context.url);
  } else {
    res.set('Content-Type', 'text/html');
    res.send(renderHtml(html, store.getState()));
  }

};
