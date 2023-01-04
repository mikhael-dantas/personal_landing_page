import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Subscribe from '../components/Subscribe';
import VideoCard from '../components/VideoCard';

export default function Home() {
  return (
      <>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Mikhael Dantas
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                5+ years proggraming and improving
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Every challenge is an opportunity to learn and improve. I'm
                passionate about programming and I'm always looking for
                ways to advance.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="mikhael dantas"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white mt-8">
            Developer technologies skillset
          </h3>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            <span className="text-green-600 dark:text-green-400">Language:</span>{' '}
            JavaScript
            <br />
            <span className="text-green-600 dark:text-green-400">Language:</span>{' '}
            TypeScript
            <br />
            <span className="text-green-600 dark:text-green-400">Language:</span>{' '}
            Ruby
            <br />
          </h2>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            <span className="text-gray-600 dark:text-blue-400 mt-6">Devops:</span>{' '}
            Docker
            <br />
            <span className="text-gray-600 dark:text-blue-400">Devops:</span>{' '}
            Docker Compose
            <br />
            <span className="text-gray-600 dark:text-blue-400">Devops:</span>{' '}
            DockerSwarm
            <br />
          </h2>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            <span className="text-gray-600 dark:text-red-400 mt-6">Version Control:</span>{' '}
            Git
            <br />
          </h2>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            <span className="text-gray-600 dark:text-gray-400 mt-6">System:</span>{' '}
            Linux
            <br />
          </h2>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            <span className="text-gray-600 dark:text-yellow-400 mt-6">Practice/Pattern:</span>{' '}
            CI/CD
            <br />
            <span className="text-gray-600 dark:text-yellow-400">Practice/Pattern:</span>{' '}
            TDD
            <br />
            <span className="text-gray-600 dark:text-yellow-400">Practice/Pattern:</span>{' '}
            SOLID
            <br />
            <span className="text-gray-600 dark:text-yellow-400">Practice/Pattern:</span>{' '}
            Clean Code
            <br />
            <span className="text-gray-600 dark:text-yellow-400">Practice/Pattern:</span>{' '}
            SCRUM
            <br />
          </h2>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            <span className="text-gray-600 dark:text-pink-400 mt-6">Database:</span>{' '}
            PostgreSQL
            <br />
            <span className="text-gray-600 dark:text-pink-400">Database:</span>{' '}
            MySQL
            <br />
            <span className="text-gray-600 dark:text-pink-400">Database:</span>{' '}
            MongoDB
            <br />
            <span className="text-gray-600 dark:text-pink-400">Database:</span>{' '}
            Redis
            <br />
          </h2>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            <span className="text-gray-600 dark:text-purple-400 mt-6">Experience:</span>{' '}
            NodeJS
            <br />
            <span className="text-gray-600 dark:text-purple-400">Experience:</span>{' '}
            REST API 
            <br />
            <span className="text-gray-600 dark:text-purple-400">Experience:</span>{' '}
            GraphQL
            <br />
            <span className="text-gray-600 dark:text-purple-400">Experience:</span>{' '}
            React
            <br />
            <span className="text-gray-600 dark:text-purple-400">Experience:</span>{' '}
            NextJS
            <br />
            <span className="text-gray-600 dark:text-purple-400">Experience:</span>{' '}
            NestJS
            <br />
            <span className="text-gray-600 dark:text-purple-400">Experience:</span>{' '}
            Express
            <br />
          </h2>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white mt-16">
            Featured Repositories
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            <BlogPostCard
              title="An E-commerce frontend super simplified that consumes a GraphQL API"
              slug="e_commerce_simplified_frontend"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="A platform to turn the business model features into Automated Tests"
              slug="e_commerce_simplified_front"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <BlogPostCard
              title="A GraphQL API to manage an E-commerce"
              slug="e_commerce_simplified_api"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
          </div>
          <Link
            target={'blank'}
            href="https://www.github.com/mikhael-dantas"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'See github profile'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Formations and Espertises
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            As a self-taught developer, I have been studying and practicing
            programming for 6 years. Part of my journey was dedicated to
            establishing a solid foundation in computer science and software
            development, understanding the best practices and patterns, as
            well as the most modern technologies and frameworks avaliable.
            <br />
            <br />
            Here's some parts of my journey:
          </p>
          <VideoCard
            index="01"
            href="https://en.wikipedia.org/wiki/Computer_science"
            length=">>"
            title="Student of Computer Science at FMU"
          />
          <VideoCard
            index="02"
            href="https://lp.rocketseat.com.br/ignite"
            length=">>"
            title="Completed Back-end Node JS formation at Rocketseat in Ignite program"
          />
          <VideoCard
            index="03"
            href="https://www.hackerrank.com/mikhael_dcs"
            length=">>"
            title="Certified skills at HackerRank"
          />
          <span className="h-16" />
          <Subscribe />
        </div>
      </>
  );
}
