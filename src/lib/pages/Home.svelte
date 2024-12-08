<script>
    import RetractableMenu from '../menu/RetractableMenu.svelte';
    import { t } from 'svelte-i18n';
    import Title from '../shared/Title.svelte';
    import Endpoint from '../shared/Endpoint.svelte';
</script>

<RetractableMenu />

<Title title={$t('home.title')} />

<Endpoint
    title="test"
    description="ceci est un test :)"
    method="get"
    endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}`}
    queryArgs={{
        required: [{language: ['en', 'fr']}, {language: ['en', 'fr']}]
    }}
    body={{
        cardId: "Deck card id"
    }}
/>
