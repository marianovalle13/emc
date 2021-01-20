'use strict';
const axios = require('axios');
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
  module.router.get('/', (req, res, next) => {
    global.helpers.database.find(req, res, module.model)
      .then(result => res.send(result))
      .catch(next);
  });

  /**
 * Find
 *
 * @param {Object} req - Request
 * @param {Object} res - Response
 * @param {Object} next - Next
 * @return {void}
 */
  module.router.get('/external', global.helpers.security.auth(['administrator']), async (req, res, next) => {
    const DISEASES_API_URI = 'https://raw.githubusercontent.com/patriciomacadden/icd.json/master/es.json';
    let diseases = []
    // Get diseases from json uri
    await axios.get(DISEASES_API_URI)
      .then(result => {
        for (let chapter of result.data.chapters) {
          for (let block of chapter.blocks) {
            for (let dis of block.diseases) {
              // Create and push objects
              for (let d of dis.diseases) {
                const disease = {
                  name: d.name,
                  code: d.code
                }
                diseases.push(disease)
              }
            }
          }
        }
      })
      .catch(next)

    // Insert documents
    module.model.insertMany(diseases)
      .then(result => res.send({ 'data': result }))
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
  module.router.get('/:id', (req, res, next) => {
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
  module.router.post('/', global.helpers.security.auth(['administrator']), (req, res, next) => {
    global.helpers.database.create(req, res, module.model)
      .then(result => {
        res.send(result);
      })
      .catch(next);
  });

  /**
   * Update
   *
   * @param {Object} req - Request
   * @param {Object} res - Response
   * @param {Object} next - Next
   * @return {void}
   */
  module.router.put('/:id', global.helpers.security.auth(['administrator']), (req, res, next) => {
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
