<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.subscription')}>
    <Model model={
        {
            status: 'active | inactive | pending | cancelled',
            product: `<span class="font-bold">${$t('common.subscription-product')}</span>`
        }}
    />
</TassadapiModelsMenu>
