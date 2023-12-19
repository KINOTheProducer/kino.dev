'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { CardContentData } from './CardContentData';
import { useState } from 'react';

const Projects = () => {
  const projectsPerPageLG = 3;
  const projectsPerPageMD = 2;
  const [currentPage, setCurrentPage] = useState(0);

  const projectsPerPage =
    window.innerWidth < 1300
      ? projectsPerPageMD
      : projectsPerPageLG;

  const totalProjects = CardContentData.length;
  const totalPages = Math.ceil(
    totalProjects / projectsPerPage,
  );

  const handleNextPage = () => {
    setCurrentPage(
      (prevPage) => (prevPage + 1) % totalPages,
    );
  };

  const handlePrevPage = () => {
    setCurrentPage(
      (prevPage) =>
        (prevPage - 1 + totalPages) % totalPages,
    );
  };

  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  const visibleProjects = CardContentData.slice(
    startIndex,
    endIndex,
  );

  return (
    <div className='container-page'>
      <div className='flex flex-col flex-wrap gap-6 w-full'>
        <div className='w-full'>
          <h1 className='text-5xl md:text-6xl font-bold my-10 text-left'>
            projects
          </h1>
          <p className='text-left md:text-xl mb-3'>
            this is a collection of projects I have worked
            on as a developer. they range from frontend to
            backend development, as well as a mix of both,
            with fullstack development.
          </p>
          Filter by:
          <div className='flex flex-row gap-3 w-full align-center justify-center items-center my-1'>
            <Button
              color='primary'
              className='font-semibold'
            >
              Frontend
            </Button>
            <Button
              color='primary'
              className='font-semibold'
            >
              Backend
            </Button>
            <Button
              color='primary'
              className='font-semibold'
            >
              Fullstack
            </Button>
          </div>
        </div>
        <div>
          <div className='flex flex-row flex-wrap place-content-center gap-3 w-full'>
            {/* {CardContentData.map((data) => ( */}
            {visibleProjects.map((data) => (
              <Card key={data.id}>
                <CardHeader>
                  <CardTitle className='text-xl'>
                    {data.title}
                  </CardTitle>
                  <CardDescription>
                    {data.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col'>
                  <div className='flex flex-row mb-5'>
                    <Image
                      src={data.image}
                      width={300}
                      height={300}
                      alt={data.title}
                    />
                  </div>
                  <div className='flex flex-row gap-1 place-content-center'>
                    {data.stack.map((stack) => (
                      <Badge
                        key={stack}
                        variant='secondary'
                      >
                        {stack}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className='place-content-end'>
                  <Link href={data.link}>
                    <Button
                      variant='secondary'
                      className='font-semibold'
                    >
                      Live Demo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className='flex justify-between mt-5 text-right'>
            {currentPage > 0 && (
              <Button
                variant='secondary'
                onClick={handlePrevPage}
              >
                {'<'}
              </Button>
            )}
            {currentPage < totalPages - 1 && (
              <Button
                variant='secondary'
                onClick={handleNextPage}
              >
                {'>'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
