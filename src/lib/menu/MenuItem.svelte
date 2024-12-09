<script>
    import { location } from '../../stores/locationStore.js';
    import Link from '../shared/Link.svelte';
    import Icon from '../shared/Icon.svelte';

    export let href = '';
    export let iconLeft = '';
    export let iconRight = 'chevronRight';
    export let footer = false;
    export let target = '';

    let notClickable = true;

    $: notClickable = href === $location;
</script>

<Link
    href={notClickable ? null : href}
    className={`${!notClickable ? (footer ? 'hover:bg-gray-300 cursor-pointer' : 'hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer') : 'cursor-not-allowed opacity-50'} ${footer ? 'flex justify-center' : ''} px-2 flex flex-row transition-colors duration-300 rounded`}
    {target}
>
    <div class="text-primary-500 left">
        <Icon name={iconLeft} />
    </div>
    <p class="{footer ? '' : 'text-gray-700 text-xl'} p-2">
        <slot />
    </p>
    {#if iconRight}
        <div class="flex text-gray-700 dark:text-white right">
            <Icon name={iconRight} />
        </div>
    {/if}
</Link>

<style>
    .left {
        margin-top: 0.5rem;
    }
    .right {
        margin-top: 0.55rem;
    }
</style>
