import React from "react";
import { shallow } from "enzyme";
import UserListCard from "./UserListCard";

describe("UserListCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserListCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
