document.addEventListener("DOMContentLoaded", function () {
    const speedometer = new JustGage({
        id: "speedometer",
        value: 15, // Valor de exemplo
        min: 0,
        max: 30, // Valor de exemplo
        title: "Velocímetro",
        label: "Meta Total",
        gaugeWidthScale: 0.6,
        counter: true,
        valueFontColor: "#000",
        gaugeColor: "#ddd",
        levelColors: ["#ff0000", "#ffff00", "#00ff00"]
    });
});
