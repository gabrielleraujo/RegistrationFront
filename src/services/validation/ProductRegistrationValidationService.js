import {isNullOrEmptyValidate, isInvalidValidate, clearValidations, isSuccess} from "./UtilValidationService.js"

function validate(form) {
    clearValidations(form);
    
    validateName(form.querySelector('[in-name]'));
    validatePrice(form.querySelector('[in-price]'));
    validateDescription(form.querySelector('[in-description]'));
    validateCategory(form.querySelector('[in-category]'));
    validateColor(form.querySelector('[in-color]'));
    validateSize(form.querySelector('[in-size]'));

    return isSuccess;
}

function validateName(input)
{
    isInvalidValidate(input.value.length < 2, input, "Name needs at least 2 characters.");
    isNullOrEmptyValidate(input);
}

function validatePrice(input)
{
    isInvalidValidate(input.value < 10.0, input, "Price must be at least R$10.0,00");
    isNullOrEmptyValidate(input);
}

function validateDescription(input)
{
    isInvalidValidate(input.value.length < 12, input, "Description needs at least 12 characters.");
    isNullOrEmptyValidate(input);
}

function validateCategory(input)
{
    isNullOrEmptyValidate(input);
}

function validateColor(input)
{
    isNullOrEmptyValidate(input);
}

function validateSize(input)
{
    isNullOrEmptyValidate(input);
}

export default validate
