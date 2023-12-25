'use client';

// import type { PutBlobResult } from '@vercel/blob';
import MediaPlayer from 'components/MediaPlayer';
import CommentEntry from 'components/CommentEntry';
import { useState, useRef } from 'react';

interface WorksProps {
  params: {
    slug: string[]
  }
}

export default async function Works(params: WorksProps["params"]) {
  const slug = params?.slug?.join("/")
  console.log('slug is: ', slug)
  return (
    <div>
      <h1>Works</h1>
      <CommentEntry/>
    </div>
  );
}