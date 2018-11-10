import React from "react";
import PropTypes from 'prop-types';
import grid from './images/grid.gif';
import inIcon from './images/in.png';
import more from './images/more.svg';
import less from './images/less.svg';

import "./index.css";

var mx = require('mxgraph-js');

class Hawkeyes extends React.Component {
  componentDidMount() {

    this.diagramDiv.style.height = "auto";
    this.diagramDiv.style.width = "auto";
    this.diagramDiv.position = "relative";

    this.createGraph(this.diagramDiv);
    this.renderGraph();
  }

  shaping() {

    function HENode() {
      mx.mxCylinder.call(this);
    };

    mx.mxUtils.extend(HENode, mx.mxCylinder);
    HENode.prototype.defaultPos1 = 20;
    HENode.prototype.defaultPos2 = 60;

    HENode.prototype.redrawPath = function (path, x, y, w, h, isForeground) {
      var pos1 = mx.mxUtils.getValue(this.style, 'pos1', this.defaultPos1);
      var pos2 = mx.mxUtils.getValue(this.style, 'pos2', this.defaultPos2);
      var pos3 = mx.mxUtils.getValue(this.style, 'pos3', this.defaultPos3);

      if (isForeground) {
        if (pos1 < h) {
          path.moveTo(0, pos1);
          path.lineTo(w, pos1);
        }

        if (pos2 < h) {
          path.moveTo(0, pos2);
          path.lineTo(w, pos2);
        }

        if (pos3 < h) {
          path.moveTo(0, pos3);
          path.lineTo(w, pos3);
        }
      }
      else {
        path.rect(0, 0, w, h);
      }
    };
    this._graph.cellRenderer.defaultShapes['HENode'] = HENode;
  }

  styling() {
    // Creates the default style for vertices
    let style = [];
    style[mx.mxConstants.STYLE_SHAPE] = "HENode";
    style[mx.mxConstants.STYLE_PERIMETER] = mx.mxPerimeter.RectanglePerimeter;
    style[mx.mxConstants.STYLE_STROKECOLOR] = 'gray';
    style[mx.mxConstants.STYLE_ROUNDED] = false;
    style[mx.mxConstants.STYLE_FILLCOLOR] = '#EEEEEE';
    style[mx.mxConstants.STYLE_GRADIENTCOLOR] = 'white';
    style[mx.mxConstants.STYLE_FONTCOLOR] = '#333333';
    style[mx.mxConstants.STYLE_FONTSIZE] = "12";
    style[mx.mxConstants.STYLE_ALIGN] = mx.mxConstants.ALIGN_LEFT;
    style[mx.mxConstants.STYLE_VERTICAL_ALIGN] = mx.mxConstants.ALIGN_TOP;
    style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
    style["pos1"] = 38;
    style["pos2"] = 58;
    style["pos3"] = 78;
    this._graph.getStylesheet().putCellStyle('HENode', style);

    style = mx.mxUtils.clone(style);
    style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_RECTANGLE;
    style[mx.mxConstants.STYLE_PERIMETER] = mx.mxPerimeter.RectanglePerimeter;
    style[mx.mxConstants.STYLE_STROKECOLOR] = 'gray';
    style[mx.mxConstants.STYLE_ROUNDED] = true;
    style[mx.mxConstants.STYLE_FILLCOLOR] = '#EEEEEE';
    style[mx.mxConstants.STYLE_GRADIENTCOLOR] = 'white';
    style[mx.mxConstants.STYLE_FONTCOLOR] = '#222244';
    style[mx.mxConstants.STYLE_ALIGN] = mx.mxConstants.ALIGN_CENTER;
    style[mx.mxConstants.STYLE_VERTICAL_ALIGN] = mx.mxConstants.ALIGN_MIDDLE;
    style[mx.mxConstants.STYLE_FONTSIZE] = "12";
    style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
    this._graph.getStylesheet().putCellStyle('process', style);
    //this._graph.getStylesheet().putDefaultVertexStyle(style);

    style = mx.mxUtils.clone(style);
    style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_SWIMLANE;
    style[mx.mxConstants.STYLE_VERTICAL_ALIGN] = 'middle';
    style[mx.mxConstants.STYLE_ROUNDED] = false;
    style[mx.mxConstants.STYLE_FONTSTYLE] = 'oblique';
    style[mx.mxConstants.STYLE_FONTSIZE] = 10;
    style[mx.mxConstants.STYLE_STARTSIZE] = 22;
    style[mx.mxConstants.STYLE_HORIZONTAL] = false;
    style[mx.mxConstants.STYLE_FONTCOLOR] = '#223344';
    style[mx.mxConstants.STYLE_STROKECOLOR] = 'black';
    this._graph.getStylesheet().putCellStyle('swimlane', style);

    // Creates the default style for edges
    style = mx.mxUtils.clone(style);
    style = this._graph.getStylesheet().getDefaultEdgeStyle();
    //style[mx.mxConstants.STYLE_STROKECOLOR] = '#0C0C0C';
    //style[mx.mxConstants.STYLE_LABEL_BACKGROUNDCOLOR] = 'white';
    style[mx.mxConstants.STYLE_EDGE] = mx.mxEdgeStyle.ElbowConnector;
    style[mx.mxConstants.STYLE_ROUNDED] = true;
    style[mx.mxConstants.STYLE_FONTCOLOR] = 'black';
    style[mx.mxConstants.STYLE_FONTSIZE] = "12";
    this._graph.getStylesheet().putDefaultEdgeStyle(style);

  }

