import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/actions/postActions";
import { Heading, Spinner } from "@chakra-ui/react";
const PostList = () => {
  const postStore = useSelector((store) => store.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  console.log(postStore);

  if (postStore.loading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  if (postStore.error) return <div>Error........</div>;

  return (
    <div>
      <Heading as="h2" size="xl">
        Post
      </Heading>
      {postStore &&
        postStore?.post?.map((post) => {
          return  <li>{post.title}</li>;
        })}
    </div>
  );
};

export default PostList;
