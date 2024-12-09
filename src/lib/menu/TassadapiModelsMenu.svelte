<script>
    import ApiDocMenu from './ApiDocMenu.svelte';
    import MenuItem from './MenuItem.svelte';
    import { t } from 'svelte-i18n';
    import FlagMenu from './FlagMenu.svelte';
    import Title from '../shared/Title.svelte';
    import Panel from '../shared/Panel.svelte';

    export let title;
    export let description = '';
</script>

<ApiDocMenu>
    <div slot="menu">
        <MenuItem iconLeft="home" href="/">{$t('menu.home')}</MenuItem>
        <div class="mt-3">
            <MenuItem iconLeft="language" href="/tassadapi/models/language">{$t('common.language')}</MenuItem>
            <MenuItem iconLeft="lego" href="/tassadapi/models/build">{$t('common.build')}</MenuItem>
            <MenuItem iconLeft="list" href="/tassadapi/models/category">{$t('common.category')}</MenuItem>
            <MenuItem iconLeft="file" href="/tassadapi/models/file">{$t('common.file')}</MenuItem>
            <MenuItem iconLeft="package" href="/tassadapi/models/set">{$t('common.set')}</MenuItem>
            <MenuItem iconLeft="gavel" href="/tassadapi/models/card-legality">{$t('common.card-legality')}</MenuItem>
            <MenuItem iconLeft="card" href="/tassadapi/models/card">{$t('common.card')}</MenuItem>
            <MenuItem iconLeft="card" href="/tassadapi/models/card-light">{$t('common.card-light')}</MenuItem>
            <MenuItem iconLeft="card" href="/tassadapi/models/subscription-product-translation">{$t('common.subscription-product-translation')}</MenuItem>
            <MenuItem iconLeft="card" href="/tassadapi/models/subscription-product-translation-feature">{$t('common.subscription-product-translation-feature')}</MenuItem>
        </div>
    </div>
    <div slot="content">
        <div class="flex justify-between">
            <Title {title} />
            <FlagMenu />
        </div>

        {#if description}
            <Panel>
                <p>{@html description}</p>
            </Panel>
        {/if}
        <slot />
    </div>
</ApiDocMenu>
