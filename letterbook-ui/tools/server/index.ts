import express, { Express } from 'express';
import path from 'path';
import fs from 'fs';
import timelines from './endpoints/timelines';

const app: Express = express();

const publicPath = path.resolve(path.join(__dirname, '../../../../public'));

app.use(express.json());
app.use(express.static(__dirname));
app.use(express.static(publicPath));

timelines(app);

const portNumber = parseInt(process.env.PORT || '9999');

app.get(/home/, async (req, res) => {
  const manifestPath = path.resolve(publicPath, 'packs', 'manifest.json');

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  console.log(`Reading manifest at <${manifestPath}>`);

  let template = fs.readFileSync(
    path.resolve(path.join(__dirname, 'templates', 'home.html')),
    'utf8',
  );

  template = template
    .replace('{common.css}', manifest['common.css'].src)
    .replace('{mastodon-light.css}', manifest['mastodon-light.css'].src)
    .replace('{common.js}', manifest['common.js'].src)
    .replace('{locale/en-json.js}', manifest['locale/en-json.js'].src)
    .replace('{features/compose.js}', manifest['features/compose.js'].src)
    .replace(
      '{features/home_timeline.js}',
      manifest['features/home_timeline.js'].src,
    )
    .replace(
      '{features/notifications.js}',
      manifest['features/notifications.js'].src,
    )
    .replace('{application.js}', manifest['application.js'].src);

  res.send(template);
});

app.listen(portNumber, '0.0.0.0' /* (1) */, () => {
  console.log(`Server started on port <${portNumber}>\n`);
  console.log(`-> http://localhost:${portNumber}\n`);
  console.log(
    `---------------------------------------------------------- [OK] \n`,
  );
});
