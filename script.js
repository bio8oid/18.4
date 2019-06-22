
var movies = [
  {
    id: 1,
    title: 'Terminator',
    desc: 'Movie about electronic killer adventures',
    src: 'images/term.jpeg'
  },
  {
    id: 2,
    title: 'Mission Possible',
    desc: 'Suspended agent action movie',
    src: 'images/miszyn.jpeg'
  },
  {
    id: 3,
    title: 'Cobra',
    desc: 'Movie about Cobra but not snake',
    src: 'images/korba2.jpg'
  },
  {
    id: 4,
    title: 'Desperado',
    desc: 'Story about Flamenco lover',
    src: 'images/desperado.jpeg'
  },
  {
    id: 5,
    title: 'Batman',
    desc: "Man who didn't read Birdman",
    src: 'images/batmane.jpg'
  },
  {
    id: 6,
    title: 'Matriks',
    desc: 'Trainspotting Sequele',
    src: 'images/matriks.jpeg'
  }
];


var MovieDescription = React.createClass({

propTypes: {
    desc: React.PropTypes.string.isRequired,
  },

  render: function() {
    return React.createElement('p', {}, this.props.desc);
  },
});



var MovieTitle = React.createClass({

propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return React.createElement('h2', {}, this.props.title);
  },
});



var MovieImage = React.createClass({

propTypes: {
    src: React.PropTypes.string.isRequired,
  },

  render: function() {
    return React.createElement('img', {src: this.props.src, width: "300px", height: "400px"});
  },
});



var Movie = React.createClass({

  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

render: function() {

  var movie = this.props.movie;

    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {title: movie.title}),
        React.createElement(MovieDescription, {desc: movie.desc}),
        React.createElement(MovieImage, {src: movie.src})
      )
    )
  }
});


var moviesElements = movies.map(function(movie) {

    return (
        React.createElement(Movie, {key: movie.id, movie}      
      )
    )
});



var List = React.createClass({

  render: function() {
    return (
        React.createElement('div', {},
        React.createElement('h1', {}, 'Movie List'),
        React.createElement('ul', {className: 'flex'}, moviesElements)
      )
    )
  },
});


ReactDOM.render(React.createElement(List), document.getElementById('app'));