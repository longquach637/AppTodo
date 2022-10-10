import { shallow } from "enzyme";
import Saga1 from "./Saga_index";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe("test component <Saga_index>", () => {
  const container = shallow(<Saga1 />);
  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });
});
