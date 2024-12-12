<script>
    import Panel from './Panel.svelte';
    import { t } from 'svelte-i18n';
    import { onMount } from 'svelte';
    import CodeStructure from './CodeStructure.svelte';

    export let model;
    export let timestampable = true;

    onMount(() => {
        if (timestampable) {
            model = { ...model, updatedAt: 'string', createdAt: 'string' };
        }
    });
</script>

<Panel>
    <div class="flex flex-col gap-3 mt-3">
        <div class="bg-gray-950 p-2">
            <CodeStructure object={model} isParent={true} />
        </div>
    </div>
</Panel>
