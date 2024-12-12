<script>
    import SubSubtitle from './SubSubtitle.svelte';
    import { t } from 'svelte-i18n';

    export let title;
    export let uriVariableObject;
    export let optional = false;
</script>

<div class="flex flex-col gap-3">
    <SubSubtitle>{title}</SubSubtitle>
    <table class="border-t border-x border-gray-500">
        <tr class="border-b border-gray-500">
            <th class="border-r border-gray-500 p-2">
                <p>{$t('common.name')}</p>
            </th>
            <th class="border-r border-gray-500 p-2">
                <p>{$t('common.value')}</p>
            </th>
            {#if optional}
                <th class="p-2">
                    <p>{$t('common.fallback')}</p>
                </th>
            {/if}
        </tr>
        {#each Object.keys(uriVariableObject) as queryString}
            <tr class="border-b border-gray-500">
                <th class="border-r border-gray-500 p-1">
                    <p>{queryString}</p>
                </th>
                <th class="border-r border-gray-500 p-1">
                    {#if Array.isArray(uriVariableObject[queryString]['value'])}
                        <p>
                            [
                                {#each uriVariableObject[queryString]['value'] as value, index}
                                    {value}{uriVariableObject[queryString]['value'].length - 1 === index ? '' : ', '}
                                {/each}
                            ]
                        </p>
                    {:else}
                        <p>{@html uriVariableObject[queryString]['value']}</p>
                    {/if}
                </th>
                {#if optional}
                    <th class="p-1">
                        <p>{uriVariableObject[queryString]['fallback']}</p>
                    </th>
                {/if}
            </tr>
        {/each}
    </table>
</div>
