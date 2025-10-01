import React from 'react';

import styles from './../posts.module.css';

export const revalidate = 10; // Revalidate every 10 seconds

interface PostDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostDetailsPage({
  params,
}: PostDetailsPageProps) {
  const { id } = await params;

  const post: Post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className={styles.posts}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).then((res) => res.json());

  return posts.slice(0, 10).map((post) => ({
    id: post.id.toString(),
  }));
}
