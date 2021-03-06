sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
	"use strict";

	var Component = UIComponent.extend("sap.uxap.sample.AnchorBarNoPopover.Component", {
		metadata: {
			rootView: {
				"viewName": "sap.uxap.sample.AnchorBarNoPopover.AnchorBarNoPopover",
				"type": "XML",
				"async": true
			},
			dependencies: {
				libs: [
					"sap.m"
				]
			},
			config: {
				sample: {
					stretch: true,
					files: [
						"AnchorBarNoPopover.view.xml",
						"../SharedBlocks/BlockBlue.js",
						"../SharedBlocks/BlockBlue.view.xml"
					]
				}
			}
		}
	});

	return Component;
}, true);
