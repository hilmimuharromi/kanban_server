module.exports = function (err, req, res, next) {
    console.log(err);

    if (err.name == 'SequelizeDatabaseError') {
        res.status(500).json('Internal Error')
    } else if (err.name == 'SequelizeUniqueConstraintError') {
        res.status(401).json(err.errors)
    } else if (err.name == 'SequelizeValidationError') {
        res.status(400).json(err.errors)
    } else {
        res.status(err.status).json(err.msg)
    }
}