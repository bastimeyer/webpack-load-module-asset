module.exports = function() {
  const done = this.async();
  new Promise( ( resolve, reject ) => {
    this.loadModule( "./asset.svg", ( err, source, sourceMap, module ) => {
      if ( err ) {
        reject( err );
      } else {
        resolve();
      }
    });
  })
    .then(
      () => done( null, "" ),
      err => done( err )
    );
};
