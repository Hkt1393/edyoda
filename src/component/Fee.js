import "./Fee.css";

function Fee(props) {
  return (
    <div className="subscriptionfee">
      <div>{props.title}</div>
      <div>{props.charges}</div>
    </div>
  );
}

export default Fee;
