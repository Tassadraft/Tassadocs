<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.card-print-face')}>
    <Model
        model={{
            index: 'number',
            artist: 'string',
            manaCost: 'string',
            colors: 'string []',
            imageUri: `<span class="font-bold">${$t('common.card-print-image-uri')}</span> | undefined`,
            translation: `<span class="font-bold">${$t('common.card-print-translation')}</span>`
        }}
    />
</TassadapiModelsMenu>
