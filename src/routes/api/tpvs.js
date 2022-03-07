"use strict";

module.exports.register = async server => {
   server.route( {
       method: "GET",
       path: "/api/tpvs",
       config: {
       cors: {
           origin: ['*'], // an array of origins or 'ignore'
       },
       handler: async request => {
               try {
                   // get the sql client registered as a plugin
                   const db = request.server.plugins.sql.client;

                   // TODO: Get the current authenticate user's ID
                //    const transportadorId = request.params.id;

                   // execute the query
                   const res = await db.tpvs.getTpvs();

                   // return the recordset object
                   return res.recordset;
               } catch ( err ) {
                   console.log( err );
               }
           }
       }
   } );
};