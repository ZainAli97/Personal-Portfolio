export interface NavigationDotsProps {
    active: string;
}

export interface AboutProps {
    _type: string;
    imgUrl: string | any;
    title: string;
    description: string;
}

export interface Testimonials {

}


export interface TestimonialsProps {
    handleClicked?: (index: number) => void;
    imgurl: string;
    feedback: string;
    name: string;
    company: string;
}

export interface TestimonialsBrandsProps {
    imgUrl: string;
    _id: number;
    name: string;
}

export interface AboutProps {
    title: string;
    imgUrl: string | any;
    description: string;
}

export interface SkillsProps {
    name: string;
    icon: string;
    bgColor: string;
    year: string;
    works: any;
}

export interface filterWorkProps {
    name: string;
    projectLink: string;
    codeLink: string;
    title: string;
    tags: number[] | string;
    description: string;
    imgUrl: string | any;
}

export interface animateCardProps {
    y: number | any;
    opacity: number;
}

export interface MotionWrapProps {
    Component: React.FC;
    classNames: string;
}