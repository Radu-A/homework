import React from "react";
import { shallow } from "enzyme";
import HeaderProject from "./HeaderProject";

describe("HeaderProject", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HeaderProject />);
    expect(wrapper).toMatchSnapshot();
  });
});
