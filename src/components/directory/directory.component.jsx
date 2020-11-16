import React, { useState } from 'react';
import './directory.styles.scss';

/* MENU ITEM IMPORT */
import MenuItem from '../menu-item/menu-item.component';

/* DIRECTORY STATE */
import DirectoryState from './directory.state';

const Directory = () => {
  const [{ sections }] = useState(DirectoryState);
  return (
    <div className="directory-menu">
      {
        /* LOOP THROUGH STATE TO CREATE MENU ITEMS */
        sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      }
    </div>
  );
};

export default Directory;
