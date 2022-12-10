import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "./api/my_api";

const Posts = () => {
  const query = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {query.data?.data.map((item: any) => (
        <>
          <h2>{item.title}</h2>
        </>
      ))}

      {query.data?.data.map((item: any) => (
        <>
          <p>{item.body}</p>
        </>
      ))}
    </div>
  );
};

export default Posts;
