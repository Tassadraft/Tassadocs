<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.file')}>
    <Model
        model={{
            version: 'string',
            path: 'string',
            extension: 'string',
            mimeType: 'string',
            downloads: 'number',
            size: 'number (in MB)',
            extension: '"apk" | "ipa"',
        }}
    />
</TassadapiModelsMenu>
