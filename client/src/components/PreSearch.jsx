import React from 'react';
import FontAwesome from 'react-fontawesome';
import {
  Row
} from 'reactstrap';

const PreSearch = () => {
  return (
    <div>
      <Row className="flex-center">
        <h4>
          Start by searching for a location <FontAwesome name='hand-o-up' />
        </h4>
      </Row>
    </div>
  );
};

export default PreSearch;
