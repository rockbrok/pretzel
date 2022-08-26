'use strict';

/**
 *  southamerica controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::southamerica.southamerica', ({strapi}) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
      const entity = await strapi.db.query('api::southamerica.southamerica').findOne({
        where: { slug }
      })
  
      const sanitizedEntity = await this.sanitizeOutput(entity);
  
      return this.transformResponse(sanitizedEntity);
    }
  }));
  