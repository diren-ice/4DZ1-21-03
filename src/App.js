import './App.css';
import TodoList from './page/TodoList/TodoList';
import Block from './components/Block/Block';
// import Header from  './components/Header/Header';
// import Button from './components/Button/Button';
// import Footer from './components/footer/Footer';
// import Text from './components/Text/Text';
// import Block from './components/block/Block';




function App() {
  return (
    <div className="App">
    {/*<Header title={`NEWS`}/>*/}
    {/*<Text/>*/}
    {/*  <Button title={`Click me`}/>*/}
    {/*  <Button title={`Follow`}/>*/}
        {/*<Footer/>*/}

        <Block/>
      <TodoList/>

    </div>
  );
}

export default App;
