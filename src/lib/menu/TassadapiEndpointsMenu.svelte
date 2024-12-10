<script>
    import FlagMenu from './FlagMenu.svelte';
    import Subtitle from '../shared/Subtitle.svelte';
    import ApiDocMenu from './ApiDocMenu.svelte';
    import MenuItem from './MenuItem.svelte';
    import Panel from '../shared/Panel.svelte';
    import Title from '../shared/Title.svelte';
    import { t } from 'svelte-i18n';
    import { raw } from '../../service/stringService.js';

    export let title;
    export let description = null;
</script>

<ApiDocMenu>
    <div slot="menu">
        <MenuItem iconLeft="home" href="/">{$t('menu.home')}</MenuItem>
        <MenuItem iconLeft="structure" href="/tassadapi/models">{$t('menu.models')}</MenuItem>
        <div class="mt-3">
            <div class="m-3">
                <Subtitle>{$t('menu.end-points')}</Subtitle>
            </div>
            <Panel>
                <MenuItem iconLeft="shield" href="/tassadapi/end-points/auth">{$t('tassadapi.end-points.auth.title')}</MenuItem>
                <MenuItem iconLeft="pen" href="/tassadapi/end-points/contact">{$t('tassadapi.end-points.contact.title')}</MenuItem>
                <MenuItem iconLeft="password" href="/tassadapi/end-points/reset-password">{$t('tassadapi.end-points.reset-password.title')}</MenuItem>
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
                <p>{@html raw(description)}</p>
            </Panel>
        {/if}
        <slot />
    </div>
</ApiDocMenu>
