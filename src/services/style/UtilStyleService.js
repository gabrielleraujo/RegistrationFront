function setStyleError(result)
{
    result.setAttribute("class", "error");
}

function addStyleRequired(item)
{
    let content = item.parentNode.querySelector('label');
    content.insertAdjacentHTML('afterend',"<small required>*</small>");
    item.parentNode.querySelector("[required]").setAttribute("class", "required");
}

export {setStyleError, addStyleRequired}