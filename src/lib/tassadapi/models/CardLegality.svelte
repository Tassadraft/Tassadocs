<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.card-legality')} description={$t('tassadapi.models.card-legality.description')}>
    <Model
        model={{
            standard: 'legal | not_legal | restricted | banned | undefined',
            pioneer: 'legal | not_legal | restricted | banned | undefined',
            modern: 'legal | not_legal | restricted | banned | undefined',
            legacy: 'legal | not_legal | restricted | banned | undefined',
            pauper: 'legal | not_legal | restricted | banned | undefined',
            vintage: 'legal | not_legal | restricted | banned | undefined',
            commander: 'legal | not_legal | restricted | banned | undefined',
            pauperCommander: 'legal | not_legal | restricted | banned | undefined',
            duel: 'legal | not_legal | restricted | banned | undefined',
        }}
    />
</TassadapiModelsMenu>
