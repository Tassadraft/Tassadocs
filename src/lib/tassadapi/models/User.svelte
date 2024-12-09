<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.user')}>
    <Model
        model={{
            username: 'string',
            email: 'string',
            role: 'admin | friend | user',
            enabled: 'boolean',
            acceptedTermsAndConditions: 'boolean',
            activeSubscription: `<span class="font-bold">${$t('common.subscription')}</span> | undefined`,
            profilePicture: `<span class="font-bold">${$t('common.file')}</span> | undefined`,
        }}
    />
</TassadapiModelsMenu>
