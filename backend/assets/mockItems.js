const mockItems = [
  {
    id: '1',
    title: 'Japanese Wasabi Doritos',
    price: '7.99',
    img:
      'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc5fHxwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '2',
    title: 'Jack Daniel Original',
    price: '59.99',
    img:
      'https://images.unsplash.com/photo-1527281400683-1aae777175f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '3',
    title: 'Sony Headset for audio engineer PRO-X version',
    price: '699.99',
    img:
      'https://images.unsplash.com/photo-1583305727488-61f82c7eae4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYyfHxwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '4',
    title: 'Triple Black Axe Body Spray',
    price: '5.99',
    img:
      'https://images.unsplash.com/photo-1609942571926-f3fe26feab26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '5',
    title: 'Clinique Woman Lipstick',
    price: '39.99',
    img:
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '6',
    title: 'Nike Sneaker Red',
    price: '159.99',
    img:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '7',
    title: 'Reusable Water Bottle 18 ounce',
    price: '10.99',
    img:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '8',
    title: 'N5 Chanel Perfume',
    price: '89.99',
    img:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '9',
    title: 'Modelo Beer 18 bottle',
    price: '49.99',
    img:
      'https://images.unsplash.com/photo-1619760078865-ee0f4c6586ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '10',
    title: 'Super Sayian Anime Figurine',
    price: '89.99',
    img:
      'https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '11',
    title: 'Coca Cola 24 count',
    price: '16.99',
    img:
      'https://images.unsplash.com/photo-1534260164206-2a3a4a72891d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '12',
    title: 'Early Bird Coffee beans',
    price: '46.99',
    img:
      'https://images.unsplash.com/photo-1599639932525-213272ff954b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA3fHxwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '13',
    title: 'Box Water 24 count',
    price: '45.99',
    img:
      'https://images.unsplash.com/photo-1627483262092-9f73bdf005cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA4fHxwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '14',
    title: 'Nescafe Gold Espresso Instant Powder',
    price: '15.99',
    img:
      'https://images.unsplash.com/photo-1553052484-d8525f4e7fb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzM5fHxwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '15',
    title: 'RedBull 12 count',
    price: '29.99',
    img:
      'https://images.unsplash.com/photo-1561580425-68f0b7cfc4ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzYyfHxwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
]
export default mockItems
