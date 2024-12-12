<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';
</script>

<TassadapiEndpointsMenu title={$t('tassadapi.end-points.reset-password.title')}>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.reset-password.send.title')}
            description={$t('tassadapi.end-points.reset-password.send.description')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/reset-password/send-mail`}
            body={{
                email: 'string',
                frontUri: 'string'
            }}
            response={{
                success: true
            }}
        />

        <Endpoint
            title={$t('tassadapi.end-points.reset-password.confirm.title')}
            description={$t('tassadapi.end-points.reset-password.confirm.description')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/reset-password/confirm/:token`}
            body={{
                password: 'string',
                confirmPassword: 'string'
            }}
            response={{
                success: true
            }}
        />
    </div>
</TassadapiEndpointsMenu>
