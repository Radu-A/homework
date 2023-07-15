import React from "react";
import { shallow } from "enzyme";
import DeleteButton from "./DeleteButton";

describe("DeleteButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DeleteButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
