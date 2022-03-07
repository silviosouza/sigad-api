"use strict";

const romaneios = require( "./romaneios" );
const transportador = require( "./transportador" );
const transportadores = require( "./transportadores" );
const tpt = require( "./tpt" );
const tpts = require( "./tpts" );
const tpvs = require( "./tpvs" );
const docemissores = require( "./docemissores" );
const ufs = require( "./ufs" );

module.exports.register = async server => {
   await romaneios.register( server );
   await transportador.register( server );
   await transportadores.register( server );
   await tpt.register( server );
   await tpts.register( server );
   await tpvs.register( server );
   await docemissores.register( server );
   await ufs.register( server );
};