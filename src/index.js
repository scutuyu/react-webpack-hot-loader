import React from 'react';
import ReactDom from 'react-dom';
require('./index.less');

ReactDom.render(
    <div>hello react, hello webpack</div>,
    document.getElementById('app')
);

module.hot.accept();