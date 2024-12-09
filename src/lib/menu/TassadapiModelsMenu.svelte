<script>
    import ApiDocMenu from './ApiDocMenu.svelte';
    import MenuItem from './MenuItem.svelte';
    import { t } from 'svelte-i18n';
    import FlagMenu from './FlagMenu.svelte';
    import Title from '../shared/Title.svelte';
    import Panel from '../shared/Panel.svelte';
    import Subtitle from '../shared/Subtitle.svelte';

    export let title;
    export let description = '';
</script>

<Subtitle>{$t('menu.models')}</Subtitle>

<ApiDocMenu>
    <div slot="menu">
        <MenuItem iconLeft="home" href="/">{$t('menu.home')}</MenuItem>
        <div class="mt-3">
            <div class="m-3">
                <Subtitle>{$t('menu.models')}</Subtitle>
            </div>
            <Panel>
                <MenuItem iconLeft="language" href="/tassadapi/models/language">{$t('common.language')}</MenuItem>
                <MenuItem iconLeft="lego" href="/tassadapi/models/build">{$t('common.build')}</MenuItem>
                <MenuItem iconLeft="file" href="/tassadapi/models/file">{$t('common.file')}</MenuItem>
                <MenuItem iconLeft="package" href="/tassadapi/models/set">{$t('common.set')}</MenuItem>
            </Panel>
            <Panel>
                <MenuItem iconLeft="card" href="/tassadapi/models/card">{$t('common.card')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/card-light">{$t('common.card-light')}</MenuItem>
                <MenuItem iconLeft="gavel" href="/tassadapi/models/card-legality">{$t('common.card-legality')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/card-print">{$t('common.card-print')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/card-print-face">{$t('common.card-print-face')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/card-print-image-uri">{$t('common.card-print-image-uri')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/card-print-price">{$t('common.card-print-price')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/card-print-purchase-uri">{$t('common.card-print-purchase-uri')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/card-print-related-uri">{$t('common.card-print-related-uri')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/card-print-translation">{$t('common.card-print-translation')}</MenuItem>
            </Panel>
            <Panel>
                <MenuItem iconLeft="card" href="/tassadapi/models/subscription-product">{$t('common.subscription-product')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/subscription-product-translation">{$t('common.subscription-product-translation')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/subscription-product-translation-feature">{$t('common.subscription-product-translation-feature')}</MenuItem>
            </Panel>
            <Panel>
                <MenuItem iconLeft="card" href="/tassadapi/models/github-repository">{$t('common.github-repository')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/github-repository-label">{$t('common.github-repository-label')}</MenuItem>
            </Panel>
            <Panel>
                <MenuItem iconLeft="card" href="/tassadapi/models/deck">{$t('common.deck')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/deck-light">{$t('common.deck-light')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/deck-category">{$t('common.deck-category')}</MenuItem>
                <MenuItem iconLeft="list" href="/tassadapi/models/category">{$t('common.category')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/deck-card">{$t('common.deck-card')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/deck-card-related-card-print">{$t('common.deck-card-related-card-print')}</MenuItem>
            </Panel>
            <Panel>
                <MenuItem iconLeft="card" href="/tassadapi/models/user">{$t('common.user')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/subscription">{$t('common.subscription')}</MenuItem>
            </Panel>
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
