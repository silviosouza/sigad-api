"use strict";

module.exports.register = async server => {
   server.route( {
       method: "GET",
       path: "/api/tpt/{id}",
       config: {
       cors: {
           origin: ['*'], // an array of origins or 'ignore'
       },
       handler: async request => {
               try {
                   // get the sql client registered as a plugin
                   const db = request.server.plugins.sql.client;

                   // TODO: Get the current authenticate user's ID
                   const chaveId = request.params.id;

                   // execute the query
                   const res = await db.tpt.getTpt( chaveId );

                   // return the recordset object
                   return res.recordset;
               } catch ( err ) {
                   console.log( err );
               }
           }
       }
   } );
};