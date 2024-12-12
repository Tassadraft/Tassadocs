<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';

    let isLogged;
    let isSubscribed;
</script>

<TassadapiEndpointsMenu title={$t('common.card')} bind:isLogged bind:isSubscribed>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.card.search.title')}
            description={$t('tassadapi.end-points.card.search.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/cards/search`}
            queryArgs={{
                optional: {
                    language: {value: ['en', 'fr'], fallback: 'en'},
                    page: {value: 'number', fallback: 1},
                    perPage: {value: 'number', fallback: 10}
                },
                required: {
                    query: {value: 'number'},
                }
            }}
            response={isLogged && isSubscribed ? {
                cards: `<span class="font-bold">${$t('common.card-print')}</span> []`,
                firstPage: 'number',
                lastPage: 'number',
                perPage: 'number',
                total: 'number',
                currentPage: 'number'
            } : ''}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />
    </div>
</TassadapiEndpointsMenu>
