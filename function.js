document.getElementById('ozil-select').addEventListener('click', function () {
    getAddlist('ozil', 'ozil-select')
})

document.getElementById('mercelo-select').addEventListener('click', function () {
    getAddlist('mercelo', 'mercelo-select')
})

document.getElementById('neymar-select').addEventListener('click', function () {
    getAddlist('neymar', 'neymar-select')
})

document.getElementById('messi-select').addEventListener('click', function () {
    getAddlist('messi', 'messi-select')
})

document.getElementById('alisson-select').addEventListener('click', function () {
    getAddlist('alisson', 'alisson-select')
})

document.getElementById('salah-select').addEventListener('click', function () {
    getAddlist('salah', 'salah-select')
})




document.getElementById('calculate').addEventListener('click', function () {
    const liLenght = document.querySelectorAll("#ul-list li").length;
    const PlayerCost = document.getElementById('Per-Player')
    const PerPlayerCost = parseFloat(PlayerCost.value)

    if (liLenght < 5 || isNaN(PerPlayerCost)) {
        alert('Pleace select 5 player and enter per playercost')
        return
    }
    const totlePlayerCost = PerPlayerCost * liLenght;
    const PlayerExpenses = document.getElementById('Player-Expenses')
    PlayerExpenses.innerText = totlePlayerCost;
})


document.getElementById('calculateTotle').addEventListener('click', function () {
    const PlayerExpenses = document.getElementById('Player-Expenses')
    const PlayerCost = parseFloat(PlayerExpenses.innerText)
    const Totle = document.getElementById('Totle-Cost')

    const Manager = getInputValue('Manager')
    const Coach = getInputValue('Coach')
    if (isNaN(Manager) || isNaN(Coach) || PlayerCost == 0) {
        alert('Calculate player cost and Enter the Coach and Manager cost')
        return
    }
    const TotleCost = PlayerCost + Manager + Coach;
    Totle.innerText = TotleCost;

})