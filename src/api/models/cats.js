export const catItems = [
  {
    cat_id: 1,
    name: "Milo",
    birthdate: "2022-05-15",
    weight: 4.5,
    owner: "Niklas",
    image: "https://loremflickr.com/320/240/cat",
  },
  {
    cat_id: 2,
    name: "Luna",
    birthdate: "2021-08-03",
    weight: 3.8,
    owner: "Alex",
    image: "https://loremflickr.com/320/240/cat",
  },
];

export const addCat = (catData, filename) => {
  const nextId = Math.max(0, ...catItems.map((cat) => cat.cat_id)) + 1;
  const cat = { ...catData, cat_id: nextId, image: filename };
  catItems.push(cat);

  return cat;
};
