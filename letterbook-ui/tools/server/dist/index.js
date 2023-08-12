"use strict";

var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
const publicPath = _path.default.resolve(_path.default.join(__dirname, '../../../../public'));
console.log({
  publicPath
});
app.use(_express.default.json());
app.use(_express.default.static(__dirname));
app.use(_express.default.static(publicPath));
const portNumber = parseInt(process.env.PORT || '9999');
app.get(/index/, async (req, res) => {
  const manifestPath = _path.default.resolve(publicPath, 'packs', 'manifest.json');
  const manifest = JSON.parse(_fs.default.readFileSync(manifestPath, 'utf8'));
  console.log(`Reading manifest at <${manifestPath}>`);
  let template = _fs.default.readFileSync(_path.default.resolve(_path.default.join(__dirname, 'templates', 'home.html')), 'utf8');
  template = template.replace('{common.css}', manifest['common.css'].src).replace('{mastodon-light.css}', manifest['mastodon-light.css'].src).replace('{common.js}', manifest['common.js'].src).replace('{locale/en-json.js}', manifest['locale/en-json.js'].src).replace('{features/compose.js}', manifest['features/compose.js'].src).replace('{features/home_timeline.js}', manifest['features/home_timeline.js'].src).replace('{features/notifications.js}', manifest['features/notifications.js'].src).replace('{application.js}', manifest['application.js'].src);

  // https://docs.railway.app/databases/mongodb
  res.send(template);
});
app.listen(portNumber, '0.0.0.0' /* (1) */, () => {
  console.log(`Server started on port <${portNumber}>\n`);
  console.log(`-> http://localhost:${portNumber}\n`);
  console.log(`---------------------------------------------------------- [OK] \n`);
});