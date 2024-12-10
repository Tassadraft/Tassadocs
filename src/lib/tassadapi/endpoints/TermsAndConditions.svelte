<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';
</script>

<TassadapiEndpointsMenu title={$t('tassadapi.end-points.terms-and-conditions.title')} description={$t('tassadapi.end-points.terms-and-conditions.description')}>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.terms-and-conditions.accept.title')}
            description={$t('tassadapi.end-points.terms-and-conditions.accept.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/terms-and-conditions`}
            response={{
                accepted: true
            }}
            logged={true}
        />
    </div>
</TassadapiEndpointsMenu>
