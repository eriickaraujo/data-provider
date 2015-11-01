/* global __dirname, process; */
/**
 * Application configuration
 * You may use it to describe every global configuration data
 */
module.exports = {
    root: __dirname,
    cache: '/tmp/riobus/cache',
    historySize: 10,
    logs: {
        runtime: '/tmp/riobus/log/runtime.log',
        server: '/tmp/riobus/log/server.log'
    },
    provider: {
        host: 'dadosabertos.rio.rj.gov.br',
        path: {
            bus: {
                'REGULAR': '/apitransporte/apresentacao/rest/index.cfm/onibus',
                'BRT': '/apitransporte/apresentacao/rest/index.cfm/brt'
            },
            itinerary: '/apiTransporte/Apresentacao/csv/gtfs/onibus/percursos/gtfs_linha$$-shapes.csv'
        },
        updateInterval:	5000,
        log: '/tmp/riobus/log/data-server.log'
    },
    database: {
        dbName: process.env.RIOBUS_DB_NAME  || 'nodejs',
        host: process.env.RIOBUS_DB_HOST    || 'localhost',
        port: process.env.RIOBUS_DB_PORT    || 27017,
        user: process.env.RIOBUS_DB_USER    || '',
        pass: process.env.RIOBUS_DB_PASS    || ''
    }
};