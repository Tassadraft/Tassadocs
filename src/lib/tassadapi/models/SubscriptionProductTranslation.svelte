<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.subscription-product-translation')}>
    <Model model={{
            description: 'string',
            enabled: 'boolean',
            stripePriceId: 'string',
            language: `<span class="font-bold">${$t('common.language')}</span>`,
            features: `<span class="font-bold">${$t('common.subscription-product-translation-feature')}[]</span>`,
        }}
    />
</TassadapiModelsMenu>
