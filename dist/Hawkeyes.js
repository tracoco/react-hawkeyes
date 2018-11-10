import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from "react";
import grid from './images/grid.gif';
import inIcon from './images/in.png';

var mx = require('mxgraph-js');

var Hawkeyes =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Hawkeyes, _React$Component);

  function Hawkeyes() {
    _classCallCheck(this, Hawkeyes);

    return _possibleConstructorReturn(this, _getPrototypeOf(Hawkeyes).apply(this, arguments));
  }

  _createClass(Hawkeyes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.diagramDiv.style.height = "auto";
      this.diagramDiv.style.width = "auto";
      this.diagramDiv.position = "relative";
      this.createGraph(this.diagramDiv);
      this.renderGraph();
    }
  }, {
    key: "shaping",
    value: function shaping() {
      function HENode() {
        mx.mxCylinder.call(this);
      }

      ;
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
        } else {
          path.rect(0, 0, w, h);
        }
      };

      this._graph.cellRenderer.defaultShapes['HENode'] = HENode;
    }
  }, {
    key: "styling",
    value: function styling() {
      // Creates the default style for vertices
      var style = [];
      style[mx.mxConstants.STYLE_SHAPE] = "HENode";
      style[mx.mxConstants.STYLE_PERIMETER] = mx.mxPerimeter.RectanglePerimeter;
      style[mx.mxConstants.STYLE_STROKECOLOR] = 'gray';
      style[mx.mxConstants.STYLE_ROUNDED] = false;
      style[mx.mxConstants.STYLE_FILLCOLOR] = '#EEEEEE';
      style[mx.mxConstants.STYLE_GRADIENTCOLOR] = 'white';
      style[mx.mxConstants.STYLE_FONTCOLOR] = '#333333';
      style[mx.mxConstants.STYLE_FONTSIZE] = "8";
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
      style[mx.mxConstants.STYLE_FONTSIZE] = "8";
      style[mx.mxConstants.STYLE_FONTSTYLE] = 1;

      this._graph.getStylesheet().putCellStyle('process', style); //this._graph.getStylesheet().putDefaultVertexStyle(style);


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

      this._graph.getStylesheet().putCellStyle('swimlane', style); // Creates the default style for edges


      style = mx.mxUtils.clone(style);
      style = this._graph.getStylesheet().getDefaultEdgeStyle(); //style[mx.mxConstants.STYLE_STROKECOLOR] = '#0C0C0C';
      //style[mx.mxConstants.STYLE_LABEL_BACKGROUNDCOLOR] = 'white';

      style[mx.mxConstants.STYLE_EDGE] = mx.mxEdgeStyle.ElbowConnector;
      style[mx.mxConstants.STYLE_ROUNDED] = true;
      style[mx.mxConstants.STYLE_FONTCOLOR] = 'black';
      style[mx.mxConstants.STYLE_FONTSIZE] = "8";

      this._graph.getStylesheet().putDefaultEdgeStyle(style);
    }
  }, {
    key: "renderHENode",
    value: function renderHENode(cell) {
      if (typeof cell.value != "object") {
        return "";
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
      var td1 = document.createElement('td');
      td1.style.textAlign = 'left';
      td1.style.fontSize = '13px';
      td1.style.color = '#774488';
      mx.mxUtils.write(td1, cell.value.title);
      var tr2 = document.createElement('tr');
      tr2.style.height = '16px';
      var td2 = document.createElement('td');
      td2.style.textAlign = 'left';
      td2.style.fontSize = '13px';
      td2.style.color = '#885511';
      mx.mxUtils.write(td2, cell.value.subtitle);
      var tr3 = document.createElement('tr');
      tr3.style.height = '16px';
      var td3_0 = document.createElement("td");
      mx.mxUtils.write(td3_0, "In:");
      var td3 = document.createElement('td');
      td3.style.textAlign = 'left';
      td3.style.fontSize = '13px';
      td3.style.color = '#885588';
      mx.mxUtils.write(td3, cell.value.in);
      var tr4 = document.createElement('tr');
      tr4.style.height = '16px';
      var td4_0 = document.createElement("td");
      mx.mxUtils.write(td4_0, "Out:");
      var td4 = document.createElement('td');
      td4.style.textAlign = 'left';
      td4.style.fontSize = '13px';
      td4.style.color = '#885588';
      mx.mxUtils.write(td4, cell.value.out);
      var tr5 = document.createElement('tr');
      var td5_0 = document.createElement("td");
      mx.mxUtils.write(td5_0, "Status:");
      var td5 = document.createElement('td');
      td5.style.textAlign = 'left';
      td5.style.fontSize = '13px';

      if (cell.value.status === "healthy") {
        td5.style.color = '#00AA22';
      } else {
        td5.style.color = '#EE0000';
      }

      mx.mxUtils.write(td5, cell.value.status);
      td0.appendChild(imgTitle);
      tr1.appendChild(td0);
      tr1.appendChild(td1);
      tr2.appendChild(td2);
      tr3.appendChild(td3_0);
      tr3.appendChild(td3);
      tr4.appendChild(td4_0);
      tr4.appendChild(td4);
      tr5.appendChild(td5_0);
      tr5.appendChild(td5);
      body.appendChild(tr1);
      body.appendChild(tr2);
      body.appendChild(tr3);
      body.appendChild(tr4);
      body.appendChild(tr5);
      table.appendChild(body);
      return table;
    }
  }, {
    key: "createGraph",
    value: function createGraph(container) {
      if (!mx.mxClient.isBrowserSupported()) {
        return mx.mxUtils.error('Browser is not supported!', 200, false);
      }

      mx.mxEvent.disableContextMenu(container);
      this._graph = new mx.mxGraph(container); // Overridden to define per-shape connection points

      mx.mxGraph.prototype.getAllConnectionConstraints = function (terminal, source) {
        if (terminal != null && terminal.shape != null) {
          if (terminal.shape.stencil != null) {
            if (terminal.shape.stencil != null) {
              return terminal.shape.stencil.constraints;
            }
          } else if (terminal.shape.constraints != null) {
            return terminal.shape.constraints;
          }
        }

        return null;
      };

      mx.mxShape.prototype.constraints = [new mx.mxConnectionConstraint(new mx.mxPoint(0.25, 0), true), new mx.mxConnectionConstraint(new mx.mxPoint(0.5, 0), true), new mx.mxConnectionConstraint(new mx.mxPoint(0.75, 0), true), new mx.mxConnectionConstraint(new mx.mxPoint(0, 0.25), true), new mx.mxConnectionConstraint(new mx.mxPoint(0, 0.5), true), new mx.mxConnectionConstraint(new mx.mxPoint(0, 0.75), true), new mx.mxConnectionConstraint(new mx.mxPoint(1, 0.25), true), new mx.mxConnectionConstraint(new mx.mxPoint(1, 0.5), true), new mx.mxConnectionConstraint(new mx.mxPoint(1, 0.75), true), new mx.mxConnectionConstraint(new mx.mxPoint(0.25, 1), true), new mx.mxConnectionConstraint(new mx.mxPoint(0.5, 1), true), new mx.mxConnectionConstraint(new mx.mxPoint(0.75, 1), true)];
      mx.mxPolyline.prototype.constraints = null;
      new mx.mxRubberband(this._graph);

      this._graph.addListener(mx.mxEvent.CELLS_ADDED, function (sender, evt) {
        var _this = this;

        var cells = evt.getProperty('cells');

        if (cells != null && cells.length > 0) {
          cells.forEach(function (cell) {
            if (_this._cells[cell.id]) {
              return;
            }

            _this._cells[cell.id] = cell;

            _this._dataModel.graph.push({
              cell: cell
            });
          });
        }
      }.bind(this));

      this._graph.isHtmlLabel = function (cell) {
        return true;
      };

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
  }, {
    key: "renderGraph",
    value: function renderGraph() {
      var _this2 = this;

      if (this.diagramDiv == null) {
        return;
      }

      this._dataModel = this.props.data;

      var parent = this._graph.getDefaultParent();

      this._graph.getModel().beginUpdate(); //remove old


      try {
        this._dataModel.graph.forEach(function (node) {
          if (node.value && node.id) {
            if (_this2._cells[node.id] && JSON.stringify(_this2._cells[node.id].value) === JSON.stringify(node.value)) {
              return;
            }

            switch (node.style) {
              case "HENode":
              case "swimlane":
                if (_this2._cells[node.id]) {
                  node.geometry.x = _this2._cells[node.id].geometry.x;
                  node.geometry.y = _this2._cells[node.id].geometry.y; //this._graph.removeCells([this._cells[node.id]], true);

                  _this2._cells[node.id].value = node.value;

                  _this2._graph.getModel().setValue(_this2._cells[node.id], node.value);
                } else {
                  _this2._cells[node.id] = _this2._graph.insertVertex(parent, node.id, node.value, node.geometry.x, node.geometry.y, node.geometry.width, node.geometry.height, node.style);
                }

                break;

              case "edge":
                _this2._cells[node.id] = _this2._graph.insertEdge(parent, node.id, node.value, _this2._cells[node.source], _this2._cells[node.target], node.edgeParams);
                break;

              default:
                break;
            }
          }
        });
      } finally {
        this._graph.getModel().endUpdate(); // Updates the display

      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      this.renderGraph();
      return React.createElement("div", {
        style: {
          height: "auto",
          width: "auto"
        }
      }, React.createElement("div", {
        ref: function ref(c) {
          return _this3.diagramDiv = c;
        },
        style: {
          height: "auto",
          width: "auto",
          backgroundRepeat: 'repeat',
          backgroundImage: "url(".concat(grid, ")")
        }
      }));
    }
  }]);

  return Hawkeyes;
}(React.Component);

export default Hawkeyes;