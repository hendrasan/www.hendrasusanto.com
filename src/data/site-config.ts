export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    latestPostsAmount?: number;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://www.hendrasusanto.com',
    title: 'Hendra Susanto - Web Developer',
    subtitle: '',
    description: 'Hendra Susanto - A web developer with 10+ years of experience in front-end and back-end development',
    image: {
        src: '/og.jpg',
        alt: 'Hendra Susanto - Web Developer'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [],
    socialLinks: [
        {
            text: 'CV',
            href: '/cv'
        }
    ],
    hero: {
        title: '',
        text: '',
        image: {
            src: '',
            alt: ''
        }
        // actions: [
        //     {
        //         text: 'Get in Touch',
        //         href: '/contact'
        //     }
        // ]
    },
    subscribe: {
        title: '',
        text: '',
        formUrl: '#'
    },
    latestPostsAmount: 5,
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
