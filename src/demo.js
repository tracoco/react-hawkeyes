export default {
    "graph": [
        {
            "value": "Upstream Data Sources",
            "geometry": {
                "x": 10,
                "y": 10,
                "width": 800,
                "height": 160,
                "relative": false,
                "TRANSLATE_CONTROL_POINTS": true,
                "alternateBounds": null,
                "sourcePoint": null,
                "targetPoint": null,
                "points": null,
                "offset": null
            },
            "id": "10",
            "vertex": true,
            "style": "swimlane",
            "connectable": true,
            "source": null,
            "target": null,
            "mxObjectId": "mxCell#0"
        },
        {
            "value": "Processing",
            "geometry": {
                "x": 10,
                "y": 170,
                "width": 800,
                "height": 160,
                "relative": false,
                "TRANSLATE_CONTROL_POINTS": true,
                "alternateBounds": null,
                "sourcePoint": null,
                "targetPoint": null,
                "points": null,
                "offset": null
            },
            "id": "11",
            "vertex": true,
            "style": "swimlane",
            "connectable": true,
            "source": null,
            "target": null,
            "mxObjectId": "mxCell#1"
        },        
        {
            "value": {
                "title": "Trading Venue",
                "subtitle": "Sample data",
                "out": 331,
                "status": "healthy",
                "url": "https://google.com"
            },
            "geometry": {
                "x": 90,
                "y": 40,
                "width": 200,
                "height": 98,
                "relative": false,
                "TRANSLATE_CONTROL_POINTS": true,
                "alternateBounds": null,
                "sourcePoint": null,
                "targetPoint": null,
                "points": null,
                "offset": null
            },
            "id": "12",
            "style": "HENode",
            "vertex": true,
            "connectable": true,
            "parent": "10",
            "source": null,
            "target": null,
            "mxObjectId": "mxCell#2"
        },
        {
            "value": {
                "title": "Adaptor",
                "subtitle": "Pre-processing",
                "in": 332,
                "out": 331,
                "status": "healthy",
                "url": "https://google.com"
            },
            "geometry": {
                "x": 500,
                "y": 40,
                "width": 200,
                "height": 98,
                "relative": false,
                "TRANSLATE_CONTROL_POINTS": true,
                "alternateBounds": null,
                "sourcePoint": null,
                "targetPoint": null,
                "points": null,
                "offset": null
            },
            "id": "13",
            "style": "HENode",
            "vertex": true,
            "connectable": true,
            "parent": "10",
            "source": null,
            "target": null,
            "mxObjectId": "mxCell#3"
        },
        {
            "style": "edge",
            "value": "Polling",
            "geometry": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0,
                "relative": true
            },
            "id": "14",
            "edge": true,
            "parent": "12",
            "source": "12",
            "target": "13",
            "mxObjectId": "mxCell#4"
        },
        {
            "value": {
                "title": "Routing",
                "subtitle": "Dedicated route",
                "in": 332,
                "out": 331,
                "status": "healthy"
            },
            "geometry": {
                "x": 500,
                "y": 40,                
                "width": 200,
                "height": 98,
                "relative": false,
                "TRANSLATE_CONTROL_POINTS": true,
                "alternateBounds": null,
                "sourcePoint": null,
                "targetPoint": null,
                "points": null,
                "offset": null
            },
            "id": "15",
            "style": "HENode",
            "vertex": true,
            "connectable": true,
            "parent": "11",
            "source": null,
            "target": null,
            "mxObjectId": "mxCell#5"
        },
        {
            "value": "Routing",
            "style": "edge",
            "geometry": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0,
                "relative": true
            },
            "id": "16",
            "edge": true,
            "parent": "15",
            "source": "13",
            "target": "15",
            "mxObjectId": "mxCell#8"
        },
        {
            "value": {
                "title": "Transform",
                "subtitle": "Nomalization",
                "in": 332,
                "status": "healthy",
                "tooltip": "Total 1223 recorded are processed."
            },
            "geometry": {
                "x": 90,
                "y": 40,
                "width": 200,
                "height": 98,
                "relative": false,
                "TRANSLATE_CONTROL_POINTS": true,
                "alternateBounds": null,
                "sourcePoint": null,
                "targetPoint": null,
                "points": null,
                "offset": null
            },
            "id": "17",
            "style": "HENode",
            "vertex": true,
            "connectable": true,
            "parent": "11",
            "source": null,
            "target": null,
            "mxObjectId": "mxCell#6"
        },
        {
            "style": "edge",
            "value": "Push",
            "geometry": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0,
                "relative": true
            },
            "id": "18",
            "edge": true,
            "parent": "16",
            "source": "15",
            "target": "17",
            "mxObjectId": "mxCell#7"
        },
        {
            "style": "edge",
            "value": "Push",
            "geometry": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0,
                "relative": true
            },
            "id": "19",
            "edge": true,
            "edgeParams": "exitX=1;exitY=0.25;entryX=0;entryY=0.25",
            "parent": "16",
            "source": "17",
            "target": "15",
            "mxObjectId": "mxCell#8"
        }
    ]
}
      