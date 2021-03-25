let defaultData = {
    cats: [
      { id: 1, title: "Завтраки" },
      { id: 2, title: "Первые блюда" },
      { id: 3, title: "Гарниры" },
    ],
    products: [
      {
        id: 1,
        cid: 1,
        title: "Овсяная каша с фруктами",
        im: "i/im1.jpg",
        price: 25,
      },
      {
        id: 2,
        cid: 1,
        title: "Яичница глазунья с овощами на сковородке",
        im: "i/im2.jpg",
        price: 25,
      },
      {
        id: 3,
        cid: 1,
        title: "Сет азербайджанский завтрак",
        im: "im3.jpg",
        price: 10,
      },
      {
        id: 4,
        cid: 1,
        title: "Яичница с помидорами по-бакински",
        im: "im4.jpg",
        price: 28,
      },
      { id: 5, cid: 3, title: "Сырники со сметаной", im: "im5.jpg", price: 50 },
      { id: 6, cid: 2, title: "Шпинатный крем-суп", im: "im6.jpg", price: 60 },
      { id: 7, cid: 2, title: "Суп Пити", im: "im7.jpg", price: 118 },
      { id: 8, cid: 2, title: "Борщ украинский", im: "im8.jpg", price: 68 },
      { id: 9, cid: 2, title: "Суп Кюфта Бозбаш", im: "im9.jpg", price: 145 },
      { id: 11, cid: 3, title: "Картофель фри", im: "im11.jpg", price: 35 },
      {
        id: 12,
        cid: 3,
        title: "Картофель по-домашнему",
        im: "im12.jpg",
        price: 45,
      },
      { id: 13, cid: 3, title: "Рис с овощами", im: "im13.jpg", price: 38 },
    ],
  };
  
  var renderCats = defaultData.cats.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});