import React from "react";
import { shallow } from "enzyme";
import SearchCard from "./SearchCard";

describe("SearchCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SearchCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
