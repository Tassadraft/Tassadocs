<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';

    let isLogged;
    let isSubscribed;
</script>

<TassadapiEndpointsMenu title={$t('common.card-print')} bind:isLogged bind:isSubscribed>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.card.prints.get.title')}
            description={$t('tassadapi.end-points.card.prints.get.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/cards/prints/:cardId`}
            params={{
                cardId: {value: $t('tassadapi.end-points.card.prints.get.params.card-id')}
            }}
            queryArgs={{
                optional: {
                    language: {value: ['en', 'fr'], fallback: 'en'},
                    page: {value: 'number', fallback: 1},
                    perPage: {value: 'number', fallback: 10}
                },
            }}
            response={{
                cards: `<span class="font-bold">${$t('common.card-print')}</span> []`,
                firstPage: 'number',
                lastPage: 'number',
                perPage: 'number',
                total: 'number',
                currentPage: 'number'
            }}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />

        <Endpoint
            title={$t('tassadapi.end-points.card.prints.switch.title')}
            description={$t('tassadapi.end-points.card.prints.switch.description')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/cards/prints/:cardId/switch`}
            params={{
                cardId: {value: $t('tassadapi.end-points.card.prints.switch.params.card-id')}
            }}
            body={{
                printId: $t('tassadapi.end-points.card.prints.switch.body.print-id')
            }}
            response={{ success: true }}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />

        <Endpoint
            title={$t('tassadapi.end-points.card.prints.switch-related.title')}
            description={$t('tassadapi.end-points.card.prints.switch-related.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/cards/prints/:deckId/related/switch`}
            params={{
                deckId: {value: $t('tassadapi.end-points.card.prints.switch-related.params.deck-id')}
            }}
            response={isLogged && isSubscribed ? { success: true } : ''}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />
    </div>
</TassadapiEndpointsMenu>
