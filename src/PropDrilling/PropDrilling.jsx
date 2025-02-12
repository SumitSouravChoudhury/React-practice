import PropTypes from "prop-types";

function Parent() {
  const user = { name: "Sumit", age: 22 };

  return (
    <>
      <Child1 user={user} />
    </>
  );
}

function Child1({ user }) {
  return (
    <>
      <Child2 user={user} />
    </>
  );
}
Child1.propTypes = {
  user: PropTypes.string.isRequired,
};

function Child2({ user }) {
  return (
    <>
      <Child3 user={user} />
    </>
  );
}
Child2.propTypes = {
  user: PropTypes.string.isRequired,
};

function Child3({ user }) {
  return (
    <>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
    </>
  );
}
Child3.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Parent;
