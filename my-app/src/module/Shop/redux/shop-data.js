function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const hat = importAll(require.context('../../../asset/hat/'));
const sneaker = importAll(require.context('../../../asset/sneaker/'));
const jacket = importAll(require.context('../../../asset/jacket/'));
const women = importAll(require.context('../../../asset/women/'));
const men = importAll(require.context('../../../asset/men/'));

export default function(){
    return[
        {
            id: 1,
            title: 'Hats',
            routeName: 'hats',
            items: [
              {
                id: 1,
                name: 'Brown Brim',
                imageUrl: hat['1.jpg'],
                price: 25,
                
              },
              {
                id: 2,
                name: 'Blue Beanie',
                imageUrl: hat['2.jpg'],
                price: 18
              },
              {
                id: 3,
                name: 'Brown Cowboy',
                imageUrl: hat['3.jpg'],
                price: 35
              },
              {
                id: 4,
                name: 'Grey Brim',
                imageUrl: hat['4.jpg'],
                price: 25
              },
              {
                id: 5,
                name: 'Green Beanie',
                imageUrl: hat['5.jpg'],
                price: 18
              },
              {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: hat['6.jpg'],
                price: 14
              },
              {
                id: 7,
                name: 'Red Beanie',
                imageUrl: hat['7.jpg'],
                price: 18
              },
              {
                id: 8,
                name: 'Wolf Cap',
                imageUrl: hat['8.jpg'],
                price: 14
              },
              {
                id: 9,
                name: 'Blue Snapback',
                imageUrl: hat['9.jpg'],
                price: 16
              }
            ]             
        },
        {
            id: 2,
            title: 'Sneakers',
            routeName: 'sneakers',
            items: [
                {
                id: 10,
                name: 'Adidas NMD',
                imageUrl: sneaker['1.jpg'],
                price: 220
                },
                {
                id: 11,
                name: 'Adidas Yeezy',
                imageUrl: sneaker['2.jpg'],
                price: 280
                },
                {
                id: 12,
                name: 'Black Converse',
                imageUrl: sneaker['3.jpg'],
                price: 110
                },
                {
                id: 13,
                name: 'Nike White AirForce',
                imageUrl: sneaker['4.jpg'],
                price: 160
                },
                {
                id: 14,
                name: 'Nike Red High Tops',
                imageUrl: sneaker['5.jpg'],
                price: 160
                },
                {
                id: 15,
                name: 'Nike Brown High Tops',
                imageUrl: sneaker['6.jpg'],
                price: 160
                },
                {
                id: 16,
                name: 'Air Jordan Limited',
                imageUrl: sneaker['7.jpg'],
                price: 190
                },
                {
                id: 17,
                name: 'Timberlands',
                imageUrl: sneaker['8.jpg'],
                price: 200
                }
            ]              
        },
        {
            id: 3,
            title: 'Jackets',
            routeName: 'jackets',
            items: [
              {
                id: 18,
                name: 'Black Jean Shearling',
                imageUrl: jacket['1.jpg'],
                price: 125
              },
              {
                id: 19,
                name: 'Blue Jean Jacket',
                imageUrl:  jacket['2.jpg'],
                price: 90
              },
              {
                id: 20,
                name: 'Grey Jean Jacket',
                imageUrl:  jacket['3.jpg'],
                price: 90
              },
              {
                id: 21,
                name: 'Brown Shearling',
                imageUrl:  jacket['4.jpg'],
                price: 165
              },
              {
                id: 22,
                name: 'Tan Trench',
                imageUrl:  jacket['5.jpg'],
                price: 185
              }
            ]
        },
        {
            id: 4,
            title: 'Womens',
            routeName: 'womens',
            items: [
              {
                id: 23,
                name: 'Blue Tanktop',
                imageUrl:  women['1.jpg'],
                price: 25
              },
              {
                id: 24,
                name: 'Floral Blouse',
                imageUrl:  women['2.jpg'],
                price: 20
              },
              {
                id: 25,
                name: 'Floral Dress',
                imageUrl:  women['3.jpg'],
                price: 80
              },
              {
                id: 26,
                name: 'Red Dots Dress',
                imageUrl:  women['4.jpg'],
                price: 80
              },
              {
                id: 27,
                name: 'Striped Sweater',
                imageUrl:  women['5.jpg'],
                price: 45
              },
              {
                id: 28,
                name: 'Yellow Track Suit',
                imageUrl:  women['6.jpg'],
                price: 135
              },
              {
                id: 29,
                name: 'White Blouse',
                imageUrl:  women['7.jpg'],
                price: 20
              }
            ]
        },
        {
            id: 5,
            title: 'Mens',
            routeName: 'mens',
            items: [
              {
                id: 30,
                name: 'Camo Down Vest',
                imageUrl:  men['1.jpg'],
                price: 325
              },
              {
                id: 31,
                name: 'Floral T-shirt',
                imageUrl: men['2.jpg'],
                price: 20
              },
              {
                id: 32,
                name: 'Black & White Longsleeve',
                imageUrl: men['3.jpg'],
                price: 25
              },
              {
                id: 33,
                name: 'Pink T-shirt',
                imageUrl:men['4.jpg'],
                price: 25
              },
              {
                id: 34,
                name: 'Jean Long Sleeve',
                imageUrl: men['5.jpg'],
                price: 40
              },
              {
                id: 35,
                name: 'Burgundy T-shirt',
                imageUrl: men['6.jpg'],
                price: 25
              }
            ]
        }
    ]
};