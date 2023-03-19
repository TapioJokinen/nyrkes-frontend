import React from 'react';

import { useParams } from 'react-router-dom';

const OrgInfo = () => {
  const params = useParams();
  return (
    <div>
      <p>{params.orgSlug}</p>
    </div>
  );
};

export default OrgInfo;