  renderHENode(cell) {
    if (typeof cell.value != "object") {
      return "";
    }
    if (cell.isCollapsed()) {
      return "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cell.value.title;
    }
    var table = document.createElement('table');
    table.style.height = '100%';
    table.style.width = '100%';

    var body = document.createElement('tbody');
    var tr1 = document.createElement('tr');
    tr1.style.height = '15px';
    var td0 = document.createElement("td");
    td0.rowSpan = "2";
    var imgTitle = document.createElement("img");
    imgTitle.src = inIcon;
    imgTitle.style.width = "20px";
    imgTitle.style.marginTop = "10px";
    var td1 = document.createElement('td');
    td1.style.textAlign = 'left';
    td1.style.fontSize = '13px';
    td1.style.color = '#774488';
    mx.mxUtils.write(td1, cell.value.title);

    
    var tr2 = document.createElement('tr');
    tr2.style.height = '16px';
    var td2 = document.createElement('td');
    td2.style.textAlign = 'left';
    td2.style.fontSize = '11px';
    td2.style.color = '#885511';
    mx.mxUtils.write(td2, cell.value.subtitle);

    td0.appendChild(imgTitle);
    tr1.appendChild(td0);
    tr1.appendChild(td1);
    tr2.appendChild(td2);
    body.appendChild(tr1);
    body.appendChild(tr2);

    Object.keys(cell.value).forEach(key=>{
      if (["title","subtitle","url","tooltip"].includes(key)) {
        return;
      }
      var tr5 = document.createElement('tr');
      var td5_0 = document.createElement("td");
      td5_0.style.fontSize = '10px';
      mx.mxUtils.write(td5_0, key);
      var td5 = document.createElement('td');
      td5.style.textAlign = 'left';
      td5.style.fontSize = '13px';
      if ( key === "status" ) {
        if (cell.value[key] === "healthy") {
          td5.style.color = '#00AA22';
        } else {
          td5.style.color = '#EE0000';
        }
      } else {
        td5.style.color = '#885588';
      }
      mx.mxUtils.write(td5, cell.value[key]);
      tr5.appendChild(td5_0);
      tr5.appendChild(td5);
      body.appendChild(tr5);
    })
    table.appendChild(body);

    return table;
  }

