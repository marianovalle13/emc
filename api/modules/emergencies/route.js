'use strict';

// Define module
module.exports = (module) => {

  /**
   * Find
   *
   * @param {Object} req - Request
   * @param {Object} res - Response
   * @param {Object} next - Next
   * @return {void}
   */
  module.router.get('/', global.helpers.security.auth(['administrator', 'user']), (req, res, next) => {
    global.helpers.database.find(req, res, module.model)
      .then(result => res.send(result))
      .catch(next);
  });

  /**
 * Find and get avg score
 *
 * @param {Object} req - Request
 * @param {Object} res - Response
 * @param {Object} next - Next
 * @return {void}
 */
  module.router.get('/score', global.helpers.security.auth(['administrator', 'user']), (req, res, next) => {
    // Create modules or global functions as helpers to reuse in

    /**
     * getAvg:
     * Average with one decimal, returns 0 if NaN or similar
     * @param {Number} arr - Array to be iterated
     */
    const getAvg = arr => (Math.round((arr.reduce((a, b) => a + b, 0) / arr.length) * 10) / 10) || 0

    // Filter only finished emergencies
    module.model.find({ status: 1 })
      .then(async result => {
        let emergenciesKeys = {}
        for (let e of result) {
          if (!emergenciesKeys[e]) {
            // Create key/value pairs
            emergenciesKeys[e] = {}
            emergenciesKeys[e].emergency = e
            // Get reviews given an emergency
            let reviews = await global.modules.reviews.model.find({
              emergency: e._id
            });
            // Avg of each professional califications
            let medicScores = getAvg(reviews.map(medic => medic['medicCalification']))
            let nurseScores = getAvg(reviews.map(nurse => nurse['nurseCalification']))
            let driverScores = getAvg(reviews.map(driver => driver['driverCalification']))
            let umacScores = getAvg(reviews.map(umac => umac['umacCalification']))
            // Avg total scores and add key
            let serviceScore = getAvg([medicScores, nurseScores, driverScores, umacScores])
            emergenciesKeys[e].serviceCalification = serviceScore
          }
        }
        // Create key/value pairs and send as data
        let emergencies = []
        for (let k in emergenciesKeys) {
          emergencies.push(emergenciesKeys[k])
        }
        res.send({ 'data': emergencies })
      })
      .catch(next);
  });

  /**
   * FindById
   *
   * @param {Object} req - Request
   * @param {Object} res - Response
   * @param {Object} next - Next
   * @return {void}
   */
  module.router.get('/:id', global.helpers.security.auth(['administrator', 'user']), (req, res, next) => {
    global.helpers.database.findById(req, res, module.model)
      .then(result => res.send(result))
      .catch(next);
  });

  /**
   * Create
   *
   * @param {Object} req - Request
   * @param {Object} res - Response
   * @param {Object} next - Next
   * @return {void}
   */
  module.router.post('/', global.helpers.security.auth(['administrator', 'user']), (req, res, next) => {

    module.model.create(req.body)
      .then((data) => {
        let params = {
          referenceId: data.id,
          referenceType: 'emergency'
        };
        global.helpers.opentok.createSession(params, module.model)
          .then(result => {
            res.send({data:result});
          })
          .catch(next);
      })
      .catch((error) => {
        reject(helper.lib.httpError(404, error.message || 'Ocurrio un error inesperado'));
      });

  });

  /**
   * Update
   *
   * @param {Object} req - Request
   * @param {Object} res - Response
   * @param {Object} next - Next
   * @return {void}
   */
  module.router.put('/:id', global.helpers.security.auth(['administrator', 'user']), (req, res, next) => {
    global.helpers.database.update(req, res, module.model)
      .then(result => res.send(result))
      .catch(next);
  });

  /**
   * Delete
   *
   * @param {Object} req - Request
   * @param {Object} res - Response
   * @param {Object} next - Next
   * @return {void}
   */
  module.router.delete('/:id', global.helpers.security.auth(['administrator']), (req, res, next) => {
    global.helpers.database.delete(req, res, module.model)
      .then(result => res.send(result))
      .catch(next);
  });
};
