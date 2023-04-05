import * as React from "react";
import { AirbnbRating } from "@rneui/base";

export default function Ratings ()  {
  return (
    <AirbnbRating
      count={5}
      defaultRating={1}
      reviews={[
        "Terrible",
        "Bad",
        "Okay",
        "Good",
        "Great"
      ]}
      onFinishRating={() =>
        console.log("onFinishRating()")
      }
      showRating
    />
  );
}