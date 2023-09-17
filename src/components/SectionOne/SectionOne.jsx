import ImageHolder from "./ImageHolder";
import ImageCurve from "./ImageCurve";
import Content from "./Content";

export default function SectionOne() {
  return (
    <div className="mt-[30%] bg-light-greyish-blue relative grid gap-[3em] landscape:grid-cols-[1fr_0.8fr] landscape:mt-[20%] pt-[10%] landscape:pt-[5%] pb-[20%] landscape:pb-[5%]">
      <ImageHolder />
      <ImageCurve />
      <Content />
    </div>
  );
}
