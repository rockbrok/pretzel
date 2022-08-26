module.exports = {
    routes: [
      {
        method: 'GET',
        path: 'southamerica/:slug',
        handler: 'southamerica.findOne',
        config: {
          auth: false,
        }
      }
    ]
  }