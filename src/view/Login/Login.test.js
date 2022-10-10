import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow } from "enzyme";
import { reduce } from "lodash";
import React from "react";
import Login from "./Login";

configure({ adapter: new Adapter() });

describe("<Login /> with no props", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should find input", () => {
    expect(wrapper.find("#my-2").length).toEqual(1);
  });

  afterEach(() => {
    wrapper.unmount();
  });
});

describe("Counter Testing", () => {
  let wrapper;
  let state;
  beforeEach(() => {
    wrapper = shallow(<Login />);
    state = {
      counter: 0,
    };
  });

  test("render the title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });

  test("render a button with text of `increment`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    expect(Number(wrapper.find("#counter-value").text())).toBe(state.counter);
  });

  test("render the click event of increace button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");

    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  afterEach(() => {
    wrapper.unmount();
  });
});
