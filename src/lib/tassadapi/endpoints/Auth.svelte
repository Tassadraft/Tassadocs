<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';

    let isLogged = false;
</script>

<TassadapiEndpointsMenu title={$t('tassadapi.end-points.auth.title')} description={$t('tassadapi.end-points.auth.description')} bind:isLogged>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.auth.login.title')}
            description={$t('tassadapi.end-points.auth.login.description')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/login`}
            body={{
                username: 'string',
                password: 'string'
            }}
            response={{
                message: 'string',
                token: `<span class="font-bold">${$t('common.access-token')}</span>`
            }}
        />

        <Endpoint
            title={$t('tassadapi.end-points.auth.auth-check.title')}
            description={$t('tassadapi.end-points.auth.auth-check.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth`}
            response={{
                sessionTokenIsValid: true
            }}
            logged={true}
            bind:isLogged
        />

        <Endpoint
            title={$t('tassadapi.end-points.auth.logout.title')}
            description={$t('tassadapi.end-points.auth.logout.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/logout`}
            response={{
                revoked: true
            }}
            logged={true}
            bind:isLogged
        />
    </div>
</TassadapiEndpointsMenu>
