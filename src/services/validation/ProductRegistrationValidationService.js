import {isNullOrEmptyValidate, isInvalidValidate, clearValidations, isSuccess} from "./UtilValidationService.js"

function isValid(fields) { 
    validateName(fields.name);
    validatePrice(fields.price);
    validateDescription(fields.description);
    validateCategory(fields.category);
    validateColor(fields.color);
    validateSize(fields.size);
    return isSuccess;
}

function validateName(input) {
    isInvalidValidate(input.value.length < 2, input, "Name needs at least 2 characters.");
    isNullOrEmptyValidate(input);
}

function validatePrice(input) {
    isInvalidValidate(input.value < 10.0, input, "Price must be at least R$10.0,00.");
    isNullOrEmptyValidate(input);
}

function validateDescription(input) {
    isInvalidValidate(input.value.length < 12, input, "Description needs at least 12 characters.");
    isNullOrEmptyValidate(input);
}

function validateCategory(input) {isNullOrEmptyValidate(input); }
function validateColor(input) {isNullOrEmptyValidate(input); }
function validateSize(input) {isNullOrEmptyValidate(input); }

export { isValid, clearValidations }
