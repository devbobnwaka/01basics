import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/style.css';
// import Header from './components/headers';
import Header from './components/headers_func';
import NewsList from './components/news_list';
import Footer from './components/footer';
import JSON from './db.json';

import Life from './components/lifecycle';

class App extends React.Component {

  state = {
    news:JSON,
    filtered:JSON,
    footerText: "I am a happy footer",
    active:true
  }

  getKeyword = (event) => {
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keywords) > -1;
    });

    this.setState({filtered});
  }

  render(){
    // console.log(JSON);
    const {filtered, footerText, active} = this.state;

    return(
      <>  
          <br/>
            { active ? <Life/> : null }
          <br/>
          <button onClick={() => this.setState({active:!active})}>Active</button>
          <Header keyword={this.getKeyword}/>
          <NewsList news={filtered}>
            <h1>NewsList Children</h1>
          </NewsList>
          <Footer
            footerText={footerText}
          />


      </>
    )
  } 
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
