import React, { useEffect, useState } from "react";
import axios from "axios";
const Post = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false)
        setPost(res.data);
        setErr("")
      })
      .catch((err) => {
        setLoading(false);
        setPost(null)
        setErr("Something went Wrong")
      });
  }, []);
  console.log(post);

  return (
    <div>
      <h1>{loading?"loading.....":post.title}</h1>
      {err?err:null}
    </div>
  );
};

export default Post;
