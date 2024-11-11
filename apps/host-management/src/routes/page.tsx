import './index.css';
import React, { Suspense } from 'react';
import { Button } from 'remote_pages/button';

const Index = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Button />
  </Suspense>
);

export default Index;
