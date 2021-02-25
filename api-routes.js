let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Working',
        message: 'Welcome!',
    });
});

var contactController = require('./contactController');

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;