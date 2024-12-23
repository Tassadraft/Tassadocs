<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';

    let isLogged;
</script>

<TassadapiEndpointsMenu title={$t('tassadapi.end-points.contact.title')} description={$t('tassadapi.end-points.contact.description')} bind:isLogged>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.contact.subjects.title')}
            description={$t('tassadapi.end-points.contact.subjects.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/contact/subjects`}
            response={['<span class="text-orange-500">string</span> []']}
            logged={true}
            bind:isLogged
        />


        <Endpoint
            title={$t('tassadapi.end-points.contact.post.title')}
            description={$t('tassadapi.end-points.contact.post.description')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/contact`}
            body={{
                subject: 'string',
                message: 'text [32, 1024]',
                consent: 'boolean (true)'
            }}
            response={{ message: 'string' }}
            logged={true}
            bind:isLogged
        />
    </div>
</TassadapiEndpointsMenu>
