import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <div>hello react, hello webpack,kk</div>,
    document.getElementById('app')
);

module.hot.accept();