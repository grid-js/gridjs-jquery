/// <reference path="jquery.d.ts"/>
import {Grid, UserConfig} from 'gridjs';
import $ from 'jquery';

$.fn.Grid = function (userConfig?: UserConfig) {
  new Grid(userConfig).render(this)
}