enum Shoes {
    Nike,
    Adidas
}

const myShoes = Shoes.Nike;

console.log(myShoes); // 0 출력

enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스'
}

const myShoes2 = Shoes2.Nike;

console.log(myShoes2); // 나이키