
function calculateAverage() {
    let vizeGrade = parseFloat(document.getElementById("vize").value);
    let finalGrade = parseFloat(document.getElementById("final").value);

    let average = (0.3 * vizeGrade) + (0.7 * finalGrade);

    document.getElementById("result").innerHTML = "Ortalama: " + average.toFixed(2);
}