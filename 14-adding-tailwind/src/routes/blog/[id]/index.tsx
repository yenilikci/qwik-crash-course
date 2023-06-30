import { component$, Resource } from "@builder.io/qwik";
import { routeLoader$ } from '@builder.io/qwik-city';

interface BlogData {
    id: string,
    title: string,
    content: string
}

export const useBlogData = routeLoader$(async (requestEvent) => {
    const res = await fetch(`http://localhost:3000/blogs/${requestEvent.params.id}`)

    if (!res.ok) {
        console.log('redirecting the user...')
        throw requestEvent.redirect(303, '/')
    }

    const data = await res.json()

    return data as BlogData
})

export default component$(() => {
    const blogData = useBlogData();

    return (
        <div class="blog">
            <Resource
                value={blogData}
                onPending={() => <div>Loading...</div>}
                onResolved={(blog) => (
                    <div>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                    </div>
                )}
            />
        </div>
    )
})