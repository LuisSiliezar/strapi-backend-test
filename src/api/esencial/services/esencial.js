'use strict';

/**
 * esencial service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::esencial.esencial');
