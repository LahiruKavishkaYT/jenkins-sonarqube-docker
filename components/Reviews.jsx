'use client';
import Image from "next/image";
import { 
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
 } from "./ui/card";

import{ Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

const reviewData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'not_spence',
        job: 'Fiverr',
        review: 'Communicative and professional seller. lamba responded quickly, got started with no issues and completed the task before deadlines. highly recommend 10/10'
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Donald A',
        job: 'Fiverr',
        review: '10/10 he works nice and quick will use his service again soon!'
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Valter Antunes',
        job: 'Fiverr',
        review: 'Great and fast Job 😊 Im very happy to work with him in the future 🙏🏼😊 Thanks to your great effort and work Brother!'
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: 'not_spence',
        job: 'Fiverr',
        review: 'Communicative and professional seller. lamba responded quickly, got started with no issues and completed the task before deadlines. highly recommend 10/10'
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Donald A',
        job: 'Fiverr',
        review: '10/10 he works nice and quick will use his service again soon!'
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Valter Antunes',
        job: 'Fiverr',
        review: 'Great and fast Job 😊 Im very happy to work with him in the future 🙏🏼😊 Thanks to your great effort and work Brother!'
    },
]


const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
        <div className="container mx-auto">
            <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
            {/* slider */}
            <Swiper slidesPerView={1} breakpoints={{
                640: {slidesPerView: 2 },
                1400: {slidesPerView: 3 },
        }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
                clickable: 'true'
            }}
            className='h-[350px]'
        >
                {reviewData.map((person, index)=> {
                    return (
                    <SwiperSlide key={index}>
                        <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                            <CardHeader className='p-0 mb-10'>
                                <div className='flex items-center gap-x-4'>
                                    {/* image */}
                                    <Image 
                                        src={person.avatar} 
                                        width={70} 
                                        height={70} 
                                        alt='' 
                                        priority />
                                        {/* name */}
                                        <div className='flex flex-col'>
                                            <CardTitle>{person.name}</CardTitle>
                                            <p>{person.job}</p>
                                        </div>
                                </div>
                            </CardHeader>
                            <CardDescription className='text-lg text-muted-foreground'>
                                {person.review}
                            </CardDescription>
                        </Card>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews
