document.addEventListener("DOMContentLoaded", function () {
    const dailyPointer = document.getElementById("dailyPointer");
    const challengePointer = document.getElementById("challengePointer");
    const totalPointer = document.getElementById("totalPointer");

    const metaDiaria = 10; // Valor de exemplo
    const desafioTotal = 20; // Valor de exemplo
    const metaTotal = 30; // Valor de exemplo

    const maxRotation = 180; // 180 degrees for a semicircle

    const calculateRotation = (value, maxValue) => {
        const percentage = (value / maxValue) * 100;
        return (percentage * maxRotation) / 100;
    };

    dailyPointer.style.transform = `rotate(${calculateRotation(metaDiaria, metaTotal)}deg)`;
    challengePointer.style.transform = `rotate(${calculateRotation(desafioTotal, metaTotal)}deg)`;
    totalPointer.style.transform = `rotate(${calculateRotation(metaTotal, metaTotal)}deg)`;
});
