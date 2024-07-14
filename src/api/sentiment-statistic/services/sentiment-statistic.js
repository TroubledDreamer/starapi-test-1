'use strict';

/**
 * sentiment-statistic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sentiment-statistic.sentiment-statistic');
