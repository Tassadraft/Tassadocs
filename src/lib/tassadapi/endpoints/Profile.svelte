<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';

    let isLogged;
</script>

<TassadapiEndpointsMenu title={$t('tassadapi.end-points.profile.title')} bind:isLogged>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.profile.get.title')}
            description={$t('tassadapi.end-points.profile.get.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/profile`}
            response={`<span class="font-bold">${$t('common.user')}</span>`}
            logged={true}
            bind:isLogged
        />

        <Endpoint
            title={$t('tassadapi.end-points.profile.update.title')}
            description={$t('tassadapi.end-points.profile.update.description')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/profile/update`}
            body={{
                username: 'string [3, 50]',
                profilePicture: 'file | undefined'
            }}
            response={`<span class="font-bold">${$t('common.user')}</span>`}
            logged={true}
            bind:isLogged
        />
    </div>
</TassadapiEndpointsMenu>
