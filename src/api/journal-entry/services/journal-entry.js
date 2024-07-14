'use strict';

/**
 * journal-entry service
 */

var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are stupid.');


const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::journal-entry.journal-entry', ({ strapi }) => ({


    async find(...args) {
        // Call the super method to get the default implementation's results and pagination
        const { results, pagination } = await super.find(...args);
    
        // Modify the results
        results.forEach((result) => {
          result.title = "Dddd";
        });
    
        // Return the modified results and pagination
        return { results, pagination };
      }
    
    }));