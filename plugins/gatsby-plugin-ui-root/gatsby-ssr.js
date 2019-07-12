/* eslint-disable import/prefer-default-export, react/prop-types */

import React from 'react';
import RooLayout from './RooLayout';

export const wrapRootElement = ({ element }) => {
  return <RooLayout>{element}</RooLayout>;
};
