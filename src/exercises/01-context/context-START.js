import React from 'react';

// 👨‍💻 we want to add and change currency
// 👨‍💻 create currency context

const DATA = [
  {
    id: '1',
    title: 'The Road to React',
    price: 19.99,
  },
  {
    id: '2',
    title: 'The Road to GraphQL',
    price: 29.99,
  },
];

// 👨‍💻 provide currency context in App
const App = () => {
  return (
    <div>
      <Books list={DATA} />
    </div>
  );
};

const Books = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </ul>
  );
};

// 👨‍💻 consume currency context
const Book = ({ item }) => {
  return (
    <li>
      {item.title} - {item.price}
    </li>
  );
};

export default App;
