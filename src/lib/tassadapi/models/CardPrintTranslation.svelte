<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.card-print-translation')}>
    <Model
        model={{
            name: 'string',
            typeLine: 'string | undefined',
            text: 'string | undefined',
            mainType: 'string | undefined',
            language: `<span class="font-bold">${$t('common.language')}</span>`,
        }}
    />
</TassadapiModelsMenu>
