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
            {CardContentData.map((data) => (
              <Card key={data.id}>
                <CardHeader>
                  <CardTitle>{data.title}</CardTitle>
                  <CardDescription className='text-left'>
                    {data.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col'>
                  <div className='flex flex-row mb-5'>
                    <Image
                      src={data.image}
                      width={300}
                      height={300}
                      //   change this later
                      alt='testing'
                    />
                  </div>
                  <div className='flex flex-row gap-1'>
                    {data.stack.map((stack) => (
                      <Badge
                        key={stack}
                        color='outline'
                      >
                        {stack}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className='place-content-end'>
                  <Button
                    variant='secondary'
                    className='font-semibold'
                  >
                    <Link href={data.link}>Live Demo</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
