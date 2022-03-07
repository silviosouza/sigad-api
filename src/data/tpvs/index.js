"use strict";

const utils = require( "../utils" );

const register = async ( { sql, getConnection } ) => {
   // read in all the .sql files for this folder
   const sqlQueries = await utils.loadSqlQueries( 'tpvs' );

   const getTpvs = async chaveId => {
       // get a connection to SQL Server
       const cnx = await getConnection();

       // create a new request
       const request = await cnx.request();

       // configure sql query parameters
    //    request.input( "chaveId", sql.VarChar( 50 ), chaveId );

       // return the executed query
       return request.query( sqlQueries.getTpvs );
   };

   return {
    getTpvs
   };
};

module.exports = { 
    register 
};