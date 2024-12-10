<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';
</script>

<TassadapiEndpointsMenu title={$t('tassadapi.end-points.profile.title')}>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.profile.get.title')}
            description={$t('tassadapi.end-points.profile.get.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/profile`}
            response={{
                username: 'string',
                email: 'string',
                role: 'admin | friend | user',
                enabled: 'boolean',
                acceptedTermsAndConditions: 'boolean',
                activeSubscription: `<span class="font-bold">${$t('common.subscription')}</span> | undefined`,
                profilePicture: `<span class="font-bold">${$t('common.file')}</span> | undefined`,
            }}
            logged={true}
        />

        <Endpoint
            title={$t('tassadapi.end-points.profile.update.title')}
            description={$t('tassadapi.end-points.profile.update.description')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/profile/update`}
            body={{
                username: 'string',
                profilePicture: 'file'
            }}
            response={{
                username: 'string',
                email: 'string',
                role: 'admin | friend | user',
                enabled: 'boolean',
                acceptedTermsAndConditions: 'boolean',
                activeSubscription: `<span class="font-bold">${$t('common.subscription')}</span> | undefined`,
                profilePicture: `<span class="font-bold">${$t('common.file')}</span> | undefined`,
            }}
            logged={true}
        />
    </div>
</TassadapiEndpointsMenu>
