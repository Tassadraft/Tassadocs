<script>
    import Panel from './Panel.svelte';
    import { showToast } from '../../service/toastService.js';
    import Icon from './Icon.svelte';
    import Button from './Button.svelte';
    import { t } from 'svelte-i18n';
    import SubSubtitle from './SubSubtitle.svelte';
    import { onMount } from 'svelte';
    import EndpointUriVariableTable from './EndpointUriVariableTable.svelte';
    import Subtitle from './Subtitle.svelte';
    import { raw } from '../../service/stringService.js';
    import CodeStructure from './CodeStructure.svelte';

    export let title = null;
    export let description = null;
    export let endpoint;
    export let method = 'GET';
    export let queryArgs = {};
    export let params = null;
    export let body = null;
    export let response;
    export let logged = false;
    export let subscribed = false;
    export let isLogged = false;
    export let isSubscribed = false;

    let responseOk = false;

    onMount(() => {
        method = method.toUpperCase();
    });

    const handleCopy = () => {
        navigator.clipboard.writeText(endpoint);
        showToast($t('toast.copy.success'));
    };

    $: responseOk = !((logged || subscribed) && !isLogged) && !(subscribed && !isSubscribed);
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
            {#if (logged || subscribed)}
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
        {#if params}
            <EndpointUriVariableTable title={$t('end-point.params')} uriVariableObject={params} />
        {/if}

        {#if queryArgs.required}
            <EndpointUriVariableTable title={$t('end-point.query-string.required')} uriVariableObject={queryArgs.required} />
        {/if}

        {#if queryArgs.optional}
            <EndpointUriVariableTable title={$t('end-point.query-string.optional')} uriVariableObject={queryArgs.optional} optional={true} />
        {/if}
    </div>
    {#if method === 'POST'}
        <div class="flex flex-col gap-3">
            <SubSubtitle>{$t('end-point.body')}</SubSubtitle>
            <div class="bg-gray-950 p-2">
                <CodeStructure object={body} isParent={true} />
            </div>
        </div>
    {/if}
    <div class="flex flex-col gap-3 mt-3">
        <SubSubtitle>{$t('end-point.response')}</SubSubtitle>
        <p class="flex gap-1">
            <span
                class="inline-block size-4 border mt-1 {responseOk ? 'bg-green-700 border-green-600' : 'bg-red-700 border-red-600'}"
                style="border-radius: 50%;"
            ></span>
            {$t('common.status')}: {responseOk ? 200 : ((logged || subscribed) && !isLogged) ? 401 : (subscribed && !isSubscribed) ? 403 : 'ici'}
        </p>
        <div class="bg-gray-950 p-2">
            {#if responseOk}
                {#if Array.isArray(response)}
                    <p class="text-white">{'['}</p>
                    {#each response as value, index}
                        <p class="ml-3 text-white">{@html value}{response.length - 1 === index ? '' : ','}</p>
                    {/each}
                    <p class="text-white">{']'}</p>
                {:else if typeof response === 'object'}
                    <CodeStructure object={response} isParent={true} />
                {:else}
                    <div>
                        <p>{@html response}</p>
                    </div>
                {/if}
            {:else if (logged || subscribed) && !isLogged}
                <CodeStructure
                    object={{
                        errors: [
                            {
                                message: 'Unauthorized access'
                            }
                        ]
                    }}
                    isParent={true}
                />
            {:else}
                <CodeStructure
                    object={{
                        errors: [
                            {
                                message: 'You need an active subscription to access this resource'
                            }
                        ]
                    }}
                    isParent={true}
                />
            {/if}
        </div>
    </div>
</Panel>
