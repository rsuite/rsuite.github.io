/*! Last update: Sat Aug 27 2016 17:35:48 GMT+0800 (CST) */
webpackJsonp([2],{354:function(t,e,d){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=d(3),n=r(a),l=d(254),u=d(338),c=r(u),m=d(335),s={basic:'var instance = (\n    <Breadcrumb>\n        <Breadcrumb.Item href="#">\n            Home\n        </Breadcrumb.Item>\n        <Breadcrumb.Item href="#">\n            Library\n        </Breadcrumb.Item>\n        <Breadcrumb.Item active>\n            Data\n        </Breadcrumb.Item>\n    </Breadcrumb>\n);\nReactDOM.render(instance, mountNode);\n'};e["default"]=n["default"].createClass({displayName:"breadcrumbs",render:function(){return n["default"].createElement(l.Col,{md:9,sm:12},n["default"].createElement("h1",{className:"page-header"},"Breadcrumbs",n["default"].createElement("span",{className:"page-header-en"},n["default"].createElement("code",null,"Breadcrumb"),"、",n["default"].createElement("code",null,"Breadcrumb.Item"))),n["default"].createElement("h3",null,"默认样式"),n["default"].createElement(c["default"],{code:s.basic}),n["default"].createElement("h3",null,"组件属性"),n["default"].createElement(m.Markdown,null,d(355)))}})},355:function(t,e){t.exports="<table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>active</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>href</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>id</td> <td>string or number</td> <td></td> <td></td> </tr> <tr> <td>linkId</td> <td>string or number</td> <td></td> <td></td> </tr> <tr> <td>target</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>title</td> <td>string</td> <td></td> <td></td> </tr> </tbody> </table>"}});