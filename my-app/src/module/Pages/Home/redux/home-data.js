import hat from '../../../../asset/hat.jpg';
import jacket from '../../../../asset/jacket.jpg';
import sneaker from '../../../../asset/sneaker.jpg';
import women from '../../../../asset/women.jpg';
import men from '../../../../asset/men.jpg';

export default function(){
  return[
    {
      title: 'hats',
      imageUrl: hat,
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl:jacket,
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: sneaker,
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'women',
      imageUrl: women,
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'men',
      imageUrl: men,
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};