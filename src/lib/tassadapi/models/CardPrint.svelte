<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.card-print')}>
    <Model
        model={{
            oracleId: 'string (parent card\'s oracle id)',
            layout: 'string (parent card\'s layout)',
            scryfallId: 'string',
            artist: 'string',
            collectorNumber: 'string',
            scryfallUri: 'string',
            scryfallApiUri: 'string',
            keyWords: 'string []',
            set: `<span class="font-bold">${$t('common.set')}</span> | undefined`,
            imageUri: `<span class="font-bold">${$t('common.card-print-image-uri')}</span> | undefined`,
            price: `<span class="font-bold">${$t('common.card-print-price')}</span> | undefined`,
            purchaseUri: `<span class="font-bold">${$t('common.card-print-purchase-uri')}</span> | undefined`,
            relatedUri: `<span class="font-bold">${$t('common.card-print-related-uri')}</span> | undefined`,
            legality: `<span class="font-bold">${$t('common.card-legality')}</span> (parent card\'s legality)`,
            faces: `<span class="font-bold">${$t('common.card-print-face')}</span> []`,
            translation: `<span class="font-bold">${$t('common.card-print-translation')}</span>`
        }}
    />
</TassadapiModelsMenu>
