let arr = [
  { gender: 'male', name: 'john' },
  { gender: 'female', name: 'ellin' },
  { gender: 'male', name: 'ben' },
];

const filtered = arr.filter(function (item) {
  if (item.gender === 'female') {
    return item;
  }
});

console.log(filtered);
