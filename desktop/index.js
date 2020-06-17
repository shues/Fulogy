'use strict';

const e = React.createElement;

class TopPanel extends React.Component {
  render() {
    return (e('div', {
      className: 'header'
    }, e(Logo), e(Cart), e(Hamburger)));
  }
}

class Logo extends React.Component {
  render() {
    return e('div', {
      className: "logo"
    }, )
  }
}


class Cart extends React.Component {
  render() {
    return e('div', {
      className: "cart"
    }, e('div', {
      className: "cartsize"
    }, '1'))
  }
}

class Hamburger extends React.Component {
  render() {
    return e('div', {
      className: "hamburger"
    }, e('div', {
      className: "hamburger__line"
    }), e('div', {
      className: "hamburger__line"
    }), e('div', {
      className: "hamburger__line"
    }))
  }
}


class Content extends React.Component {
  render() {
    return (
      e('div', {
        className: "content"
      })
    );
  }
}

class App extends React.Component {
  render() {
    return (
      e('div', {
        className: 'app'
      }, e(TopPanel), e(Content))
    );
  }
}

ReactDOM.render(
  e(App),
  document.getElementById('app')
);
