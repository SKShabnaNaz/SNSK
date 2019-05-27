var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as jquery from 'jquery';
import styles from './ReactGetItems.module.scss';
var ReactGetItems = /** @class */ (function (_super) {
    __extends(ReactGetItems, _super);
    function ReactGetItems(props, state) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            status: 'Ready',
            items: []
        };
        return _this;
    }
    ReactGetItems.prototype.componentDidMount = function () {
        //debugger; 
        var reactHandler = this;
        //alert("did mount:"+this.props.siteurl)
        jquery.ajax({
            url: this.props.siteurl + "/_api/web/lists/getbytitle('Employee')/items",
            type: "GET",
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
                alert("success:" + resultData.d.results);
                console.log(resultData.d.results);
                reactHandler.setState({
                    items: resultData.d.results
                });
                /*if(resultData.d.results > 0)
                {
                  resultData.d.results.forEach(function(item)
                  alert(item.Author.Title);
                  )
                }*/
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    };
    ReactGetItems.prototype.render = function () {
        return (React.createElement("div", { className: styles.panelStyle },
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("div", { className: styles.tableCaptionStyle }, " Demo : Retrieve SharePoint List Items using SPFx , REST API  & React JS  "),
            React.createElement("br", null),
            React.createElement("div", { className: styles.headerCaptionStyle }, " Employee Details"),
            React.createElement("div", { className: styles.tableStyle },
                React.createElement("div", { className: styles.headerStyle },
                    React.createElement("div", { className: styles.CellStyle }, " ID"),
                    React.createElement("div", { className: styles.CellStyle }, "Title"),
                    React.createElement("div", { className: styles.CellStyle }, "EMP Name "),
                    React.createElement("div", { className: styles.CellStyle }, "EMP Number "),
                    React.createElement("div", { className: styles.CellStyle }, "Created"),
                    React.createElement("div", { className: styles.CellStyle }, "Created By")),
                this.state.items.map(function (item, key) {
                    return (React.createElement("div", { className: styles.rowStyle, key: key },
                        React.createElement("div", { className: styles.CellStyle }, item.Id),
                        React.createElement("div", { className: styles.CellStyle }, item.Title),
                        React.createElement("div", { className: styles.CellStyle }, item.EName),
                        React.createElement("div", { className: styles.CellStyle }, item.ENum),
                        React.createElement("div", { className: styles.CellStyle }, item.Created),
                        React.createElement("div", { className: styles.CellStyle }, item.EditorId)));
                }))));
    };
    return ReactGetItems;
}(React.Component));
export default ReactGetItems;
//# sourceMappingURL=ReactGetItems.js.map