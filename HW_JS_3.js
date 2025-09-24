function checkProbabilityTheory() {
    let count = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let total = evenCount + oddCount;
    let evenPercent = ((evenCount / total) * 100).toFixed(2);
    let oddPercent = ((oddCount / total) * 100).toFixed(2);

    console.log("Кількість згенерованих чисел: " + total);
    console.log("Парних чисел: " + evenCount);
    console.log("Не парних чисел: " + oddCount);
    console.log("Відсоток парних до непарних: " + evenPercent + "% / " + oddPercent + "%");
}

checkProbabilityTheory();