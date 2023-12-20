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
import Image from 'next/image';
import Link from 'next/link';
import {
  CardContentData,
  ProjectType,
} from './CardContentData';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projectsPerPageLG = 3;
  const projectsPerPageMD = 2;
  const [currentPage, setCurrentPage] = useState(0);
  const [filterType, setFilterType] =
    useState<null | ProjectType>(null);

  const handleFilter = (type: null | ProjectType) => {
    const filterSelector =
      filterType === type ? null : type;
    setFilterType(filterSelector);
    setCurrentPage(0);
  };

  // possibly do this with Object.groupBy() if this gets slow
  const filteredProjects = CardContentData.filter(
    (project) =>
      !filterType || project.type.includes(filterType),
  ).sort((a, b) => {
    if (filterType === null) {
      const order = ['fullstack', 'frontend', 'backend'];
      const indexA = order.indexOf(a.type[0]);
      const indexB = order.indexOf(b.type[0]);
      return indexA - indexB;
    }

    const filterLength = Math.min(
      a.type.length,
      b.type.length,
    );

    for (let i = 0; i < filterLength; i++) {
      const filterA = a.type[i];
      const filterB = b.type[i];

      if (
        filterA === filterType &&
        filterB !== filterType
      ) {
        return -1;
      } else if (
        filterB === filterType &&
        filterA !== filterType
      ) {
        return 1;
      }
    }
    return 0;
  });

  // possibly refactor this?
  const projectsPerPage =
    window.innerWidth < 1300
      ? projectsPerPageMD
      : projectsPerPageLG;

  const totalProjects = filteredProjects.length;
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

  const visibleProjects = filteredProjects.slice(
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
          <div className='flex flex-row flex-wrap gap-3 w-full align-center justify-center items-center my-1'>
            <Button
              color='primary'
              variant={
                filterType === null ? 'default' : 'outline'
              }
              className='font-semibold'
              onClick={() => handleFilter(null)}
            >
              All
            </Button>
            <Button
              color='primary'
              variant={
                filterType === 'frontend'
                  ? 'default'
                  : 'outline'
              }
              className='font-semibold'
              onClick={() => handleFilter('frontend')}
            >
              Frontend
            </Button>
            <Button
              color='primary'
              variant={
                filterType === 'backend'
                  ? 'default'
                  : 'outline'
              }
              className='font-semibold'
              onClick={() => handleFilter('backend')}
            >
              Backend
            </Button>
            <Button
              color='primary'
              variant={
                filterType === 'fullstack'
                  ? 'default'
                  : 'outline'
              }
              className='font-semibold'
              onClick={() => handleFilter('fullstack')}
            >
              Fullstack
            </Button>
          </div>
        </div>
        <div>
          <div className='flex flex-row flex-wrap place-content-center gap-3 w-full'>
            {/* {CardContentData.map((data) => ( */}
            {visibleProjects.map((data, index) => (
              <Card key={index}>
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
                        variant='outline'
                      >
                        {stack}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className='place-content-end'>
                  <Link href={data.link}>
                    <Button className='font-semibold'>
                      Live Demo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className='flex mt-5 justify-center gap-2'>
            <Button
              variant='secondary'
              onClick={handlePrevPage}
              style={{
                visibility:
                  currentPage > 0 ? 'visible' : 'hidden',
              }}
            >
              <ArrowLeft />
            </Button>
            <Button
              variant='secondary'
              onClick={handleNextPage}
              style={{
                visibility:
                  currentPage < totalPages - 1
                    ? 'visible'
                    : 'hidden',
              }}
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
