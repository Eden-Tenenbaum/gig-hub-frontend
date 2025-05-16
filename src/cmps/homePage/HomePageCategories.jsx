import ProgIcon from '../../../public/img/icons/prog-tech-icon.svg'
import GraphicsIcon from '../../../public/img/icons/graphics-design-icon.svg'
import DigiMarketingIcon from '../../../public/img/icons/digital-marketing-icon.svg'
import WritingIcon from '../../../public/img/icons/writing-translation-icon.svg'
import VidAnimationIcon from '../../../public/img/icons/video-animation-icon.svg'
import AIServiceIcon from '../../../public/img/icons/ai-services-icon.svg'
import MusicIcon from '../../../public/img/icons/music-audio-icon.svg'
import BusinessIcon from '../../../public/img/icons/business-icon.svg'
import ConsultingIcon from '../../../public/img/icons/consulting-icon.svg'

import { useNavigate } from 'react-router'

const fiverrHomePageCategories = [
    { name: "Programming & Tech", id: "programming-tech", icon: ProgIcon },
    { name: "Graphics & Design", id: "graphics-design", icon: GraphicsIcon },
    { name: "Digital Marketing", id: "digital-marketing", icon: DigiMarketingIcon },
    { name: "Writing & Translation", id: "writing-translation", icon: WritingIcon },
    { name: "Video & Animation", id: "video-animation", icon: VidAnimationIcon },
    { name: "AI Services", id: "ai-services", icon: AIServiceIcon },
    { name: "Music & Audio", id: "music-audio", icon: MusicIcon },
    { name: "Business", id: "business", icon: BusinessIcon },
    { name: "Consulting", id: "consulting", icon: ConsultingIcon },
];

export function HomePageCategories() {
    const navigate = useNavigate()
    
    return (
        <section className="homepage-categories">
            {fiverrHomePageCategories.map(category =>
                <section key={category.id}>
                    <a onClick={() => navigate('/gig', { state: { category } })}>
                        <div>
                            <img src={category.icon} />
                        </div>
                        <p>{category.name}</p>
                    </a>
                </section>
            )}
        </section>
    )
}