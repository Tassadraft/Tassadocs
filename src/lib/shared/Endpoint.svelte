<script>
    import Panel from './Panel.svelte';
    import { showToast } from '../../service/toastService.js';
    import Icon from './Icon.svelte';
    import Button from './Button.svelte';
    import { t } from 'svelte-i18n';
    import SubSubtitle from './SubSubtitle.svelte';
    import { onMount } from 'svelte';
    import EndpointQueryStringTable from './EndpointQueryStringTable.svelte';
    import Subtitle from './Subtitle.svelte';
    import { raw } from '../../service/stringService.js';

    export let title = null;
    export let description = null;
    export let endpoint;
    export let method = 'GET';
    export let queryArgs = {};
    export let body = null;
    export let response;
    export let logged = false;
    export let subscribed = false;

    onMount(() => {
        method = method.toUpperCase();
    });

    const handleCopy = () => {
        navigator.clipboard.writeText(endpoint);
        showToast($t('toast.copy.success'));
    };
</script>

<Panel>
    {#if title}
        <Subtitle>{title}</Subtitle>
    {/if}
    {#if description}
        <p class="mt-3">{@html raw(description)}</p>
    {/if}
    {#if logged || subscribed}
        <div class="flex gap-3 mt-3">
            {#if logged}
                <div class="p-1 rounded-xl bg-green-800">
                    <p>{$t('common.logged')}</p>
                </div>
            {/if}
            {#if subscribed}
                <div class="p-1 rounded-xl bg-blue-900">
                    <p>{$t('common.subscribed')}</p>
                </div>
            {/if}
        </div>
    {/if}
    <div class="bg-gray-900 border border-gray-500 rounded-lg flex h-10 text-white mt-3">
        <div class="border-r border-gray-500 flex items-center px-2">
            <span class="text-primary-500">{method}</span>
        </div>
        <Button customStyle={true} className="flex flex-grow items-center group px-2 hover:cursor-pointer" on:click={handleCopy}>
            <span class="text-white group-hover:text-primary-500 transition-colors duration-300">{endpoint}</span>
            <div class="flex flex-grow justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon name="copy" />
            </div>
        </Button>
    </div>
    <div class="flex justify-around mt-3">
        {#if queryArgs.required?.length}
            <EndpointQueryStringTable title={$t('end-point.query-string.required')} queryStringArray={queryArgs.required} />
        {/if}

        {#if queryArgs.optional?.length}
            <EndpointQueryStringTable title={$t('end-point.query-string.optional')} queryStringArray={queryArgs.optional} />
        {/if}
    </div>
    {#if method === 'POST'}
        <div class="flex flex-col gap-3">
            <SubSubtitle>{$t('end-point.body')}</SubSubtitle>
            <div class="bg-gray-950 p-2">
                <p class="text-white">{'{'}</p>
                {#each Object.keys(body) as key, index}
                    <p class="ml-3 text-white">{key}: <span class="text-primary-500">{@html body[key]}</span>{Object.keys(body).length - 1 === index ? '' : ','}</p>
                {/each}
                <p class="text-white">{'}'}</p>
            </div>
            <table class="border-t border-x border-gray-500">
                <tr class="border-b border-gray-500">
                    <th class="border-r border-gray-500 p-2">
                        <p>{$t('common.name')}</p>
                    </th>
                    <th class="p-2">
                        <p>{$t('common.value')}</p>
                    </th>
                </tr>
                {#each Object.keys(body) as key}
                    <tr class="border-b border-gray-500">
                        <td class="flex justify-center border-r border-gray-500 p-2">
                            <p>{key}</p>
                        </td>
                        <td>
                            <div class="flex justify-center gap-1">
                                <p>{body[key]}</p>
                            </div>
                        </td>
                    </tr>
                {/each}
            </table>
        </div>
    {/if}
    <div class="flex flex-col gap-3 mt-3">
        <SubSubtitle>{$t('end-point.response')}</SubSubtitle>
        <div class="bg-gray-950 p-2">
            {#if Array.isArray(response)}
                <p class="text-white">{'['}</p>
                {#each response as value, index}
                    <p class="ml-3 text-white">{@html value}{response.length - 1 === index ? '' : ','}</p>
                {/each}
                <p class="text-white">{']'}</p>
            {:else}
                <p class="text-white">{'{'}</p>
                {#each Object.keys(response) as key, index}
                    <p class="ml-3 text-white">{key}: <span class="text-primary-500">{@html response[key]}</span>{Object.keys(response).length - 1 === index ? '' : ','}</p>
                {/each}
                <p class="text-white">{'}'}</p>
            {/if}
        </div>
    </div>
</Panel>
