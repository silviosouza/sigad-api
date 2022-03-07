"use strict";

const utils = require( "../utils" );

const register = async ( { sql, getConnection } ) => {
   // read in all the .sql files for this folder
   const sqlQueries = await utils.loadSqlQueries( "romaneios" );

   const getRomaneios = async romaneioId => {
       // get a connection to SQL Server
       const cnx = await getConnection();

       // create a new request
       const request = await cnx.request();

       // configure sql query parameters
       request.input( "romaneioId", sql.VarChar( 50 ), romaneioId );

       // return the executed query
       return request.query( sqlQueries.getRomaneios );
   };

   return {
       getRomaneios
   };
};

module.exports = { 
    register 
};