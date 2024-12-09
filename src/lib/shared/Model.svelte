<script>
    import Panel from './Panel.svelte';
    import { t } from 'svelte-i18n';
    import { onMount } from 'svelte';

    export let model;

    onMount(() => {
        model = { ...model, updatedAt: 'string', createdAt: 'string' };
    });
</script>

<Panel>
    <div class="flex flex-col gap-3 mt-3">
        <div class="bg-gray-950 p-2">
            <p class="text-white">{`{`}</p>
            {#each Object.keys(model) as key}
                <p class="ml-3 text-white">{key}: <span class="text-primary-500">{@html model[key]}</span>,</p>
            {/each}
            <p class="text-white">{`}`}</p>
        </div>
        <table class="border-t border-x border-gray-500">
            <tr class="border-b border-gray-500">
                <th class="border-r border-gray-500 p-2">
                    <p>{$t('common.field')}</p>
                </th>
                <th class="p-2">
                    <p>{$t('common.type')}</p>
                </th>
            </tr>
            {#each Object.keys(model) as key}
                <tr class="border-b border-gray-500">
                    <td class="flex justify-center border-r border-gray-500 p-2">
                        <p>{key}</p>
                    </td>
                    <td>
                        <div class="flex justify-center gap-1">
                            <p>{@html model[key]}</p>
                        </div>
                    </td>
                </tr>
            {/each}
        </table>
    </div>
</Panel>
