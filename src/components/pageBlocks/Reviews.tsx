import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Container } from "../Container";
import Card, { CardContent } from "../Card";
const Reviews = () => {
  return (
    <Container>
      <h1>See what our users think</h1>
      <Swiper
        modules={[Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop
        simulateTouch={false}
        effect={"fade"}
      >
        <SwiperSlide>
          <Card>
            <CardContent large>
              I am fascinated by note-taking, especially in Notion. However, I
              realize that in order to organize my thought process, I have to
              jot it down onto paper and indicate the location of the relevant
              content. When I try Heptabase out, <strong>I am blown away</strong> because this is
              precisely what I need and also what Notion is lacking. I've been
              using Heptabase to prep for my case interview and it's the best
              tool out there to do this in my opinion.
              <div style={{ textAlign: "right" }}>- Thu Dang</div>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardContent large>
              <strong>Heptabase has filled a pretty big gap</strong> with my stories, planning,
              that I really haven't seen any other apps fill quite as well for
              how I'd use it. Throwing a quick overview of current stories into
              the prototype gave me enough relief at being able to see their
              flow that I actually sighed after zooming out a little. I'd
              happily pay for an app that helps me fill gaps in how I work like
              this.
              <div style={{ textAlign: "right" }}>- Curio Heart</div>
            </CardContent>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
export default Reviews;
