import './App.css';
import './common/Layout.css';
// import styled from 'styled-components';
import jQuery from 'jquery';
import Header from './main/Header';
import History from './main/History';
import Contents from './main/Contents';

window.$ = window.jQuery = jQuery;

const App = () => {
  return(
    <div className="wrap">
      <Header />
      <History />
      <Contents />
      <Contents />
    </div>
  );
};

export default App;
