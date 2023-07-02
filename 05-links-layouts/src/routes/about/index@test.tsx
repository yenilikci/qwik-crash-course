import { component$, useStyles$ } from "@builder.io/qwik";
import AboutStyles from "./about.css?inline"

export default component$(() => {
    useStyles$(AboutStyles);

    return (
        <article>
            <h2>About</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, a ea! Possimus sapiente maxime quisquam, pariatur vitae fugiat illo explicabo odit amet, distinctio tempore inventore, laboriosam similique laudantium accusantium dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, debitis amet. Sequi nemo, veniam, cupiditate voluptatem tempora inventore dicta vero est eaque illum expedita maiores odit harum voluptates error corrupti.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque voluptatibus itaque temporibus sapiente ullam similique minus, quas dolores sint assumenda quis ipsa non provident ut illum maiores, esse nihil cumque?</p>
        </article>
    )
})