function setStyleError(result) { result.setAttribute("class", "error"); }

function addStyleRequired(array) {
    array.forEach(item => {
        item.parentNode.querySelector('label')
        .insertAdjacentHTML('afterend',"<small required class='required'>*</small>");
    });
}

export {setStyleError, addStyleRequired}