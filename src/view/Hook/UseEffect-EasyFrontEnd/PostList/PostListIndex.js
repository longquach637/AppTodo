import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import PostList from "./PostList";
import querySring from "query-string";
import PostFilterForm from "./PostFilterForm";
import Lock from "./Lock";
function PostListIndex() {
  const [postList, setPostlist] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 52,
  });

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });

  const [showLock, setShowLock] = useState(true);

  function handlePageChange(newPage) {
    setFilter({
      ...filter,
      _page: newPage,
    });
  }
  function onSubmit(newFilter) {
    console.log(">>>check search: ", newFilter);
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilter.searchTerm,
    });
  }

  useEffect(() => {
    const paramSring = querySring.stringify(filter);
    async function fetchPostList() {
      try {
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramSring}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { data, pagination } = responseJSON;
        setPostlist(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Errore: ", error.message);
      }
    }
    fetchPostList();
  }, [filter]);
  return (
    <div>
      {showLock && <Lock />}
      <button onClick={() => setShowLock(false)}>Hide Lock</button> {"====="}
      <button onClick={() => setShowLock(true)}>Show Lock</button>
      <PostFilterForm onSubmit={onSubmit} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default PostListIndex;
