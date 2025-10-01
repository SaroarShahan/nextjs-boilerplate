import Link from 'next/link';
import styles from './posts.module.css';

export default async function PostsPage() {
  const posts: Post[] = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).then((res) => res.json());

  if (!posts) {
    return <div>Failed to load posts.</div>;
  }

  return (
    <div className={styles.posts}>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>
              <Link href={`/posts/${post.id}`} className={styles.postLink}>
                {post.title}
              </Link>
            </h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
