// components/ImageSlider.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images: string[] = [
  '/index1.png',
  '/index2.png',
];

const ImageSlider: React.FC = () => {
  return (
      <div style={{ maxWidth: '800px', margin: '0 auto' }}> {/* 부모 컨테이너 크기 제한 */}
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1000}
            spaceBetween={30}
            slidesPerView={1}
        >
          {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                    src={src}
                    alt={`Slide ${index}`}
                    style={{
                      width: '100%', // 슬라이더 내부에서 가로 100%
                      height: 'auto', // 높이는 비율에 맞게 조정
                      objectFit: 'cover', // 슬라이더 크기에 맞게 이미지 비율 조정
                      borderRadius: '8px', // 이미지 모서리 둥글게 처리 (선택 사항)
                    }}
                />
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default ImageSlider;