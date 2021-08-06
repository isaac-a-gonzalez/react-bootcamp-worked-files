//function to find a random number
function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 7) {
      msg = (
        <div>
          <h2>CONGRATS YOU WIN</h2>
          <img
            src="https://media4.giphy.com/media/nXxOjZrbnbRxS/giphy.webp?cid=ecf05e47i7tyyq1vjz2ixr57usq2fc6vyrjgcye49ascufyi&rid=giphy.webp&ct=g"
            alt="man making 'yes' gesture"
          />
        </div>
      );
    } else {
      msg = <p>Sorry You Lose</p>;
    }
    return (
      <div>
        <h1>Your number is: {num}</h1>
        {msg}
      </div>
    );
  }
}
