import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
     User2,
     MailIcon,
     HomeIcon,
     PhoneCall,
     GraduationCap,
     Calendar,
     Award
} from "lucide-react";
import { info } from "autoprefixer";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Lahiru Kavishka',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+94 76 056 5789',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'jlavishka@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 10 Apr, 2000',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'BSc (Hons) in Software Engineering',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'No 180/8, Attanagalla Rd, Pasyala.',
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'CINEC Campus, Malabe',
                qualification: 'Bachelor of Science',
                years: '2021 - Present',
            },
            {
                university: 'Bandaranayake College, Gampaha',
                qualification: 'GCE A/L',
                years: '2017 - 2019',
            },
            {
                university: 'Bandaranayake College, Gampaha',
                qualification: 'GCE O/L',
                years: '2011 - 2016',
            },
        ]
    },
    {
        title: 'certificates',
        data: [
            {
                OfferedBy: 'Meta',
                qualification: 'React Basics',
                credential: 'VUYMG9UFP8ZA',
            },
            {
                OfferedBy: 'University of California, Davis',
                qualification: 'JavaScript Basics',
                credential: '',
            },
            {
                OfferedBy: 'Meta',
                qualification: 'Front-End Development',
                credential: '',
            },
        ]
    },
];

const skillData = [
    {
        title: 'tools',
        data: [
            { 
                imgPath: '/about/vscode.svg',
            },
            { 
                imgPath: '/about/figma.svg',
            },
            { 
                imgPath: '/about/github.svg',
            },
        ],
    },
    {
        title: 'skills',
        data: [
            {
                name: 'React.js, JavaScript, PHP, HTML5, Flutter, Dart',
            },
            {
                name: 'CSS3, Bootstrap, Tailwind CSS',
            },
            {
                name: 'Firebase, Git, GitHub',
            },{
                name: 'UI/UX design principles and tools',
            },
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item)=> item.title === title);
    };

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                About me
            </h2>
            <div className='flex flex-col xl:flex-row'>
                {/* image */}
                <div className='hidden xl:flex flex:1 relative'>
                    <DevImg 
                    containerStyles='bg_about_shape_light 
                    dark:bg-about_shape_dark w-[505px] h-[505px] 
                    bg-no-repeat relative' 
                    imgSrc='/about/developer1.png' />
                </div>
                {/* tabs */}
                <div className='flex-1'>
                    <Tabs defaultValue='personal'>
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] 
                        xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                        </TabsList>

                        {/* tabs content */}
                        <div className='text-lg mt-12 xl:mt-8 ml-auto'>
                            {/* personal */}
                            <TabsContent value='personal'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-4'>Front-End Enthusiast</h3>
                                    <p className='subtitle max-w-xl mx-auto xl:mx-20'>
                                        Highly motivated Software Engineering student with a passion for crafting beautiful and intuitive user experiences. 
                                        Skilled in web development using HTML5, CSS3, JavaScript, and React. Adept at UI/UX design leveraging Figma. 
                                        Eager to contribute to a dynamic team environment and learn from experienced professionals.
                                    </p>
                                    {/* icons */}
                                    <div className='grid xl:grid-cols-2 gap-4 mb-12 xl:mx-20'>
                                        {infoData.map((item, index)=> {
                                            return (
                                            <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                <div className='text-primary'>{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                            );
                                        })}
                                    </div>
                                    {/* languages */}
                                    <div className='flex flex-col gap-y-2 mx-20'>
                                        <div className='text-primary'>Language Skill</div>
                                        <div className="border-b border-border"></div>
                                        <div>English, Sinhala</div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/* qualifications */}
                            <TabsContent value='qualifications'>
                                <div>
                                    <h3 className='h3 mb-8 text-center xl:text-left'>
                                        My Journey
                                    </h3>
                                    {/* certificates & education wrapper */}
                                    <div className='grid md:grid-cols-2 gap-y-8'>
                                        {/* certificates */}
                                        <div className='flex flex-col gap-y-6'>
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                <Award />
                                                <h4 className='capitalize font-medium'>
                                                    {getData(qualificationData, 'certificates').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className='flex flex-col gap-y-8'>
                                                {getData(qualificationData, 'certificates').data.map((item, index)=> {
                                                    const {OfferedBy, qualification, credential} = item;
                                                    return (
                                                        <div className='flex gap-x-8 group' key={index}>
                                                            <div className='h-[84px] w-[1px] bg-border relative ml-2'>

                                                                {/* animation */}
                                                                <div className='w-[11px] h-[11px] rounded-full 
                                                                bg-primary absolute -left-[5px] 
                                                                group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-2'>{OfferedBy}</div>
                                                                <div className='text-lh leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                                <div className='text-base font-meadium'>{credential}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {/* education */}
                                        <div className='flex flex-col gap-y-6'>
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                <GraduationCap size={28} />
                                                <h4 className='capitalize font-medium'>
                                                    {getData(qualificationData, 'education').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className='flex flex-col gap-y-8'>
                                                {getData(qualificationData, 'education').data.map((item, index)=> {
                                                    const {university, qualification, years} = item;
                                                    return (
                                                        <div className='flex gap-x-8 group' key={index}>
                                                            <div className='h-[84px] w-[1px] bg-border relative ml-2'>

                                                                {/* animation */}
                                                                <div className='w-[11px] h-[11px] rounded-full 
                                                                bg-primary absolute -left-[5px] 
                                                                group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                                <div className='text-lh leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                                <div className='text-base font-meadium'>{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/* skills */}
                            <TabsContent value='skills'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-8'>What I Use to Build,</h3>
                                    {/* skills */}
                                    <div className='mb-16'>
                                        <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        {/* skills list */}
                                        <div>
                                            {getData(skillData, 'skills').data.map((item, index) => {
                                                const {name} = item;
                                                return (
                                                <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                                                    <div className='font-medium'>{name}</div>
                                                </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    {/* tools */}
                                    <div>
                                        <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        {/* tool list */}
                                        <div className='flex gap-x-8 justify-center xl:justify-start'>
                                            {getData(skillData, 'tools').data.map((item, index)=> {
                                                const {imgPath} = item;
                                                return (
                                                    <div key={index}>
                                                        <Image 
                                                            src={imgPath} 
                                                            width={48} 
                                                            height={48} 
                                                            alt='' 
                                                            priority />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