  createGraph(container) {
    if (!mx.mxClient.isBrowserSupported()) {
      return mx.mxUtils.error('Browser is not supported!', 200, false);
    }
    mx.mxEvent.disableContextMenu(container);
   
    // Overridden to define per-shape connection points
    mx.mxGraph.prototype.getAllConnectionConstraints = function (terminal, source) {
      if (terminal != null && terminal.shape != null) {
        if (terminal.shape.stencil != null) {
          if (terminal.shape.stencil != null) {
            return terminal.shape.stencil.constraints;
          }
        }
        else if (terminal.shape.constraints != null) {
          return terminal.shape.constraints;
        }
      }

      return null;
    };

    mx.mxShape.prototype.constraints = [new mx.mxConnectionConstraint(new mx.mxPoint(0.25, 0), true),
    new mx.mxConnectionConstraint(new mx.mxPoint(0.5, 0), true),
    new mx.mxConnectionConstraint(new mx.mxPoint(0.75, 0), true),
    new mx.mxConnectionConstraint(new mx.mxPoint(0, 0.25), true),
    new mx.mxConnectionConstraint(new mx.mxPoint(0, 0.5), true),
    new mx.mxConnectionConstraint(new mx.mxPoint(0, 0.75), true),
    new mx.mxConnectionConstraint(new mx.mxPoint(1, 0.25), true),
    new mx.mxConnectionConstraint(new mx.mxPoint(1, 0.5), true),
    new mx.mxConnectionConstraint(new mx.mxPoint(1, 0.75), true),
    new mx.mxConnectionConstraint(new mx.mxPoint(0.25, 1), true),
    new mx.mxConnectionConstraint(new mx.mxPoint(0.5, 1), true),
    new mx.mxConnectionConstraint(new mx.mxPoint(0.75, 1), true)];
    mx.mxPolyline.prototype.constraints = null;

    this._graph = new mx.mxGraph(container);

    new mx.mxRubberband(this._graph);

    this._graph.addListener(mx.mxEvent.CELLS_ADDED, function (sender, evt) {
      let cells = evt.getProperty('cells');

      if (cells != null && cells.length > 0) {
        cells.forEach(
          (cell) => {
            if (this._cells[cell.id]) {
              return;
            }
            this._cells[cell.id] = cell;
            this._dataModel.graph.push({
              cell
            });
          }
        );
      }
    }.bind(this));

    this._graph.setTooltips(true);
    this._graph.collapsedImage = new mx.mxImage(more, 12, 12);
    this._graph.expandedImage = new mx.mxImage(less, 12, 12);

    this._graph.isHtmlLabel = function (cell) {
      return true;
    };

    this._graph.isCellFoldable = function(cell) {
      return true;
    }

    this._graph.getTooltipForCell =  function(cell) {
      return cell.value.tooltip;
    }

    this._graph.addListener(mx.mxEvent.DOUBLE_CLICK, function(sender, evt) {
      const cell = evt.getProperty('cell');
      if (cell && cell.value.url) {
        window.open(cell.value.url, '_blank');
      }
      evt.consume();
    });

    this._graph.getLabel = function (cell) {
      switch (cell.style) {
        case "HENode":
          return this.renderHENode(cell);
        case "swimlane":
          var label = this._graph.convertValueToString(cell);
          return label;
        case "edge":
          return cell.label;
        default:
          break;
      }
    }.bind(this);

    this._graph.setConnectable(true);
    this._graph.setAllowDanglingEdges(true);
    new mx.mxRubberband(this._graph); // Enables rubberband selection

    this.styling();
    this.shaping();
    this._cells = {};
  }

  renderGraph() {
    if (this.diagramDiv == null) {
      return;
    }
    this._dataModel = this.props.data;
    const parent = this._graph.getDefaultParent();

    this._graph.getModel().beginUpdate();
    //remove old
    try {
      this._dataModel.graph.forEach(
        (node) => {
          if (node.value && node.id) {
            if (this._cells[node.id] &&
              JSON.stringify(this._cells[node.id].value) === JSON.stringify(node.value)) {
              return;
            }
            switch (node.style) {
              case "HENode":
              case "swimlane":
                if (this._cells[node.id]) {
                  node.geometry.x = this._cells[node.id].geometry.x;
                  node.geometry.y = this._cells[node.id].geometry.y;
                  //this._graph.removeCells([this._cells[node.id]], true);
                  this._cells[node.id].value = node.value;
                  this._graph.getModel().setValue(this._cells[node.id], node.value);
                } else {
                  this._cells[node.id] = this._graph.insertVertex(
                    this._cells[node.parent] !== undefined?this._cells[node.parent]:parent,
                    node.id, node.value,
                    node.geometry.x, node.geometry.y, node.geometry.width, node.geometry.height,
                    node.style);
                }

                
                break;
              case "edge":
                this._cells[node.id] = this._graph.insertEdge(parent, node.id, node.value, this._cells[node.source],
                  this._cells[node.target], node.edgeParams);
                break;
              default:
                break;
            }
          }
        }
      );

    } finally {
      this._graph.getModel().endUpdate(); // Updates the display
    }
  }

  render() {
    this.renderGraph();
    return (
      <div style={{ height: "auto", width: "auto" }}>
        <div ref={c => this.diagramDiv = c}
          style={{ height: "auto", width: "auto", backgroundRepeat: 'repeat', backgroundImage: `url(${grid})` }} />
      </div>
    );
  }
}

Hawkeyes.propTypes = {
  data: PropTypes.object
};

export default Hawkeyes;

