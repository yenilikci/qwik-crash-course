import { component$, Resource } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link, routeLoader$ } from '@builder.io/qwik-city';
import Card from '~/components/card/card';

interface BlogData {
  id: string,
  title: string,
  content: string
}

export const useBlogsData = routeLoader$(async () => {
  const res = await fetch('http://localhost:3000/blogs')
  const data = await res.json()

  return data as BlogData[]
})

export default component$(() => {
  const blogsData = useBlogsData();

  return (
    <div>
      <h1>Okie Dokie!</h1>

      <Resource
        value={blogsData}
        onPending={() => <div>Loading blogs...</div>}
        onResolved={(blogs) => (
          <div class="blogs">
            {blogs && blogs.map(blog => (
              <Card key={blog.id}>
                <h3 q: slot='title'>{blog.title}</h3>
                <p q: slot="content">{blog.content.slice(0, 50)}...</p>
                <Link q: slot="footer" href={"/blog/" + blog.id}>
                  <button>Read more</button>
                </Link>
              </Card>
            ))}
          </div>
        )}
      />

    </div>
  );
});

export const head: DocumentHead = {
  title: 'Mario Life',
  meta: [
    {
      name: 'description',
      content: 'a blog site about everything Super Mario related',
    },
  ]
};