// Lab_4.6
// Гринчук Тарас
// Лабораторна робота № 4.6
// Вкладені цикли
// Варіант №4

let P, S, j, i;

// Перший спосіб
P = 1;
j = 1;
while (j <= 15) {
   S = 0;
   i = j;
   while (i <= j * j) {
      S += i * i;
      i++;
   }
   P *= S;
   j++;
}
console.log(P);

// Другий спосіб
P = 1;
j = 1;
do {
   S = 0;
   i = j;
   do {
      S += i * i;
      i++;
   } while (i <= j * j);
   P *= S;
   j++;
} while (j <= 15);
console.log(P);

// Третій спосіб
P = 1;
for (j = 1; j <= 15; j++) {
   S = 0;
   for (i = j; i <= j * j; i++) {
      S += i * i;
   }
   P *= S;
}
console.log(P);

// Четвертий спосіб
P = 1;
for (j = 15; j >= 1; j--) {
   S = 0;
   for (i = j * j; i >= j; i--) {
      S += i * i;
   }
   P *= S;
}
console.log(P);
