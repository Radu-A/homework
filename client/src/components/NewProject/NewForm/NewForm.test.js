import React from "react";
import { shallow } from "enzyme";
import NewForm from "./NewForm";

describe("NewForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
