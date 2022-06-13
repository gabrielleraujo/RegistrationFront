function setStyleError(result)
{
    result.setAttribute("class", "error");
}

function addStyleRequired(item)
{
    item.parentNode.querySelector('label')
    .insertAdjacentHTML('afterend',"<small required class='required'>*</small>");
}

export {setStyleError, addStyleRequired}