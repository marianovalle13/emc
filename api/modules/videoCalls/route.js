'use strict';

// Define module
module.exports = (module) => {

  /**
   * Get room
   *
   * @param {Object} req - Request
   * @param {Object} res - Response
   * @param {Object} next - Next
   * @return {void}
   */
  module.router.get('/:userId/room', global.helpers.security.auth(['administrator', 'user']), (req, res, next) => {
    const room = {
      data: {
        apiKey: '45828062',
        sessionId: '1_MX40NTgyODA2Mn5-MTYwMDY5MzIzMjY5M35lWkowSVY4aHRndEVCUkVjWDYveXBmR2V-UH4',
        token: 'T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9MTY4MjQ5M2M2NjRjN2M2MjVmNzMzMmFjNTllZjQxZGU1YTVlNjFiNzpzZXNzaW9uX2lkPTFfTVg0ME5UZ3lPREEyTW41LU1UWXdNRFk1TXpJek1qWTVNMzVsV2tvd1NWWTRhSFJuZEVWQ1VrVmpXRFl2ZVhCbVIyVi1VSDQmY3JlYXRlX3RpbWU9MTYwMDY5MzczNCZub25jZT0wLjgzMDI0NDkyMDI4MDI4Mzcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYwMDc4MDEzNA==',
        // publisherOptions: {width: '300px', height: '300px'},
        // subscriberOptions: {width: '500px', height: '500px'}
      }
    };
    res.send(room);
  });

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
  module.router.post('/', global.helpers.security.auth(['administrator']), (req, res, next) => {
    module.lib.opentok.createSession( ( error, session ) => {
      if (error) return next(module.lib.httpError(404, error.message));
      let data = req.body;
      data.sessionId = session.sessionId;
      module.model.create(data)
        .then((data) => {
          res.send({data});
        })
        .catch(next);
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
