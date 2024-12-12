<script>
    export let object;
    export let isParent = false;
    export let isLast = false;
    export let parentIsObject = false;
    export let isParentArray = false;
</script>

<div>
    {#if !parentIsObject}
        <p class="text-white">{'{'}</p>
    {/if}
    {#each Object.keys(object) as key, index}
        {#if Array.isArray(object[key])}
            <div class="ml-3">
                <p class="text-white">{isParentArray ? '' : `${key}: `} {'['}</p>
                <svelte:self object={object[key]} isLast={Object.keys(object).length - 1 === index} parentIsObject={true} isParentArray={true} />
            </div>
        {:else if typeof object[key] === 'object'}
            <div class="ml-3">
                <p class="text-white">{isParentArray ? '' : `${key}: `} {'{'}</p>
                <svelte:self object={object[key]} isLast={Object.keys(object).length - 1 === index} parentIsObject={true} />
            </div>
        {:else}
            <p class="ml-3 text-white">{key}: <span class="text-primary-500">{@html object[key]}</span>{Object.keys(object).length - 1 === index ? '' : ','}</p>
        {/if}
    {/each}
    <p class="text-white">{`${isParentArray ? ']' : '}'}${!isParent && !isLast ? ',' : ''}`}</p>
</div>
