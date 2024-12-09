<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.subscription-product')}>
    <Model model={
        {
            price: 'number',
            interval: 'string',
            intervalCount: 'number',
            mode: 'payment | subscription',
            perMonth: 'number',
            translation: `<span class="font-bold">${$t('common.subscription-product-translation')}</span>`
        }}
    />
</TassadapiModelsMenu>
