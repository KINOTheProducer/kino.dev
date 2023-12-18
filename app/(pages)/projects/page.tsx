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
import Project1 from '@/components/img/p1.png';

const Projects = () => {
  return (
    <div className='container-page'>
      <div className='flex flex-col gap-6'>
        <div>
          <h1 className='text-6xl font-bold mb-5 text-left'>
            Projects
          </h1>
          <p className='text-left text-xl mb-3'>
            This is a collection of projects I have worked
            on as a developer. They range from frontend to
            backend development, as well as a mix of both,
            with fullstack development.
          </p>
          Filter by:
          <div className='flex flex-row gap-3 align-center justify-center items-center my-1'>
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
          <div className='flex flex-row gap-6'>
            <Card>
              <CardHeader>
                <CardTitle>Project #1</CardTitle>
                <CardDescription className='text-left'>
                  This is the first project I have worked
                  on.
                </CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col'>
                <div className='flex flex-row mb-5'>
                  <Image
                    src={Project1}
                    width={300}
                    height={300}
                    alt='Project 1 Image'
                  />
                </div>
                {/* put image here from ProjectsCardContent file, when made */}
                <div className='flex flex-row'>
                  <Badge variant='outline'>Next.JS</Badge>
                  <Badge variant='outline'>
                    Typescript
                  </Badge>
                  <Badge variant='outline'>Tailwind</Badge>
                </div>
              </CardContent>
              <CardFooter className='place-content-end'>
                <Button
                  variant='secondary'
                  className='font-semibold'
                >
                  Live Demo
                </Button>
                {/* pull the stack used here, map it in from the ProjectsCardContent file, when made, mapping to individual badges */}
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project #1</CardTitle>
                <CardDescription className='text-left'>
                  This is the first project I have worked
                  on.
                </CardDescription>
              </CardHeader>
              <CardContent>Ipsussy</CardContent>
              <CardFooter>
                <Badge variant='outline'>Next.JS</Badge>
                <Badge variant='outline'>Typescript</Badge>
                <Badge variant='outline'>Tailwind</Badge>
                {/* put the badges for stack used here, map it in from the ProjectsCardContent file, when made */}
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project #1</CardTitle>
                <CardDescription className='text-left'>
                  This is the first project I have worked
                  on.
                </CardDescription>
              </CardHeader>
              <CardContent>Ipsussy</CardContent>
              <CardFooter>
                <Badge variant='outline'>Next.JS</Badge>
                <Badge variant='outline'>Typescript</Badge>
                <Badge variant='outline'>Tailwind</Badge>
                {/* put the badges for stack used here, map it in from the ProjectsCardContent file, when made */}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
