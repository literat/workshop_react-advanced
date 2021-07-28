import React from 'react';

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

const CURRENCIES = {
  Euro: {
    code: 'EUR',
    label: 'Euro',
    conversionRate: 1, // base conversion rate
  },
  Usd: {
    code: 'USD',
    label: 'US Dollar',
    conversionRate: 1.19,
  },
};

const CurrencyContext = React.createContext(null);

// custom context hook
const useCurrency = () => {
  const [currency, setCurrency] = React.useContext(CurrencyContext);

  const handleCurrency = (value) => {
    setCurrency(value);
  };

  return { value: currency, onChange: handleCurrency };
};

// higher order component
const withCurrency = (Component) => (props) => {
  const currency = useCurrency();

  return <Component {...props} currency={currency} />;
};

// if ref is used
//
// const withCurrency = (Component) =>
//   React.forwardRef((props, ref) => {
//     const currency = useCurrency();

//     return <Component {...props} ref={ref} currency={currency} />;
//   });

// custom provider component
const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = React.useState(CURRENCIES.Euro);

  return (
    <CurrencyContext.Provider value={[currency, setCurrency]}>
      {children}
    </CurrencyContext.Provider>
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


const Book = ({ item }) => {
  // using custom hook without using context intermediary
  const currency = useCurrency();

  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.code,
  }).format(item.price * currency.conversionRate);

  return (
    <li>
      {item.title} - {price}
    </li>
  );
};

const App = () => {
  return (
    <CurrencyProvider>
      <CurrencyButtons />

      <Books list={DATA} />
    </CurrencyProvider>
  );
};

const CurrencyButtons = ({ onChange }) => {
  return Object.values(CURRENCIES).map((item) => (
    <CurrencyButton key={item.label} onClick={() => onChange(item)}>
      {item.label}
    </CurrencyButton>
  ));
};

const CurrencyButton = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default App;
