<script>
    import ApiDocMenu from './ApiDocMenu.svelte';
    import MenuItem from './MenuItem.svelte';
    import { t } from 'svelte-i18n';
    import FlagMenu from './FlagMenu.svelte';
    import Title from '../shared/Title.svelte';
    import Panel from '../shared/Panel.svelte';
    import Subtitle from '../shared/Subtitle.svelte';
    import { raw } from '../../service/stringService.js';
    import Switch from '../shared/Switch.svelte';
    import ThemeSwitch from '../shared/ThemeSwitch.svelte';

    export let title;
    export let description = '';
</script>

<ApiDocMenu>
    <div slot="menu" class="mt-3">
        <MenuItem iconLeft="home" href="/">{$t('menu.home')}</MenuItem>
        <MenuItem iconLeft="request" href="/tassadapi/end-points">{$t('menu.end-points')}</MenuItem>
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
                <MenuItem iconLeft="user" href="/tassadapi/models/user">{$t('common.user')}</MenuItem>
                <MenuItem iconLeft="link" href="/tassadapi/models/access-token">{$t('common.access-token')}</MenuItem>
                <MenuItem iconLeft="mastercard" href="/tassadapi/models/subscription">{$t('common.subscription')}</MenuItem>
            </Panel>
            <Panel>
                <MenuItem iconLeft="card" href="/tassadapi/models/card">{$t('common.card')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/card-light">{$t('common.card-light')}</MenuItem>
                <MenuItem iconLeft="gavel" href="/tassadapi/models/card-legality">{$t('common.card-legality')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/card-print">{$t('common.card-print')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/card-print-face">{$t('common.card-print-face')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/card-print-image-uri">{$t('common.card-print-image-uri')}</MenuItem>
                <MenuItem iconLeft="price" href="/tassadapi/models/card-print-price">{$t('common.card-print-price')}</MenuItem>
                <MenuItem iconLeft="price" href="/tassadapi/models/card-print-purchase-uri">{$t('common.card-print-purchase-uri')}</MenuItem>
                <MenuItem iconLeft="link" href="/tassadapi/models/card-print-related-uri">{$t('common.card-print-related-uri')}</MenuItem>
                <MenuItem iconLeft="language" href="/tassadapi/models/card-print-translation">{$t('common.card-print-translation')}</MenuItem>
            </Panel>
            <Panel>
                <MenuItem iconLeft="card" href="/tassadapi/models/processed-card">{$t('common.processed-card')}</MenuItem>
            </Panel>
            <Panel>
                <MenuItem iconLeft="stack" href="/tassadapi/models/deck">{$t('common.deck')}</MenuItem>
                <MenuItem iconLeft="stack" href="/tassadapi/models/deck-light">{$t('common.deck-light')}</MenuItem>
                <MenuItem iconLeft="list" href="/tassadapi/models/deck-category">{$t('common.deck-category')}</MenuItem>
                <MenuItem iconLeft="list" href="/tassadapi/models/category">{$t('common.category')}</MenuItem>
                <MenuItem iconLeft="card" href="/tassadapi/models/deck-card">{$t('common.deck-card')}</MenuItem>
                <MenuItem iconLeft="link" href="/tassadapi/models/deck-card-related-card-print">{$t('common.deck-card-related-card-print')}</MenuItem>
            </Panel>
            <Panel>
                <MenuItem iconLeft="package" href="/tassadapi/models/subscription-product">{$t('common.subscription-product')}</MenuItem>
                <MenuItem iconLeft="language" href="/tassadapi/models/subscription-product-translation">{$t('common.subscription-product-translation')}</MenuItem>
                <MenuItem iconLeft="feature" href="/tassadapi/models/subscription-product-translation-feature">{$t('common.subscription-product-translation-feature')}</MenuItem>
            </Panel>
        </div>
    </div>
    <div slot="content">
        <div class="flex justify-between">
            <Title {title} />
            <div class="flex gap-10 items-center">
                <div class="flex gap-10 mb-2">
                    <ThemeSwitch />
                </div>
                <FlagMenu />
            </div>
        </div>

        {#if description}
            <Panel>
                <p>{@html raw(description)}</p>
            </Panel>
        {/if}
        <slot />
    </div>
</ApiDocMenu>
