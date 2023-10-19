var days = ["hétfő", "kedd", "szerda","csütörtök","péntek","szombat","vasárnap"];
console.log("for ciklussal")
//1.feladat
for(let i=0;i<days.length;i++)
{
    console.log(days[i]);
}
// 2.feladat:
console.log("for in ciklus")
for (var index in days) {
    console.log(days[index]);
}
// 3.feladat:
console.log("for of ciklus")
for (var nap of days) {
    console.log(days);
}
// 4.feladat:
console.log("foreach index ciklussal")
napok.forEach(function(day) {
    console.log(day);
});
// 5.feladat:
console.log("foreach index, value ciklussal")
days.forEach(function(value, index) {
    console.log("Index: " + index + ", Érték: " + value);
});
// 6.feladat:
console.log("foreach value ciklussal")
days.forEach(function(value) {
    console.log(value);
});
// 7.feladat:
console.log("while ciklussal")
var i = 0;
while (i < days.length) {
    console.log(days[i]);
    i++;
}
// 8.feladat:
console.log("do while ciklussal")
var i = 0;
do {
    console.log(days[i]);
    i++;
} while (i < days.length);