import WebsiteDevelopment from '../../public/popservice/website-development.webp';
import VideoEditing from '../../public/popservice/video-editing.webp';
import SoftwareDevelopment from '../../public/popservice/software-development.webp';
import SEO from '../../public/popservice/seo.webp';
import ArchitectureInteriorDesign from '../../public/popservice/architecture-design.webp';
import BookDesign from '../../public/popservice/book-design.webp';
import UGCVideos from '../../public/popservice/ugc-videos.webp';
import VoiceOver from '../../public/popservice/voice-over.webp';
import SocialMediaMarketing from '../../public/popservice/social-media-marketing.webp';
import AIDevelopment from '../../public/popservice/ai-development.webp';
import LogoDesign from '../../public/popservice/logo-design.png';
import WebsiteDesign from '../../public/popservice/website-design.webp';

import { useNavigate } from 'react-router';

// import tester from '../../public/img/react.svg'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// const CustomRightArrow = ({ onClick }) => {
//     return <img src={tester} onClick={() => onClick()} />
//   }

const popularServices = [
    {
        id: 'website-development',
        name: 'Website Development',
        img: WebsiteDevelopment
    },
    {
        id: 'video-editing',
        name: 'Video Editing',
        img: VideoEditing
    },
    {
        id: 'software-development',
        name: 'Software Development',
        img: SoftwareDevelopment
    },
    {
        id: 'seo',
        name: 'SEO',
        img: SEO
    },
    {
        id: 'architecture-interior-design',
        name: 'Architecture & Interior Design',
        img: ArchitectureInteriorDesign
    },
    {
        id: 'book-design',
        name: 'Book Design',
        img: BookDesign
    },
    {
        id: 'ugc-videos',
        name: 'UGC Videos',
        img: UGCVideos
    },
    {
        id: 'voice-over',
        name: 'Voice Over',
        img: VoiceOver
    },
    {
        id: 'social-media-marketing',
        name: 'Social Media Marketing',
        img: SocialMediaMarketing
    },
    {
        id: 'ai-development',
        name: 'AI Development',
        img: AIDevelopment
    },
    {
        id: 'logo-design',
        name: 'Logo Design',
        img: LogoDesign
    },
    {
        id: 'website-design',
        name: 'Website Design',
        img: WebsiteDesign
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 6 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
}

const small = 15

export function PopularServices() {
    const navigate = useNavigate()

    return (
        <section className="homepage-popular-services">
            <p className='popular-services-header'>Popular services</p>
            <Carousel responsive={responsive}>
                {popularServices.map(category =>
                    <section key={category.id}>
                        <div 
                        className={category.name.length <= small ? 'small' : ''}
                        onClick={() => navigate(`explore/${category.id}`)}
                        >
                            <p>{category.name}</p>
                            <div>
                                <img src={category.img} />
                            </div>
                        </div>
                    </section>
                )}
            </Carousel>
        </section>
    )
}