import Link from 'next/link';
import { sleep } from '~/utils';

import styles from './dynamic-posts.module.css';
import { Suspense } from 'react';

const fetchUserList = async () => {
  await sleep(3000);
  return fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json() as Promise<User[]>
  );
};

const fetchPostList = async () => {
  await sleep(4500);
  return fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json() as Promise<Post[]>
  );
};

const fetchAuthorsList = async (postId: number) => {
  await sleep(2000);
  return fetch(`https://jsonplaceholder.typicode.com/users/${postId}`).then(
    (res) => res.json() as Promise<User>
  );
};

export default async function DynamicPostsPage() {
  return (
    <div className="p-1">
      <Suspense fallback={<div>Loading users...</div>}>
        <UserList />
      </Suspense>

      <p className="my-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis et,
        cupiditate eveniet labore, voluptatem vel laboriosam, id atque illo eos
        excepturi temporibus esse vitae facilis distinctio? Quos quaerat harum
        provident.
      </p>

      <Suspense fallback={<div>Loading posts...</div>}>
        <PostList />
      </Suspense>
    </div>
  );
}

const UserList = async () => {
  const users = await fetchUserList();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

const PostList = async () => {
  const posts = await fetchPostList();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {post.title}

          <Suspense fallback={<div>Loading authors...</div>}>
            <AuthorList postId={post.userId} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

const AuthorList = async ({ postId }: { postId: number }) => {
  const author = await fetchAuthorsList(postId);

  console.log('authors', author);

  return (
    <div className={styles.authors}>
      <h2>{author.name}</h2>
    </div>
  );
};
