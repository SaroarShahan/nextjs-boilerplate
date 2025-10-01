import { sleep } from '~/utils';

import styles from './dynamic-posts.module.css';
import { Suspense, use } from 'react';

const fetchUserList = async () => {
  await sleep(3000);
  return fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json() as Promise<User[]>
  );
};

const fetchPostList = async () => {
  await sleep(4500);
  return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then(
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
        <UserList fetchUserList={fetchUserList} />
      </Suspense>

      <p className="my-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis et,
        cupiditate eveniet labore, voluptatem vel laboriosam, id atque illo eos
        excepturi temporibus esse vitae facilis distinctio? Quos quaerat harum
        provident.
      </p>

      <Suspense fallback={<div>Loading posts...</div>}>
        <PostList fetchPostList={fetchPostList} />
      </Suspense>
    </div>
  );
}

interface UserProps {
  fetchUserList: () => Promise<User[]>;
}

const UserList = ({ fetchUserList }: UserProps) => {
  const users = use(fetchUserList());

  return (
    <div>
      <h2>Users</h2>

      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};

interface PostListProps {
  fetchPostList: () => Promise<Post[]>;
}

const PostList = ({ fetchPostList }: PostListProps) => {
  const posts = use(fetchPostList());

  return (
    <div>
      <h2>Posts</h2>

      <div>
        {posts.map((post) => (
          <div key={post.id}>
            {post.title}

            <Suspense fallback={<div>Loading authors...</div>}>
              <AuthorList
                fetchAuthorsList={() => fetchAuthorsList(post.userId)}
              />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
};

interface AuthorListProps {
  fetchAuthorsList: () => Promise<User>;
}

const AuthorList = async ({ fetchAuthorsList }: AuthorListProps) => {
  const author = await fetchAuthorsList();

  return (
    <div className={styles.authors}>
      <h2>{author.name}</h2>
    </div>
  );
};
