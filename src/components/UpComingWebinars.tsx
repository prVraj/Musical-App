"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link"
import { Button } from "./ui/moving-border"

function UpComingWebinars() {


    const featuredWebinars = [
        {
          title: 'Raga Theory Fundamentals',
          description: 'Explore the core concepts of Indian ragas and their musical structure.',
          slug: 'raga-theory-fundamentals',
          isFeatured: true,
        },
        {
          title: 'Composing Bhajans and Kirtans',
          description: 'Learn the traditional art of composing devotional music with bhajans and kirtans.',
          slug: 'composing-bhajans-kirtans',
          isFeatured: true,
        },
        {
          title: 'Mastering Classical Instruments',
          description: 'Advanced techniques to excel in classical Indian instruments like sitar and tabla.',
          slug: 'mastering-classical-instruments',
          isFeatured: true,
        },
        {
          title: 'Indian Music Production Essentials',
          description: 'Get started with Indian classical and fusion music production techniques.',
          slug: 'indian-music-production-essentials',
          isFeatured: true,
        },
        {
          title: 'Live Hindustani Performance Techniques',
          description: 'Boost your live performance skills with traditional Hindustani techniques.',
          slug: 'live-hindustani-performance-techniques',
          isFeatured: true,
        },
        {
          title: 'Promoting Classical Music Online',
          description: 'Learn effective digital marketing strategies for Indian classical music.',
          slug: 'promoting-classical-music-online',
          isFeatured: true,
        },
      ];
      
      


  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enjoy Your Musical Journey</p>
        </div>
        <div className="mt-10">
        <HoverEffect items={featuredWebinars.map(webinar=>({
            title: webinar.title,
            description: webinar.description,
            link: webinar.slug
        }))} />
        </div>
        <div className="mt-10 text-center">
        <div className="mt-20 text-center">
        <Button className="bg-black">
          <Link href={"/courses"}>See All Webinars</Link>
        </Button>
      </div>
        </div>
      </div>
    </div>
  )
}

export default UpComingWebinars
