import {setStyleError, setStyleSuccess} from "../styleService/StyleService.js"

function addMessage(result, message)
{
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
        addMessage(result, `${errorMessage}`);
        setStyleError(result);
    }
    else 
    {
        addMessage(result, `${node.value} is valid :)`);
        setStyleSuccess(result);
    }
}

function isNullOrEmptyValidate(node)
{
    debugger;
    let result = node.parentNode.querySelector('[validation]');
    let name = node.value;

    if (name === "" || name == undefined)
    {
        addMessage(result, `${name} cannot be empty.`);
        setStyleError(result);
    }
}

export { isInvalidValidate, isNullOrEmptyValidate, clearValidations }
