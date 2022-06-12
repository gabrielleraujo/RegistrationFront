const colorFireBrick = "#B22222";
const colorDarkGreen = "#006100";

function setStyleError(result)
{
    result.style = `color: ${colorFireBrick}`;
}

function setStyleSuccess(result)
{
    result.style = `color: ${colorDarkGreen}`;
}

function addStyleRequired(item)
{
    let content = item.parentNode.querySelector('label');
    content.insertAdjacentHTML('afterend',"<small required>*</small>");
    item.parentNode.querySelector("[required]").setAttribute("class", "required");
}

export {setStyleError, setStyleSuccess, addStyleRequired}