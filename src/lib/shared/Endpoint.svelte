<script>
    import Subtitle from './Subtitle.svelte';
    import Panel from './Panel.svelte';
    import { showToast } from '../../service/toastService.js';
    import Icon from './Icon.svelte';
    import Button from './Button.svelte';
    import { t } from 'svelte-i18n';
    import SubSubtitle from './SubSubtitle.svelte';
    import { onMount } from 'svelte';

    export let title;
    export let description;
    export let endpoint = "";
    export let method = "GET";
    export let queryArgs = {};
    export let body = null;

    onMount(() => {
       method = method.toUpperCase();
    });

    const handleCopy = () => {
        navigator.clipboard.writeText(endpoint);
        showToast($t('toast.copy.success'));
    };
</script>

<Panel>
    <Subtitle>{title}</Subtitle>
    <p>{description}</p>
    <div class="bg-gray-900 border border-gray-500 rounded-lg flex h-10 text-white mt-1">
        <div class="border-r border-gray-500 flex items-center px-2">
            <span class="text-primary-500">{method}</span>
        </div>
        <Button
            customStyle={true}
            className="flex flex-grow items-center group px-2 hover:cursor-pointer"
            on:click={handleCopy}
        >
            <span class="text-white group-hover:text-primary-500 transition-colors duration-300">{endpoint}</span>
            <div class="flex flex-grow justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon name="copy" />
            </div>
        </Button>
    </div>
    <div class="flex justify-around mt-3">
        {#if queryArgs.required?.length}
            <div class="flex flex-col gap-3">
                <SubSubtitle>{$t('end-point.query-string.required')}</SubSubtitle>
                <table class="border-t border-x border-gray-500">
                    <tr class="border-b border-gray-500">
                        <th class="border-r border-gray-500 p-2">
                            <p>{$t('common.name')}</p>
                        </th>
                        <th class="p-2">
                            <p>{$t('common.value')}</p>
                        </th>
                    </tr>
                    {#each queryArgs.required as arg}
                        <tr class="border-b border-gray-500">
                            {#each Object.keys(arg) as key}
                                <td class="border-r border-gray-500 p-2">
                                    <p>{key}</p>
                                </td>
                                <td>
                                    <div class="flex justify-center gap-1">
                                        {#if typeof arg[key] === 'string'}
                                            <p>{arg[key]}</p>
                                        {:else}
                                            <p>[</p>
                                            {#each arg[key] as validValue, index}
                                                <p>{validValue}{arg[key].length - 1 === index ? '' : ','}</p>
                                            {/each}
                                            <p>]</p>
                                        {/if}
                                    </div>
                                </td>
                            {/each}
                        </tr>
                    {/each}
                </table>
            </div>
        {/if}

        {#if queryArgs.optional?.length}
            <div class="flex flex-col gap-3">
                <SubSubtitle>{$t('end-point.query-string.optional')}</SubSubtitle>
                <table class="border-t border-x border-gray-500">
                    <tr class="border-b border-gray-500">
                        <th class="border-r border-gray-500 p-2">
                            <p>{$t('common.name')}</p>
                        </th>
                        <th class="p-2">
                            <p>{$t('common.value')}</p>
                        </th>
                    </tr>
                    {#each queryArgs.optional as arg}
                        <tr class="border-b border-gray-500">
                            {#each Object.keys(arg) as key}
                                <td class="border-r border-gray-500 p-2">
                                    <p>{key}</p>
                                </td>
                                <td>
                                    <div class="flex justify-center gap-1">
                                        {#if typeof arg[key] === 'string'}
                                            <p>{arg[key]}</p>
                                        {:else}
                                            <p>[</p>
                                            {#each arg[key] as validValue, index}
                                                <p>{validValue}{arg[key].length - 1 === index ? '' : ','}</p>
                                            {/each}
                                            <p>]</p>
                                        {/if}
                                    </div>
                                </td>
                            {/each}
                        </tr>
                    {/each}
                </table>
            </div>
        {/if}
    </div>
    {#if method === "POST"}
        <div class="flex flex-col gap-3">
            <SubSubtitle>{$t('end-point.body')}</SubSubtitle>
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
</Panel>
