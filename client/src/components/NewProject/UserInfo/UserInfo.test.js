import React from "react";
import { shallow } from "enzyme";
import UserInfo from "./UserInfo";

describe("UserInfo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
