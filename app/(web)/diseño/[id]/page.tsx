import React from "react";

const DesignPage = ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  return <div>{id}</div>;
};

export default DesignPage;
