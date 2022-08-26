module.exports = {
    routes: [
      {
        method: 'GET',
        path: 'africa/:slug',
        handler: 'africa.findOne',
        config: {
          auth: false,
        }
      }
    ]
  }