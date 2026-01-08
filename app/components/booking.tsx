import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="w-full ">
      <InlineWidget
        styles={{ height: "700px" }}
        url="https://calendly.com/birdsoftware/meeting"
      />
    </div>
  );
};

export default Calendly;
