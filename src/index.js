import React from "react";
import ReactDOM from "react-dom";
import { Hawkeyes } from './lib';

import demo from './demo';

ReactDOM.render(<Hawkeyes data={demo} />, document.getElementById("root"));
setInterval(function() {
    demo.graph[2].value = Object.assign({}, demo.graph[2].value);
    demo.graph[2].value.out = Math.floor(Math.random()*400);
    demo.graph[2].value.status = Math.random()>0.5?"healthy":"unhealthy";
    demo.graph[7].value = Object.assign({}, demo.graph[7].value);
    demo.graph[7].value.in = Math.floor(Math.random()*400);
    ReactDOM.render(<Hawkeyes data={demo} />, document.getElementById("root"));
}, 1000);


