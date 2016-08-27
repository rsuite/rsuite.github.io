/*! Last update: Sat Aug 27 2016 17:35:48 GMT+0800 (CST) */
webpackJsonp([3],{357:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(3),a=o(u),d=n(254),l=n(338),r=o(l),c=n(335),f={basic:'var instance = (\n    <ButtonGroup>\n        <Button shape="default">Left</Button>\n        <Button shape="default">Middle</Button>\n        <Button shape="default">Right</Button>\n    </ButtonGroup>\n);\nReactDOM.render(instance, mountNode);\n',checkbox:'var instance = (\n    <ButtonGroup type=\'checkbox\'>\n        <Button shape="default">Checkbox</Button>\n        <Button shape="default">Checkbox</Button>\n        <Button shape="default">Checkbox</Button>\n    </ButtonGroup>\n);\nReactDOM.render(instance, mountNode);\n',radio:'var instance = (\n    <ButtonToolbar>\n        <ButtonGroup type=\'radio\'>\n            <Button shape="default">Radio</Button>\n            <Button shape="default">Radio</Button>\n            <Button shape="default">Radio</Button>\n        </ButtonGroup>\n    </ButtonToolbar>\n);\nReactDOM.render(instance, mountNode);\n',toolbar:'var instance = (\n    <ButtonToolbar>\n        <Button shape="default">Prev</Button>\n        <ButtonGroup >\n            <Button shape="default">1</Button>\n            <Button shape="default">2</Button>\n            <Button shape="default">3</Button>\n            <Button shape="default">4</Button>\n            <Button shape="default">5</Button>\n        </ButtonGroup>\n        <Button shape="default">Next</Button>\n    </ButtonToolbar>\n);\nReactDOM.render(instance, mountNode);\n',vertical:'var instance = (\n    <ButtonGroup vertical>\n        <Button shape="default">Top</Button>\n        <Button shape="default">Middle</Button>\n        <Button shape="default">Bottom</Button>\n    </ButtonGroup>\n);\nReactDOM.render(instance, mountNode);\n',block:'var instance = (\n    <ButtonGroup vertical block>\n        <Button shape="default">Top</Button>\n        <Button shape="default">Middle</Button>\n        <Button shape="default">Bottom</Button>\n    </ButtonGroup>\n);\nReactDOM.render(instance, mountNode);\n',justified:'var instance = (\n    <ButtonGroup justified>\n        <Button shape="default" href="#">Left</Button>\n        <Button shape="default" href="#">Middle</Button>\n        <Button shape="default" href="#">Right</Button>\n    </ButtonGroup>\n);\n\nReactDOM.render(instance, mountNode);\n',sizing:"const SIZES = ['lg', 'md', 'sm', 'xs'];\n\nfunction renderButtonGroup(size,index){\n    return (\n        <ButtonToolbar key={index} >\n            <ButtonGroup size={size} >\n                <Button shape=\"default\">Left</Button>\n                <Button shape=\"default\">Middle</Button>\n                <Button shape=\"default\">Right</Button>\n            </ButtonGroup>\n        </ButtonToolbar>\n    );\n}\nvar instance = (\n    <div>\n        {SIZES.map(renderButtonGroup)}\n    </div>\n);\nReactDOM.render(instance, mountNode);\n"};e["default"]=a["default"].createClass({displayName:"buttonGroups",render:function(){return a["default"].createElement(d.Col,{md:9,sm:12},a["default"].createElement("h1",{className:"page-header"},"Button Groups",a["default"].createElement("span",{className:"page-header-en"},a["default"].createElement("code",null,"ButtonGroup"),"、",a["default"].createElement("code",null,"ButtonToolbar"))),a["default"].createElement("h3",null,"默认样式"),a["default"].createElement(r["default"],{code:f.basic}),a["default"].createElement("h3",null,"单选，多选"),a["default"].createElement(d.Text,null,a["default"].createElement("code",null,"type"),"属性设置为: ",a["default"].createElement("code",null,"radio")),a["default"].createElement(r["default"],{code:f.radio}),a["default"].createElement(d.Text,null,a["default"].createElement("code",null,"type"),"属性设置为: ",a["default"].createElement("code",null,"checkbox")),a["default"].createElement(r["default"],{code:f.checkbox}),a["default"].createElement("h3",null,"大小"),a["default"].createElement(r["default"],{code:f.sizing}),a["default"].createElement("h3",null,"按钮工具栏"),a["default"].createElement(r["default"],{code:f.toolbar}),a["default"].createElement("h3",null,"垂直"),a["default"].createElement(d.Text,null,"添加属性 ",a["default"].createElement("code",null,"vertical")),a["default"].createElement(r["default"],{code:f.vertical}),a["default"].createElement(d.Text,null,"添加属性 ",a["default"].createElement("code",null,"block"),"，把按钮组设置为块级元素"),a["default"].createElement(r["default"],{code:f.block}),a["default"].createElement("h3",null,"满陈列"),a["default"].createElement(r["default"],{code:f.justified}),a["default"].createElement("h3",null,"组件属性"),a["default"].createElement(c.Markdown,null,n(358)))}})},358:function(t,e){t.exports="<table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>block</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>classPrefix</td> <td>string</td> <td>btn-group</td> <td></td> </tr> <tr> <td>justified</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>type</td> <td>one of : <code>radio</code> <code>checkbox</code></td> <td></td> <td></td> </tr> <tr> <td>vertical</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>size</td> <td>one of : <code>lg</code> <code>md</code> <code>sm</code> <code>xs</code></td> <td></td> <td></td> </tr> <tr> <td>onClick</td> <td>function</td> <td></td> <td></td> </tr> </tbody> </table>"}});