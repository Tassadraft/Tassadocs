<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.card-print-image-uri')}>
    <Model
        model={{
            small: 'string | undefined',
            normal: 'string | undefined',
            large: 'string | undefined',
            png: 'string | undefined',
            artCrop: 'string | undefined',
        }}
    />
</TassadapiModelsMenu>
