'use strict';

function Homepage() {
  return <div>
            <p><a href="http://localhost:5000/cards">Would you like to see Balloonicorn's trading card collection?</a></p>
            <div><img src="/static/img/balloonicorn.jpg"></img></div>
         </div>;
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
