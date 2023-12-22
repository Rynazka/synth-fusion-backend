module.exports = {
    errorHandler(err, req, res, next) {
        // console.error(err)
        // console.error(err.errors[0])
        // console.error(err.detail)
        // console.error(err.stack)
        // console.log(err.name)

        let statusCode = 500
        let errorMessageCustom = err.message || err?.errors[0]?.message

        if (err.status) {
            statusCode = err.status
        }

        res.status(statusCode)

        return res.status(statusCode).json({
            status: statusCode,
            statusCode: statusCode,
            statusText: `${errorMessageCustom} | ${err.name}`,
            message: err.message || 'Internal Server Error',
            // statusCode: statusCode,
            // statusText: statusText || 'Something went wrong. Please try again later',
            // message: err.message || 'Internal Server Error',
            // fetchDate: moment().format('YYYY-MM-DD HH:mm:ss'),
        })
    }
}