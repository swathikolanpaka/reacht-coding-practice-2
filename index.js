const Button = (props) => {
  //  Write your code here.

  return;
  <button>{props}</button>;
};

const element = (
  <div>
    <h1>Social Buttons</h1>
    <div>
      <Button buttonName="Like" />
      <Button buttonName="Share" />
      <Button buttonName="Subscribe" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
