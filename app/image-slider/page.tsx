import ImageSlider from "@/components/ImageSlider";

const ImagesliderPage = () => {
    return ( 
        <div>
            <ImageSlider url={"https://picsum.photos/v2/list?page=1&limit=10"} limit="10"/>
        </div>
     );
}
 
export default ImagesliderPage;