import { ValidationErrors } from "../utilities/error.generate.js";
import { errorResponse } from "../helpers/helpers.js";

/**
 * Handle form validation error middleware
 *
 * @param validate
 * @returns {(function(*, *, *): (*))|*}
 */
const handleValidation = validate => {
    return (req, res, next) => {
        const result = validate(req.body);
        console.log('Handle validation: ', result);
        if ( result.error == null) {
            return next();
        }

        let message = result.error.details.map(elem => elem.message);
        const messages = []
        message.forEach(msg => {
            messages.push(msg.replace(/["]+/g, '')) // trim quote marks
        })

        const error = new ValidationErrors(messages);
        return errorResponse(res, error)
        // Validate error sample
        /**
         [Error [ValidationError]: "email" must be a valid email] {
             _original: { email: 'test1@.com', name: '123456' },
             details: [
                 {
                     message: '"email" must be a valid email',
                     path: [Array],
                     type: 'string.email',
                     context: [Object]
                 }
             ]
         }
         */
    }
}

export default handleValidation;