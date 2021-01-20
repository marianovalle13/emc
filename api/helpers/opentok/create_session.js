'use strict';

// Define module
module.exports = (helper) => {

  /**
   * Create opentok session
   *
   * @param {Object} model - Model
   * @return {Promise}
   */
  return (params, model) => {
    return new Promise( (resolve, reject) => {
      try {

        helper.lib.opentok.createSession( ( error, session ) => {
          if (error) return next(helper.lib.generalError(404, error.message));
          params.sessionId = session.sessionId;
          global.modules.videoCalls.model.create(params)
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              reject(helper.lib.dbError(404, error.message || 'Ocurrio un error inesperado'));
            });
        });

      } catch(error) {
        console.error('Helper "opentok.createSession" response error');
        console.error(error);
        reject(error);
      }
    });
  };
};
