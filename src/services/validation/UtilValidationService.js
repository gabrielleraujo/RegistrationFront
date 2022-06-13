import {setStyleError} from "../style/UtilStyleService.js"

let isSuccess = true;

function addErrorMessage(result, message)
{
    isSuccess = false;
    result.textContent = `\n ${message}`;
}

function clearValidations(form)
{
    let nodeList = form.querySelectorAll('[validation]');

    for (let i = 0; i < nodeList.length; i++) 
    {
        nodeList[i].textContent = "";
    }
}

function isInvalidValidate(predicate, node, errorMessage = "is invalid, please retry :(")
{
    let result = node.parentNode.querySelector('[validation]');
    if(predicate)
    {
        addErrorMessage(result, `${errorMessage}`);
        setStyleError(result);
    }
}

function isNullOrEmptyValidate(node)
{
    let result = node.parentNode.querySelector('[validation]');
    let name = node.value;

    if (name === "" || name == undefined)
    {
        addErrorMessage(result, `${name} cannot be empty.`);
        setStyleError(result);
    }
}

export { isInvalidValidate, isNullOrEmptyValidate, clearValidations, isSuccess }
