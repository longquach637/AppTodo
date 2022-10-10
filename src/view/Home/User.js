import React from "react";
import PropTypes from "prop-types";

User.propTypes = {
  userList: PropTypes.array,
};

User.defaultProps = {
  userList: [],
};

function User(props) {
  const { userList } = props;
  return (
    <div>
      {userList &&
        userList.length > 0 &&
        userList.map((item, index) => (
          <div key={item.id}>
            {index + 1} - {item.title}
          </div>
        ))}
    </div>
  );
}

export default User;
