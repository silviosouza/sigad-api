"use strict";

const utils = require( "../utils" );

const register = async ( { sql, getConnection } ) => {
   // read in all the .sql files for this folder
   const sqlQueries = await utils.loadSqlQueries( 'transportador' );

   const getTransportador = async transportadorId => {
       // get a connection to SQL Server
       const cnx = await getConnection();

       // create a new request
       const request = await cnx.request();

       // configure sql query parameters
       request.input( "transportadorId", sql.VarChar( 50 ), transportadorId );

       // return the executed query
       return request.query( sqlQueries.getTransportador );
   };

   return {
    getTransportador
   };
};

module.exports = { 
    register 
};