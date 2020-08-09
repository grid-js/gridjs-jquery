/// <reference path="../src/jquery.d.ts"/>

import { Grid } from "gridjs";

const flushPromises = () => new Promise(setImmediate);

describe("wrapper", () => {
  it("should call the render method", () => {
    document.body.innerHTML = '<div id="wrapper"></div>';

    const grid = jest.spyOn(Grid.prototype, "render");

    $("div#wrapper").Grid({
      data: [[1, 2, 3]],
    });

    expect(grid).toBeCalled();
  });

  it("should render the table", async () => {
    document.body.innerHTML = '<div id="wrapper"></div>';

    $("div#wrapper").Grid({
      data: [[1, 2, 3]],
    });

    await flushPromises();

    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it("should render a table with custom headers", async () => {
    document.body.innerHTML = '<div id="wrapper"></div>';

    $("div#wrapper").Grid({
      data: [[1, 2, 3]],
      columns: [
        "a",
        "b",
        {
          name: "c",
          width: "200px",
        },
      ],
    });

    await flushPromises();

    expect(document.body.innerHTML).toMatchSnapshot();
  });

  it("should convert the existing table", async () => {
    document.body.innerHTML =
      '<div id="wrapper">' +
      '<table id="myTable">' +
      "<thead><tr><th>Name</th><th>Age</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>john</td><td>25</td></tr>" +
      "<tr><td>mark</td><td>55</td></tr>" +
      "<tr><td>oj</td><td>420</td></tr>" +
      "</tbody>" +
      "</table>" +
      "</div>";

    $("table#myTable").Grid();

    await flushPromises();

    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
