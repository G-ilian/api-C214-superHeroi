const validate=require('validate.js');
const Constants=require('./Constants');
const Constraints=require('./heroes_validation')

const Validation={
    create(data){
        const validation = validate.validate(data, Constraints.create);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = await validation;
            return response;
        }
        return validation;
    }
};

exports.module=Validation;