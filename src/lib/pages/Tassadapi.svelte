<script>
    import Title from '../shared/Title.svelte';
    import { t } from 'svelte-i18n';
    import RetractableMenu from '../menu/RetractableMenu.svelte';
    import Card from '../shared/Card.svelte';

    let tassadapiParts = [];

    $: {
        tassadapiParts = [
            {
                href: '/tassadapi/models',
                title: $t('tassadapi.models.title'),
                icon: 'structure',
                description: $t('tassadapi.models.description'),
            },
            {
                href: '/tassadapi/end-points',
                title: $t('tassadapi.end-points.title'),
                icon: 'request',
                description: $t('tassadapi.end-points.description'),
            },
        ];
    }
</script>

<RetractableMenu />

<Title title={$t('tassadapi.title')} />

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
    {#each tassadapiParts as tassadapiPart}
        <Card title={tassadapiPart.title} icon={tassadapiPart.icon} href={tassadapiPart.href} description={tassadapiPart.description} />
    {/each}
</div>
