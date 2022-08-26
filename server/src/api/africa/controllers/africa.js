'use strict';

/**
 *  africa controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::africa.africa', ({strapi}) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
      const entity = await strapi.db.query('api::africa.africa').findOne({
        where: { slug }
      })
  
      const sanitizedEntity = await this.sanitizeOutput(entity);
  
      return this.transformResponse(sanitizedEntity);
    }
  }));
