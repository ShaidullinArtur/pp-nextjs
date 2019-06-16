const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('locations/show', '/locations/:id', 'locations/show')
routes.add('markets/show', '/markets/:id', 'markets/show')
routes.add('markets/locations/show', '/markets/:market_id/locations/:location_id', 'markets/locations/show')
