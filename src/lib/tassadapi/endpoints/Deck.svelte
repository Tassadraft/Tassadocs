<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';

    let isLogged;
    let isSubscribed;
</script>

<TassadapiEndpointsMenu title={$t('tassadapi.end-points.deck.title')} bind:isLogged bind:isSubscribed>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.deck.all.title')}
            description={$t('tassadapi.end-points.deck.all.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/decks`}
            queryArgs={{
                optional: {
                    language: {value: ['en', 'fr'], fallback: 'en'},
                    allPage: {value: 'number', fallback: 1},
                    allPerPage: {value: 'number', fallback: 10},
                    myPage: {value: 'number', fallback: 1},
                    myPerPage: {value: 'number', fallback: 10}
                }
            }}
            response={{
                allDecks: {
                    decks: `<span class="font-bold">${$t('common.deck-light')}</span> []`,
                    firstPage: 'number',
                    lastPage: 'number',
                    perPage: 'number',
                    total: 'number',
                    currentPage: 'number',
                },
                myDecks: isLogged ? {
                    decks: `<span class="font-bold">${$t('common.deck-light')}</span> []`,
                    firstPage: 'number',
                    lastPage: 'number',
                    perPage: 'number',
                    total: 'number',
                    currentPage: 'number'
                } : 'null'
            }}
            logged={true}
            bind:isLogged
        />

        <Endpoint
            title={$t('tassadapi.end-points.deck.public.title')}
            description={$t('tassadapi.end-points.deck.public.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/decks/public`}
            queryArgs={{
                optional: {
                    language: {value: ['en', 'fr'], fallback: 'en'},
                    page: {value: 'number', fallback: 1},
                    perPage: {value: 'number', fallback: 10}
                }
            }}
            response={{
                decks: `<span class="font-bold">${$t('common.deck-light')}</span> []`,
                firstPage: 'number',
                lastPage: 'number',
                perPage: 'number',
                total: 'number',
                currentPage: 'number'
            }}
            logged={true}
            bind:isLogged
        />

        <Endpoint
            title={$t('tassadapi.end-points.deck.me.title')}
            description={$t('tassadapi.end-points.deck.me.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/decks/me`}
            queryArgs={{
                optional: {
                    page: {value: 'number', fallback: 1},
                    perPage: {value: 'number', fallback: 10}
                }
            }}
            response={{
                decks: `<span class="font-bold">${$t('common.deck-light')}</span> []`,
                firstPage: 'number',
                lastPage: 'number',
                perPage: 'number',
                total: 'number',
                currentPage: 'number'
            }}
            logged={true}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />

        <Endpoint
            title={$t('tassadapi.end-points.deck.get.title')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/decks/:deckId`}
            params={{
                deckId: {value: $t('tassadapi.end-points.deck.get.params.deck-id')}
            }}
            queryArgs={{
                optional: {
                    language: {value: ['en', 'fr'], fallback: 'en'}
                }
            }}
            response={`<span class="font-bold text-orange-500">${$t('common.deck')}</span> []`}
            logged={true}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />

        <Endpoint
            title={$t('tassadapi.end-points.deck.delete.title')}
            method="delete"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/decks/:deckId`}
            params={{
                deckId: {value: $t('tassadapi.end-points.deck.get.delete.deck-id')}
            }}
            queryArgs={{
                optional: {
                    language: {value: ['en', 'fr'], fallback: 'en'}
                }
            }}
            response={{ message: 'string' }}
            logged={true}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />

        <Endpoint
            title={$t('tassadapi.end-points.deck.is-legal.title')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/decks/:deckId/is-legal`}
            params={{
                deckId: {value: $t('tassadapi.end-points.deck.get.is-legal.deck-id')}
            }}
            queryArgs={{
                optional: {
                    language: {value: ['en', 'fr'], fallback: 'en'}
                }
            }}
            response={`<span class="font-bold text-orange-500">boolean</span>`}
            logged={true}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />
    </div>
</TassadapiEndpointsMenu>
