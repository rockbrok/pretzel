module.exports = {
    routes: [
      {
        method: 'GET',
        path: 'asia/:slug',
        handler: 'asia.findOne',
        config: {
          auth: false,
        }
      }
    ]
  }