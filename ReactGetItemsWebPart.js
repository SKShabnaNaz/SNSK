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
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import * as strings from 'ReactGetItemsWebPartStrings';
import ReactGetItems from './components/ReactGetItems';
var ReactGetItemsWebPart = /** @class */ (function (_super) {
    __extends(ReactGetItemsWebPart, _super);
    function ReactGetItemsWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReactGetItemsWebPart.prototype.render = function () {
        var element = React.createElement(ReactGetItems, {
            description: this.properties.description,
            siteurl: this.context.pageContext.web.absoluteUrl
        });
        ReactDom.render(element, this.domElement);
    };
    ReactGetItemsWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(ReactGetItemsWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ReactGetItemsWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ReactGetItemsWebPart;
}(BaseClientSideWebPart));
export default ReactGetItemsWebPart;
//# sourceMappingURL=ReactGetItemsWebPart.js.map