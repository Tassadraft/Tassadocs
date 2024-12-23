<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';
</script>

<TassadapiEndpointsMenu title={$t('tassadapi.end-points.create-account.title')}>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.create-account.send-mail.title')}
            description={$t('tassadapi.end-points.create-account.send-mail.description')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/account-creation/send-mail`}
            body={{
                username: 'string',
                email: 'string',
                password: 'string',
                confirmPassword: 'string',
                frontClient: 'string',
                frontUri: 'string',
                consent: 'true'
            }}
            response={{
                message: 'string'
            }}
        />

        <Endpoint
            title={$t('tassadapi.end-points.create-account.confirm.title')}
            description={$t('tassadapi.end-points.create-account.confirm.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/account-creation/confirm/:token`}
            response={{
                message: 'string',
                token: `<span class="font-bold">${$t('common.access-token')}</span>`
            }}
        />
    </div>
</TassadapiEndpointsMenu>
