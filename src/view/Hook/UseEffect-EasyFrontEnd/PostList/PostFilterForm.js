import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
  onSubmit: null,
};

function PostFilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleOnchange(event) {
    setSearchTerm(event.target.value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formsubmit = {
        searchTerm: event.target.value,
      };
      if (onSubmit) {
        onSubmit(formsubmit);
      }
    }, 300);
  }
  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleOnchange}></input>
    </form>
  );
}

export default PostFilterForm;
