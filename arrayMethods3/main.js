// sort(),-sıralayır
// map(), -array daxilindəki elementlərə funksiya daxil edərək yeni array geri döndürür
// filter(), - funksiya ilə şərtə uyğun element seçir
// find(), - şərtə uyğun ilk elementi tapır
// reduce(),-array acc +val funksiya ilə elementləri tək bir dəyərə çevirir

// forEach() - array  elementlərini dövr (loop) ilə tək-tək işləmək üçün istifadə olunur

// let numbers = [19, 34, 6, 9, 10, 3, 67];

// let myFunc = (x) => x * 2;
//sort
// let sortedArray = numbers.sort((a, b) => b - a);
// console.log(numbers.sort((a, b) => b - a));
// console.log(numbers);

//map
// let mapArray = numbers.map((number) => number * number);

// console.log(mapArray);
// console.log(numbers);

//filter  search
// let filteredArray = numbers.filter((number) => number % 2 === 1);
// console.log(filteredArray);

//find
// let users = [
//   {
//     id: 1,
//     name: "Fidan",
//   },
//   { id: 2, name: "Vefa" },
//   { id: 3, name: "Nermin" },
// ];

// let allUser = users.find((user) => user.id == 2); //{ id: 2, name: "Vefa" }
// console.log(allUser);


// let sumArray = numbers.reduce((acc, number) => acc * number, 1);
// console.log(sumArray);
