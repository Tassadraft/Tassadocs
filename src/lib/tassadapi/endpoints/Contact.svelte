<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';
</script>

<TassadapiEndpointsMenu title={$t('tassadapi.end-points.contact.title')} description={$t('tassadapi.end-points.contact.description')}>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.contact.subjects.title')}
            description={$t('tassadapi.end-points.contact.subjects.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/contact/subjects`}
            response={['<span class="text-orange-500">string</span> []']}
            logged={true}
        />


        <Endpoint
            title={$t('tassadapi.end-points.contact.post.title')}
            description={$t('tassadapi.end-points.contact.post.description')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/contact`}
            body={{
                subject: 'string',
                message: 'string',
                consent: 'boolean'
            }}
            response={{ message: 'string' }}
            logged={true}
        />
    </div>
</TassadapiEndpointsMenu>
