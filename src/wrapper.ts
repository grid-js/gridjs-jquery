/// <reference path="jquery.d.ts"/>
import {Grid, UserConfig} from 'gridjs';
import $ from 'jquery';

$.fn.Grid = function (userConfig?: UserConfig) {
  const container = $(this);
  const grid = new Grid(userConfig);
  grid.render(container.get(0))
}