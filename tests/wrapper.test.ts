/// <reference path="../src/jquery.d.ts"/>

import { Grid } from 'gridjs';

describe('wrapper', () => {
  it('should call the render method', () => {
    document.body.innerHTML = '<div id="wrapper"></div>';

    const grid = jest.spyOn(Grid.prototype, 'render');

    $('div#wrapper').Grid({
      data: [[1, 2, 3]]
    });

    expect(grid).toBeCalled();
  });

  it('should render the table', () => {
    document.body.innerHTML = '<div id="wrapper"></div>';

    $('div#wrapper').Grid({
      data: [[1, 2, 3]]
    });

    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
