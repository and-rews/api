import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "./api/my_api";

const Comments = () => {
  const query = useQuery({ queryKey: ["comments"], queryFn: fetchComments });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {query.data?.data.map((item: any) => (
        <>
          <h2>{item.name}</h2>
        </>
      ))}
    </div>
  );
};

export default Comments;
