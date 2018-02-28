export const renderHtml = (html, initialState) => (
`<!DOCTYPE html>
<html>
  <head>
    <title>Redux Server</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <script type="text/javascript">
			window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
		</script>
    <script type="text/javascript" src="/static/client/client.js"></script>
    <link rel="stylesheet" href="/static/client/styles.css"></script>
  </head>
  <body>
    <div id="app">${html}</div>
  </body>
</html>`
);
