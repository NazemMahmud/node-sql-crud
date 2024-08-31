import Joi from 'joi';

// minDomainSegments: like test@gmail.com, here domain segments 2
const userSchema = Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).min(6).max(255).required(),
    phone: Joi.string().min(10)
});

const userValidate = data => {
    const result = userSchema.validate(data, { abortEarly: false }); // abortEarly: false to return all error message
    console.log('Result: ', result);
    // todo: trim data and remove unwanted data from value. And, only take data that is in the schema, not anything else
    // result.value = data;
    return result;
}

export { userValidate }