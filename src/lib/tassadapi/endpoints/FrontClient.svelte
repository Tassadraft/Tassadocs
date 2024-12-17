<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';
</script>

<TassadapiEndpointsMenu title={$t('tassadapi.end-points.front-client.title')} description={$t('tassadapi.end-points.front-client.description')}>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.front-client.new.title')}
            description={$t('tassadapi.end-points.front-client.new.description')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/new-client`}
            body={{
                name: 'string',
                repositoryUri: 'string',
                productionUri: 'string | undefined',
            }}
            response={{
                message: 'string',
                client: `<span class="font-bold">${$t('common.front-client')}</span>`
            }}
        />
    </div>
</TassadapiEndpointsMenu>
