const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const {error, value} = Joi.validate(req.body, schema)

        if (error) {
            console.log(error)
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({ error:'you must provide a valid email address'})
                    break
                case 'password':
                    res.status(400).send({
                        error:`the password provided failed to match the following rules:
                        <br>
                        1.it must contain ONLY the following charecters: lower case ,upper case
                        <br>
                        2.it must have at least 8 charecters`
                    })
                    break
                default:
                        res.status(400).send({
                            error:'invalid registration information'
                        })
            }
        } else {
            next()
        }
    }
}
