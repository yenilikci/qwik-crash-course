import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from "./contact.css?inline"

export default component$(() => {
    useStylesScoped$(ContactStyles);

    return (
        <article>
            <h2>Contact</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, a ea! Possimus sapiente maxime quisquam, pariatur vitae fugiat illo explicabo odit amet, distinctio tempore inventore, laboriosam similique laudantium accusantium dolorum.</p>
        </article>
    )
})