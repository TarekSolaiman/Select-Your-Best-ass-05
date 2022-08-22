function getAddlist(playerId, btnId) {
    const liLenght = document.querySelectorAll("#ul-list li").length;
    if (liLenght === 5) {
        alert('you can not select over 5')
        return
    }
    const ulist = document.getElementById('ul-list')
    const player = document.getElementById(playerId)
    const playerName = player.innerText;
    const list = document.createElement('li')
    list.innerText = playerName;
    ulist.appendChild(list)
    document.getElementById(btnId).setAttribute("class", 'py-2 bg-yellow-300 px-10 bg-yellow-100 rounded-md');
    document.getElementById(btnId).setAttribute("disabled", false);
}
function getInputValue(idName) {
    const inputValue = document.getElementById(idName)
    const inputNumber = parseFloat(inputValue.value)
    return inputNumber;
}