import React from "react";
import { shallow } from "enzyme";
import UploadButton from "./UploadButton";

describe("UploadButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UploadButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
