/**
 * service controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::service.service');

// path: ./src/api/restaurant/controllers/restaurant.js

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::service.service", ({ strapi }) => ({
  // Method 3: Replacing a core action
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db.query("api::service.service").findOne({
      where: { slug: id },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
      // populate:{[fieldname]:true
