/// <reference path="jquery.d.ts"/>
import { Grid, UserConfig } from "gridjs";
import $ from "jquery";

$.fn.Grid = function (userConfig?: UserConfig) {
  userConfig = userConfig || {};
  let container = $(this).get(0);

  if (container.tagName.toLowerCase() === "table" && !userConfig["from"]) {
    const table = container;

    // load data from the table
    userConfig["from"] = table;

    // add a new element _after_ the existing table
    // and use this as the Grid.js container
    const newContainer = $("<div></div>");
    $(newContainer).insertAfter(table);
    container = newContainer.get(0);
  }

  return new Grid(userConfig).render(container);
};
