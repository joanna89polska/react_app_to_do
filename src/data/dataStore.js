export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  listCreatorText: 'Add new list',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  header: {
    icon: 'cat',
  },
};
  
export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const subpageContents = {
  info: {
    title: 'INFO',
    image: 'https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?cs=srgb&dl=blank-composition-desk-display-317355.jpg&fm=jpg',
    subtitle: 'Info',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  faq: {
    title: 'FAQ',
    image: 'https://images.pexels.com/photos/221164/pexels-photo-221164.jpeg?cs=srgb&dl=black-and-white-business-career-close-up-221164.jpg&fm=jpg',
    subtitle: 'Frequently Asked Questions',
    content: 'All you need to know before you start!',
  },
};
  
export const listData = {
  key: 0,
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};
  
const lists = [
  {
    id: 'list-1',
    title: '1',
    description: 'I need to check it out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: '2',
    description: 'Interesing but it can wait',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-3',
    title: '3',
    description: 'For free time',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];
  
const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];
  
const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];
  
const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};
  
export default initialStoreData;