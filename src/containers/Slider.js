import React, { Component, Fragment } from "react";
import Slide from "../components/Slide";
import { Pagination, Button, Flex } from "../components/SliderStyle";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: [
        {
          id: "1",
          image:
            "https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/d4f217b2-4001-4df5-bef8-0b026ec133fe/IN-en-20221031-popsignuptwoweeks-perspective_alpha_website_large.jpg",
          text: "Netflix landing page"
        },
        {
          id: "2",
          image:
            "https://images.ctfassets.net/4cd45et68cgf/2I1iWx5wmGph8qXaIWUdGy/0bee4d7a51048e9685f9aec50f20b795/Android_Collage_1080x1080_APAC_Singapore_En.jpg",
          text: "About Netflix"
        },
        {
          id: "3",
          image:
            "https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/d4f217b2-4001-4df5-bef8-0b026ec133fe/IN-en-20221031-popsignuptwoweeks-perspective_alpha_website_large.jpg",
          text: "Account sign in page"
        }
      ],
      currentIndex: 0
    };
  }

  previousState = () => {
    const { slide, currentIndex } = this.state;
    if (currentIndex === 0) {
      return this.setState({ currentIndex: slide.length - 1 });
    }
    this.setState({ currentIndex: currentIndex - 1 });
  };

  nextState = () => {
    const { currentIndex, slide } = this.state;
    if (currentIndex === slide.length - 1) {
      return this.setState({ currentIndex: 0 });
    }
    this.setState({ currentIndex: currentIndex + 1 });
  };

  indexSlide = (info) => {
    const { id } = info;
    this.setState({ currentIndex: id - 1 });
  };

  render() {
    const { slide, currentIndex } = this.state;
    return (
      <Fragment>
        <Slide key={slide[currentIndex].id} info={slide[currentIndex]} />
        <Flex background>
          {slide.map((v) => {
            let bgColor = "white";
            if (currentIndex + 1 === +v.id) {
              bgColor = "orange";
            }
            return (
              <Pagination
                key={v.id}
                bgColor={bgColor}
                onClick={() => this.indexSlide(v)}
              />
            );
          })}
        </Flex>
        <Flex>
          <Button onClick={this.previousState}>Previous</Button>
          <Button onClick={this.nextState}>Next</Button>
        </Flex>
      </Fragment>
    );
  }
}

export default Slider;
