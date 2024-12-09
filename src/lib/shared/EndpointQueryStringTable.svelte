<script>
    import SubSubtitle from './SubSubtitle.svelte';
    import { t } from 'svelte-i18n';

    export let title;
    export let queryStringArray;
</script>

<div class="flex flex-col gap-3">
    <SubSubtitle>{title}</SubSubtitle>
    <table class="border-t border-x border-gray-500">
        <tr class="border-b border-gray-500">
            <th class="border-r border-gray-500 p-2">
                <p>{$t('common.name')}</p>
            </th>
            <th class="p-2">
                <p>{$t('common.value')}</p>
            </th>
        </tr>
        {#each queryStringArray as arg}
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
