const glob = require('glob');
const path = require('path');
const { apiResolver } = require('next/dist/server/api-utils/node/api-resolver');

const rootPath = path.resolve('.');
const nextPagesDirectory = path.join(rootPath, 'src', 'pages');

const handlers = glob.sync(`${nextPagesDirectory}/api/**/*.ts`).map((handler) => 
  path.relative(nextPagesDirectory, handler).replace(/\.ts$/, '')
);


const mapping = {};
handlers.forEach((handler) => 
  mapping[`/${handler.replaceAll('\\', '/')}`] = require(path.join(nextPagesDirectory, handler))
);

const requestHandler = (
  request,
  response,
) => {
  return apiResolver(
    Object.assign(request, { connection: { remoteAddress: 'localhost' } }),
    response,
    {},
    mapping[request.url],
    undefined,
    true,
  );
};

module.exports = requestHandler;
