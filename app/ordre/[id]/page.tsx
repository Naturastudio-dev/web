import React from 'react';

const page = ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  return <div className="bg-primary">{id}</div>;
};

export default page;
